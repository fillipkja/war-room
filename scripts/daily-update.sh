#!/bin/zsh
# War Room daily brief update — invoked by launchd every morning.
set -euo pipefail

cd "/Users/fillip/App_test/war-room"
mkdir -p logs

export PATH="/Users/fillip/.local/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"

echo "=== War Room update $(date) ==="

claude -p "$(cat UPDATE_BRIEF.md)" \
  --allowedTools "Bash,Read,Edit,Write,Glob,Grep,WebSearch,WebFetch" \
  --max-turns 80

echo "=== done $(date) ==="
