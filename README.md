# The War Room — Daily Geopolitical Brief

A self-updating daily brief of the world's biggest stories, played out on a
dark animated world map: the camera flies between the involved nations,
highlights them, pins the key cities and shows a broadcast-style headline
and summary for each item. New brief every morning, compiled from
open-source reporting.

The app adapts to the screen:

| Form | Address | Notes |
|---|---|---|
| Website (desktop) | https://fillipkja.github.io/war-room/ | rundown sidebar + full-width map |
| Website (phone) | same address | fullscreen vertical story player |
| PWA | same address → "Add to Home Screen" | own app icon, works offline |

## How it works

- **Phone / portrait** — a 9:16 story player: tap left/right to move between
  items, space or the round button to pause, ⓘ for the day's sources.
- **Desktop / landscape** (≥ 900 px wide) — a war-room console: the full
  rundown of the day's stories in a sidebar (click any item to jump), the
  map filling the rest of the screen. Arrow keys navigate, space pauses.
- Every story lists its involved nations (highlighted on the map, each with
  a decagon emblem badge), city markers, a "Brief Look" summary and the
  source outlet. Alliance blocs (EU, NATO, ASEAN) highlight every member.

## File structure

```
war-room/
├── index.html            # markup + all CSS (phone + desktop layouts)
├── app.js                # map, camera flights, story player, rundown
├── data.js               # THE CONTENT — the only file that changes daily
├── emblems/              # national coats of arms (SVG/PNG)
├── vendor/               # d3, topojson-client, world map data (committed)
├── icons/                # PWA icons
├── manifest.webmanifest  # PWA manifest
├── sw.js                 # service worker (network-first, offline fallback)
├── scripts/
│   └── daily-update.sh   # the daily auto-update job (launchd)
└── UPDATE_BRIEF.md       # instructions Claude follows for each update
```

No build step. What's in the repo is what gets served.

## Daily auto-update

A launchd job (`com.warroom.daily`, running in
`/Users/fillip/App_test/war-room`) invokes `scripts/daily-update.sh` every
morning. It runs Claude with the instructions in `UPDATE_BRIEF.md`:
research today's top world events, rewrite `data.js` in the existing
schema, verify by rendering screenshots, then commit and push.

## Development

```bash
python3 -m http.server 8642        # open http://localhost:8642
```

Useful deep links (also used for verification screenshots):

```
?item=3          jump straight to story 3, paused, no camera flight
?item=3&tight    the story's tight opening framing
?item=3&stop=2   the second nation stop of a multi-nation story
```

Quick visual check (headless Chrome):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --disable-gpu --window-size=580,1030 --screenshot=/tmp/warroom.png \
  --virtual-time-budget=4000 "http://localhost:8642/?item=1"
```

Use `--window-size=1600,1000` to check the desktop layout.

Deploy is `git push` — GitHub Pages republishes automatically (~1 min).
