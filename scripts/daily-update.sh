#!/bin/zsh
# War Room daily brief update — invoked by launchd every morning.
set -euo pipefail

cd "/Users/fillip/App_test/war-room"
mkdir -p logs

# pick up commits pushed from other checkouts before committing on top
git pull --ff-only

export PATH="/Users/fillip/.local/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"

echo "=== War Room update $(date) ==="

# transient API/network failures (e.g. socket closed right after wake)
# abort the run under `set -e` — retry a few times before giving up
ok=0
for attempt in 1 2 3; do
  if claude -p "$(cat UPDATE_BRIEF.md)" \
    --allowedTools "Bash,Read,Edit,Write,Glob,Grep,WebSearch,WebFetch" \
    --max-turns 80; then
    ok=1
    break
  fi
  echo "--- attempt $attempt failed $(date); retrying in 120s ---"
  sleep 120
done

if [[ $ok -ne 1 ]]; then
  echo "=== FAILED after 3 attempts $(date) ==="
  exit 1
fi

echo "=== done $(date) ==="
