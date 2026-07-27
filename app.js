/* THE WAR ROOM — vertical map-brief player, NetWatch-style layout */
(function () {
  "use strict";

  const BRIEF = window.BRIEF;
  const DWELL_MS = 12000;      // time on each story while playing
  const FLY_MS = 2600;         // camera flight time
  const MAX_K = 30;            // zoom ceiling (tiny island states)
  const FIT = 0.62;            // fraction of the frame the story bbox fills

  // Desktop / web layout (sidebar rundown, wide map). Must match the CSS
  // media query. Phone keeps the lower half free for the story text; the
  // desktop map can use most of its height.
  const DESK = window.matchMedia("(min-width: 900px) and (orientation: landscape)");
  const useH = () => DESK.matches ? 0.60 : 0.42;   // usable-height fraction
  const cyOff = () => DESK.matches ? 0.05 : 0.10;  // downward centre shift

  const ACCENT = getCSS("--accent");
  // each nation in a story gets its own colour, assigned in listed order
  const NATION_COLORS = ["#d03b3b", "#3a72d8", "#1baf7a"];
  const NATION_EDGES = ["#e34948", "#5b8ce0", "#2fc38d"];
  // alliance blocs always wear their own colour (EU blue, etc.)
  const GROUP_COLORS = { EU: "#3a72d8", NATO: "#2f5fb3", ASEAN: "#1baf7a" };
  const GROUP_EDGES = { EU: "#5b8ce0", NATO: "#4a7bd0", ASEAN: "#2fc38d" };
  const GROUPS = (window.BRIEF && window.BRIEF.groups) || {};

  // expand a story's `countries` entries (ids or group keys) into colour maps
  function nationColors(ev) {
    const colorOf = new Map(), edgeOf = new Map(), used = new Set();
    ev.countries.forEach(entry => {
      if (GROUPS[entry]) {
        used.add(GROUP_COLORS[entry]);
        GROUPS[entry].forEach(id => {
          colorOf.set(id, GROUP_COLORS[entry]);
          edgeOf.set(id, GROUP_EDGES[entry]);
        });
      }
    });
    let pi = 0;
    ev.countries.forEach(entry => {
      if (GROUPS[entry]) return;
      let guard = 0;
      while (used.has(NATION_COLORS[pi % NATION_COLORS.length]) && guard++ < 4) pi++;
      colorOf.set(entry, NATION_COLORS[pi % NATION_COLORS.length]);
      edgeOf.set(entry, NATION_EDGES[pi % NATION_EDGES.length]);
      used.add(NATION_COLORS[pi % NATION_COLORS.length]);
      pi++;
    });
    return { colorOf, edgeOf };
  }

  function allIds(ev) {
    return ev.countries.flatMap(entry => GROUPS[entry] || [entry]);
  }

  function getCSS(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // ── Geodata ──────────────────────────────────────────────
  const world = window.WORLD_TOPO;
  const countries = topojson.feature(world, world.objects.countries).features;
  const byId = new Map(countries.map(f => [String(f.id), f]));

  // ── Map scaffolding ──────────────────────────────────────
  const frame = document.getElementById("frame");
  const svg = d3.select("#map");
  const gZoom = svg.append("g");                 // zoomed world
  const gOverlay = svg.append("g");              // screen-space markers/badges

  let width = 0, height = 0;
  let projection = d3.geoNaturalEarth1();
  let path = d3.geoPath(projection);
  let view = [0, 0, 1];                          // [cx, cy, viewWidth] in base coords
  let worldView = [0, 0, 1];
  let activeIdx = -1;
  let playing = true;
  let dwellTimer = null;

  // Deep link: ?item=N jumps straight to story N with no camera flight
  const PARAMS = new URLSearchParams(location.search);
  const STILL = PARAMS.has("item");

  const graticule = d3.geoGraticule10();

  gZoom.append("path").attr("class", "sphere").datum({ type: "Sphere" });
  gZoom.append("path").attr("class", "graticule").datum(graticule)
    .attr("vector-effect", "non-scaling-stroke").attr("stroke-width", 0.6);

  const countrySel = gZoom.selectAll("path.country")
    .data(countries).join("path")
    .attr("class", "country")
    .attr("vector-effect", "non-scaling-stroke")
    .attr("stroke-width", 0.6);

  function layout() {
    width = frame.clientWidth;
    height = frame.clientHeight;
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    projection.fitWidth(width, { type: "Sphere" });
    path = d3.geoPath(projection);
    const b = path.bounds({ type: "Sphere" });
    const mapH = b[1][1] - b[0][1];
    const cy = (b[0][1] + b[1][1]) / 2;
    worldView = [width / 2, cy, width * Math.min(1, mapH / height)];
    gZoom.selectAll("path").attr("d", path);
    if (activeIdx >= 0) {
      const ev = BRIEF.events[activeIdx];
      setView(STILL ? storyStillView(ev) : eventView(ev));
    } else {
      setView(worldView);
    }
  }

  // The view a ?item deep link should show (also reused after resizes).
  function storyStillView(ev) {
    const badges = ev.badges || [];
    if (PARAMS.has("stop") && badges.length > 1) {
      return nationView(badges[Math.min(+PARAMS.get("stop") - 1, badges.length - 1)]);
    }
    if (PARAMS.has("tight")) {
      return badges.length > 1 ? nationView(badges[0]) : tightView(ev, eventView(ev));
    }
    return eventView(ev);
  }

  function setView(v) {
    view = v;
    const k = width / v[2];
    const tx = width / 2 - v[0] * k;
    const ty = height / 2 - v[1] * k;
    gZoom.attr("transform", `translate(${tx},${ty}) scale(${k})`);
    drawOverlay(k, tx, ty);
  }

  function flyTo(v1, ms, after) {
    const v0 = view.slice();
    d3.select(frame).interrupt().transition()
      .duration(ms)
      .ease(d3.easeCubicInOut)
      .tween("fly", () => {
        const i = d3.interpolateZoom(v0, v1);
        return t => setView(i(t));
      })
      .on("end", () => { if (after) after(); });
  }

  // slow Ken Burns drift — runs during the dwell
  function driftTo(v1, ms, delay) {
    d3.select(frame).transition()
      .delay(delay || 0)
      .duration(Math.max(ms, 800))
      .ease(d3.easeSinInOut)
      .tween("drift", () => {
        const i = d3.interpolateZoom(view.slice(), v1);
        return t => setView(i(t));
      });
  }

  // Wide view for a story: union of highlighted country bounds + markers.
  function eventView(ev) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const id of allIds(ev)) {
      const b = countryBounds(id);
      if (!b) continue;
      x0 = Math.min(x0, b[0][0]); y0 = Math.min(y0, b[0][1]);
      x1 = Math.max(x1, b[1][0]); y1 = Math.max(y1, b[1][1]);
    }
    for (const m of ev.markers || []) {
      const p = projection([m.lon, m.lat]);
      x0 = Math.min(x0, p[0] - 4); y0 = Math.min(y0, p[1] - 4);
      x1 = Math.max(x1, p[0] + 4); y1 = Math.max(y1, p[1] + 4);
    }
    const dw = Math.max(x1 - x0, 1), dh = Math.max(y1 - y0, 1);
    const uw = width * 0.9, uh = height * useH();
    let k = FIT * Math.min(uw / dw, uh / dh);
    k = Math.max(1, Math.min(MAX_K, k));
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2 + (cyOff() * height) / k;
    return [cx, cy, width / k];
  }

  // Tight opening view: closer in, centred on the primary nation.
  function tightView(ev, vWide) {
    const kW = width / vWide[2];
    const kT = Math.min(kW * 1.6, MAX_K * 1.15);
    let c = null;
    const b0 = (ev.badges || [])[0];
    if (b0) c = badgeBase(b0);
    if (!c && ev.markers && ev.markers[0]) c = projection([ev.markers[0].lon, ev.markers[0].lat]);
    if (!c) c = [vWide[0], vWide[1]];
    const cy = c[1] + (cyOff() * height) / kT;
    return [c[0], cy, width / kT];
  }

  function badgeBase(b) {
    if (b.anchor) return projection(b.anchor);
    const f = byId.get(b.country);
    return f ? path.centroid(f) : null;
  }

  // Mainland fit-boxes for nations whose map shapes include far-flung
  // territories (French Guiana, Alaska, overseas islands...) that would
  // otherwise balloon the camera framing to half the globe.
  const FIT_BOXES = {
    "250": [[-5.5, 41], [9.8, 51.5]],    // France (metropolitan)
    "840": [[-125, 24], [-66, 50]],      // USA (CONUS)
    "643": [[27, 45], [105, 72]],        // Russia (west of Yakutia)
    "528": [[3.2, 50.7], [7.3, 53.6]],   // Netherlands (European)
    "554": [[166, -47.5], [179, -34]],   // New Zealand (main islands)
    "152": [[-76, -56], [-66, -17]],     // Chile (continental)
    "724": [[-10, 35.8], [4.6, 44]],     // Spain (peninsula + Balearics)
    "620": [[-9.6, 36.8], [-6.1, 42.2]]  // Portugal (continental)
  };

  function countryBounds(id) {
    const box = FIT_BOXES[id];
    if (box) {
      const [[lo0, la0], [lo1, la1]] = box;
      const pts = [[lo0, la0], [lo1, la0], [lo0, la1], [lo1, la1]].map(projection);
      const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
      return [[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]];
    }
    const f = byId.get(id);
    return f ? path.bounds(f) : null;
  }

  // Camera view framing one nation (or bloc / explicit lon-lat box) —
  // multi-nation stories travel between these instead of showing the world.
  function nationView(b) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    const grow = bb => {
      x0 = Math.min(x0, bb[0][0]); y0 = Math.min(y0, bb[0][1]);
      x1 = Math.max(x1, bb[1][0]); y1 = Math.max(y1, bb[1][1]);
    };
    if (Array.isArray(b.region)) {
      const [[lo0, la0], [lo1, la1]] = b.region;
      [[lo0, la0], [lo1, la0], [lo0, la1], [lo1, la1]].forEach(c => {
        const p = projection(c);
        grow([[p[0], p[1]], [p[0], p[1]]]);
      });
    } else if (b.region && GROUPS[b.region]) {
      GROUPS[b.region].forEach(id => {
        const bb = countryBounds(id);
        if (bb) grow(bb);
      });
    } else if (b.country && countryBounds(b.country)) {
      grow(countryBounds(b.country));
    } else if (b.anchor) {
      const p = projection(b.anchor);
      grow([[p[0] - 20, p[1] - 20], [p[0] + 20, p[1] + 20]]);
    }
    const dw = Math.max(x1 - x0, 1), dh = Math.max(y1 - y0, 1);
    const uw = width * 0.9, uh = height * useH();
    let k = 0.62 * Math.min(uw / dw, uh / dh);
    k = Math.max(1.8, Math.min(18, k));
    const cy = (y0 + y1) / 2 + (cyOff() * height) / k;
    return [(x0 + x1) / 2, cy, width / k];
  }

  // ── Screen-space overlay: pins + nation badges ───────────
  let overlayData = { markers: [], badges: [] };

  function decaPoints(r) {
    return Array.from({ length: 10 }, (_, i) => {
      const a = (-90 + i * 36) * Math.PI / 180;
      return `${r * Math.cos(a)},${r * Math.sin(a)}`;
    }).join(" ");
  }

  function drawOverlay(k, tx, ty) {
    const pt = p => [tx + k * p[0], ty + k * p[1]];

    // ── nation badges — decagon frame, name, emblem(s) ─────
    const S = overlayData.badges.length > 1 ? 104 : 128;   // badge size
    const bd = gOverlay.selectAll("g.badge-g:not(.exiting)").data(overlayData.badges, d => d.name);
    const bdEnter = bd.enter().append("g").attr("class", "badge-g")
      .style("opacity", 0)
      .each((d, i) => {
        // relaxed reveal: the first nation's badge fades in on arrival,
        // the second joins a few seconds later as the camera travels on
        d._revealAt = STILL ? 0 : performance.now() + FLY_MS * 0.55 + i * 2600;
      });
    bdEnter.each(function (d) {
      const g = d3.select(this);
      const r = S / 2;
      g.append("polygon").attr("class", "b-frame")
        .attr("points", decaPoints(r)).attr("stroke", d.color || ACCENT);
      g.append("polygon").attr("class", "b-inner")
        .attr("points", decaPoints(r - 6));
      g.append("text")
        .attr("y", -r + 19)
        .attr("font-size", S > 110 ? 10.5 : 9.5)
        .text(d.name);
      const files = d.emblems || [];
      const s = files.length > 1 ? S * 0.36 : S * 0.52;
      files.forEach((f, i) => {
        const x = files.length > 1 ? (i === 0 ? -s - 3 : 3) : -s / 2;
        g.append("image")
          .attr("href", "emblems/" + f)
          .attr("x", x).attr("y", -s / 2 + 7)
          .attr("width", s).attr("height", s)
          .attr("preserveAspectRatio", "xMidYMid meet");
      });
    });
    bd.exit().remove();

    // Placement: the badge hovers centred over its nation (or its explicit
    // data anchor) and only ever moves with the map. It stays fully inside
    // the frame, and fades once its nation has drifted out of view.
    const badgePts = [];
    const bNodes = gOverlay.selectAll("g.badge-g").nodes();
    const bData = bNodes.map(n => d3.select(n).datum());
    const bPos = bData.map(d => pt(badgeBase(d) || [0, 0]));
    const bOff = bPos.map(p =>
      p[0] < -60 || p[0] > width + 60 || p[1] < -60 || p[1] > height + 60);
    // neighbouring nations: push overlapping badges apart symmetrically
    for (let i = 0; i < bPos.length; i++) {
      for (let j = i + 1; j < bPos.length; j++) {
        if (bOff[i] || bOff[j]) continue;
        let dx = bPos[j][0] - bPos[i][0], dy = bPos[j][1] - bPos[i][1];
        let dist = Math.hypot(dx, dy);
        const minD = S + 8;
        if (dist < minD) {
          if (dist < 1) { dx = 1; dy = 0; dist = 1; }
          const push = (minD - dist) / 2;
          bPos[i][0] -= dx / dist * push; bPos[i][1] -= dy / dist * push;
          bPos[j][0] += dx / dist * push; bPos[j][1] += dy / dist * push;
        }
      }
    }
    bNodes.forEach((n, i) => {
      const p = bPos[i], d = bData[i];
      // keep the badge and its name label fully on screen, and clear of
      // the story text zone at the bottom
      const nameHalf = (d.name || "").length * (S > 110 ? 10.5 : 9.5) * 0.42;
      const rr = Math.max(S / 2, nameHalf) + 10;
      p[0] = Math.min(width - rr, Math.max(rr, p[0]));
      p[1] = Math.min(height * (DESK.matches ? 0.72 : 0.55),
                      Math.max(S / 2 + (DESK.matches ? 44 : 100), p[1]));
      if (!bOff[i] && !n.classList.contains("exiting")) badgePts.push(p);
      n.setAttribute("transform", `translate(${p[0]},${p[1]})`);
    });
    gOverlay.selectAll("g.badge-g:not(.exiting)").style("opacity", d => {
      // hidden until its reveal moment, and whenever the nation is
      // outside the frame — all edges soften through the CSS fade
      if (performance.now() < (d._revealAt || 0)) return 0;
      const p = pt(badgeBase(d) || [0, 0]);
      return (p[0] < -60 || p[0] > width + 60 || p[1] < -60 || p[1] > height + 60) ? 0 : 1;
    });

    // ── city pins — hidden while they'd sit inside a badge ─
    const mk = gOverlay.selectAll("g.marker:not(.exiting)").data(overlayData.markers, d => d.label);
    const mkEnter = mk.enter().append("g").attr("class", "marker");
    mkEnter.append("circle").attr("class", "pulse-ring")
      .attr("fill", "none").attr("stroke", ACCENT).attr("stroke-width", 1.5);
    mkEnter.append("circle").attr("class", "core").attr("r", 3.4)
      .attr("fill", ACCENT)
      .attr("stroke", "rgba(6,6,7,0.9)").attr("stroke-width", 1.2);
    mkEnter.append("text").attr("class", "marker-label")
      .attr("font-size", 10).attr("stroke-width", 3)
      .attr("dx", 9).attr("dy", 3.5);
    // outgoing pins fade away, staying glued to the map while they go
    mk.exit().classed("exiting", true).transition("out").delay(600).remove();

    const clear = S / 2 + 16;
    const mkAll = gOverlay.selectAll("g.marker");
    mkAll.attr("transform", d => {
      const p = pt(projection([d.lon, d.lat]));
      return `translate(${p[0]},${p[1]})`;
    });
    gOverlay.selectAll("g.marker:not(.exiting)").style("opacity", d => {
      // pins fade away while a badge covers them, and fade back after
      const p = pt(projection([d.lon, d.lat]));
      return badgePts.some(b => Math.hypot(b[0] - p[0], b[1] - p[1]) < clear) ? 0 : 1;
    });
    // labels flip to the left side near the right frame edge so they never clip
    mkAll.select("text").text(d => d.label)
      .attr("text-anchor", d => {
        const p = pt(projection([d.lon, d.lat]));
        return p[0] > width - 150 ? "end" : "start";
      })
      .attr("dx", d => {
        const p = pt(projection([d.lon, d.lat]));
        return p[0] > width - 150 ? -9 : 9;
      });
    // pins render above badges when visible
    mkAll.raise();
  }

  // play / pause icons as inline SVG — no glyphs that could emojify
  const ICON_PLAY = '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 1.5 12 7 3.5 12.5Z" fill="currentColor"/></svg>';
  const ICON_PAUSE = '<svg width="14" height="14" viewBox="0 0 14 14"><rect x="2.6" y="2" width="3.2" height="10" fill="currentColor"/><rect x="8.2" y="2" width="3.2" height="10" fill="currentColor"/></svg>';
  function setPlayIcon(p) {
    document.getElementById("btn-play").innerHTML = p ? ICON_PAUSE : ICON_PLAY;
  }

  // Headline markup: [[key phrase]] renders in accent orange
  function renderTitle(t) {
    const esc = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return esc.replace(/\[\[(.+?)\]\]/g, "<em>$1</em>");
  }

  // ── Story activation ─────────────────────────────────────
  function setActive(idx, fly = true) {
    activeIdx = ((idx % BRIEF.events.length) + BRIEF.events.length) % BRIEF.events.length;
    const ev = BRIEF.events[activeIdx];

    // per-nation colours; alliance blocs highlight every member in bloc colour
    const { colorOf, edgeOf } = nationColors(ev);

    countrySel
      .attr("stroke-width", d => colorOf.has(String(d.id)) ? 1.4 : 0.6)
      .style("fill", d => colorOf.get(String(d.id)) || "")
      .style("fill-opacity", d => colorOf.has(String(d.id)) ? 0.55 : "")
      .style("stroke", d => edgeOf.get(String(d.id)) || "");
    countrySel.filter(d => colorOf.has(String(d.id))).raise();

    // overlay content: pins + per-nation badges (ring matches nation colour)
    overlayData = {
      markers: ev.markers || [],
      badges: (ev.badges || []).map(b => ({
        ...b,
        color: b.group ? GROUP_EDGES[b.group]
             : b.country ? edgeOf.get(b.country) || ACCENT
             : ACCENT
      }))
    };
    // previous story's badges fade out instead of vanishing
    gOverlay.selectAll("g.badge-g").classed("exiting", true)
      .transition("out").delay(650).remove();

    // camera: single nation — fly tight, then reveal the surroundings;
    // multi-nation — fly to the first nation, hold, then travel to the next
    if (fly) {
      const badges = ev.badges || [];
      if (badges.length > 1) {
        const stops = badges.map(nationView);
        flyTo(stops[0], FLY_MS, () => {
          if (playing) driftTo(stops[1], DWELL_MS - FLY_MS - 2600, 2000);
        });
      } else {
        const vWide = eventView(ev);
        flyTo(tightView(ev, vWide), FLY_MS, () => {
          if (playing) driftTo(vWide, DWELL_MS - FLY_MS - 400);
        });
      }
    }

    // story block
    const story = document.getElementById("story");
    story.classList.remove("show");
    setTimeout(() => {
      document.getElementById("st-cat").textContent = ev.category;
      document.getElementById("st-when").textContent = ev.when;
      document.getElementById("st-title").innerHTML = renderTitle(ev.title);
      document.getElementById("st-summary").textContent = ev.summary;
      document.getElementById("st-source").textContent = ev.source || "Open reporting";
      story.classList.add("show");
    }, STILL ? 0 : 350);

    // segments
    document.querySelectorAll(".segments .seg").forEach((seg, i) => {
      seg.classList.toggle("done", i < activeIdx);
      const fill = seg.firstElementChild;
      fill.style.transition = "none";
      fill.style.width = i < activeIdx ? "100%" : "0%";
      if (i === activeIdx && playing) {
        void fill.offsetWidth;
        fill.style.transition = `width ${DWELL_MS}ms linear`;
        fill.style.width = "100%";
      }
    });

    document.getElementById("counter").textContent =
      `ITEM ${String(activeIdx + 1).padStart(2, "0")} / ${String(BRIEF.events.length).padStart(2, "0")}`;

    document.querySelectorAll(".rd-item").forEach((el, i) => {
      el.classList.toggle("active", i === activeIdx);
      if (i === activeIdx && DESK.matches) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });

    restartDwell();
  }

  // ── Autoplay ─────────────────────────────────────────────
  function restartDwell() {
    clearTimeout(dwellTimer);
    if (!playing) return;
    dwellTimer = setTimeout(() => setActive(activeIdx + 1), DWELL_MS);
  }

  function setPlaying(p) {
    playing = p;
    setPlayIcon(p);
    if (activeIdx >= 0) {
      const seg = document.querySelectorAll(".segments .seg")[activeIdx];
      if (seg) {
        const fill = seg.firstElementChild;
        if (!p) {
          fill.style.width = getComputedStyle(fill).width; // freeze
          fill.style.transition = "none";
        } else {
          void fill.offsetWidth;
          fill.style.transition = `width ${DWELL_MS}ms linear`;
          fill.style.width = "100%";
        }
      }
    }
    if (!p) {
      clearTimeout(dwellTimer);
      d3.select(frame).interrupt();          // freeze the drift
    } else {
      if (activeIdx >= 0) {
        // resume toward where the segment was headed: the second nation
        // on multi-nation stories, the wide reveal otherwise
        const ev = BRIEF.events[activeIdx];
        const badges = ev.badges || [];
        const target = badges.length > 1 ? nationView(badges[badges.length - 1]) : eventView(ev);
        driftTo(target, 5000);
      }
      restartDwell();
    }
  }

  // ── Static chrome ────────────────────────────────────────
  function buildChrome() {
    document.getElementById("brief-date").textContent = BRIEF.date;
    document.getElementById("sb-date").textContent = BRIEF.date;

    document.getElementById("segments").innerHTML =
      BRIEF.events.map(() => `<span class="seg"><i></i></span>`).join("");

    // sidebar rundown (desktop layout): every story, click to jump
    const rundown = document.getElementById("rundown");
    rundown.innerHTML = BRIEF.events.map((ev, i) => `
      <li><button class="rd-item" data-idx="${i}">
        <span class="rd-no">${String(i + 1).padStart(2, "0")}</span>
        <span class="rd-body">
          <span class="rd-meta"><b>${ev.category}</b>&nbsp;&nbsp;//&nbsp;&nbsp;${ev.when}</span>
          <span class="rd-title">${renderTitle(ev.title)}</span>
          ${ev.location ? `<span class="rd-loc">${ev.location}</span>` : ""}
        </span>
      </button></li>`).join("");
    rundown.querySelectorAll(".rd-item").forEach(btn =>
      btn.addEventListener("click", () => setActive(+btn.dataset.idx)));

    document.getElementById("sources-list").innerHTML = BRIEF.sources.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener">&#9656; ${s.name}</a>`
    ).join("");

    // preload emblem artwork so badges never pop in half-loaded
    new Set(BRIEF.events.flatMap(e => (e.badges || []).flatMap(b => b.emblems || [])))
      .forEach(f => { const img = new Image(); img.src = "emblems/" + f; });
  }

  // ── Controls ─────────────────────────────────────────────
  document.getElementById("btn-play").addEventListener("click", () => setPlaying(!playing));
  document.getElementById("tap-prev").addEventListener("click", () => setActive(activeIdx - 1));
  document.getElementById("tap-next").addEventListener("click", () => setActive(activeIdx + 1));
  document.getElementById("btn-sources").addEventListener("click", function () {
    document.getElementById("sources-panel").classList.toggle("open");
    this.classList.toggle("on");
  });
  window.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") setActive(activeIdx + 1);
    else if (e.key === "ArrowLeft") setActive(activeIdx - 1);
    else if (e.key === " ") { e.preventDefault(); setPlaying(!playing); }
  });
  window.addEventListener("resize", layout);
  if (DESK.addEventListener) DESK.addEventListener("change", layout);

  // ── Boot ─────────────────────────────────────────────────
  buildChrome();
  layout();

  setPlayIcon(true);
  if (STILL) {
    playing = false;
    setPlayIcon(false);
    const idx = (parseInt(PARAMS.get("item"), 10) || 1) - 1;
    setActive(idx, false);
    // ?item=N&tight shows the opening framing; &stop=2 the second nation stop
    setView(storyStillView(BRIEF.events[activeIdx]));
  } else {
    // hold the world view for a beat, then roll the brief
    setTimeout(() => setActive(0), 1400);
  }
  if (PARAMS.has("dbg")) {
    const ev = BRIEF.events[Math.max(activeIdx, 0)];
    document.title = JSON.stringify({
      stop: PARAMS.get("stop"),
      nBadges: (ev.badges || []).length,
      view: view.map(v => Math.round(v)),
      nv: ev.badges && ev.badges.length ? nationView(ev.badges[0]).map(v => Math.round(v)) : null
    });
  }
})();
