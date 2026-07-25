# Daily War Room brief update

You are updating the War Room app's daily brief. Work in this directory
(the war-room git repo). Modify ONLY `data.js` (and, if needed, add new
emblem files under `emblems/`). Do not touch the app code.

## 1. Research

Run several web searches for today's most important world events:
- geopolitics, wars/conflicts, summits and alliance meetings (NATO, EU, ASEAN, G7, BRICS...)
- elections, new presidents/prime ministers, leadership changes, coups
- major diplomacy (state visits, bilateral meetings, treaties, trade deals)
- plus notable global events: major sports finals, health emergencies, disasters

Collect 10–13 items. Strongly prefer the last 24–48 hours; nothing older
than one week. Lead with the biggest story of the day.

## 2. Rewrite data.js

Keep the exact existing schema (read the current file first). Per event:
- `date`: today, formatted like `26//JULY//2026`
- `when`: e.g. `SAT 26 JUL`, `YESTERDAY`, or `THIS WEEK` (day-precision only when confident)
- `title`: wrap 1–3 key phrases in `[[...]]` (rendered orange)
- `summary`: 2–3 sentences, neutral briefing tone ("Brief Look" style)
- `source`: the actual outlet the item came from
- `countries`: ISO 3166-1 numeric ids AS STRINGS with leading zeros
  (e.g. "032" Argentina, "056" Belgium). Alliance bloc keys ("EU", "NATO",
  "ASEAN") may be used as entries — members are defined in `groups`.
- `markers`: relevant cities with lon/lat and UPPERCASE labels
- `badges`: one per nation, `{ name, emblems: ["file.svg"], country: "id" }`.
  Optional `anchor: [lon, lat]` only for special placements (USA uses
  `[-98.5, 39.8]` with `region: [[-125, 24], [-66, 50]]`; Russia similar —
  copy patterns from git history if needed). Use `group`/`region` for blocs.

VALIDATE every country id exists in the map data:
`python3 -c "import json; d=json.load(open('vendor/countries-50m.json')); names={g['id']: g['properties']['name'] for g in d['objects']['countries']['geometries'] if g.get('id')}; print({k: names.get(k,'MISSING') for k in ['<ids>']})"`

Emblems: reuse files in `emblems/` when possible. For a new nation, download
its coat of arms from Wikimedia Commons as a 640px PNG thumbnail:
`https://commons.wikimedia.org/w/thumb.php?f=<File name.svg>&w=640`
(User-Agent header required; wait ~10s between requests; verify the file
starts with PNG magic bytes). If an emblem cannot be fetched, pick a nation
you already have art for, or skip the badge for that nation.

Update the `sources` list at the bottom with the outlets/links actually used.

## 3. Verify

- `node -e` is unavailable; sanity-check data.js loads by rendering:
  start a server (`python3 -m http.server 8643 &`), then screenshot
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless
  --disable-gpu --window-size=580,1030 --screenshot=/tmp/brief_check.png
  --virtual-time-budget=4000 "http://localhost:8643/?item=1"` and view the
  image. Check: highlighted nation, badge with emblem, headline, summary.
  Spot-check one more item. Kill the server after.
- If something is broken, fix data.js and re-check.

## 4. Ship

git add -A, commit with message `Daily brief — <date>`, and `git push`.
GitHub Pages redeploys automatically. Do not force-push.
