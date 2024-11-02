VIDEO_ID=""
OUTPUT="${VIDEO_ID}-login.output"
ERROR="${VIDEO_ID}-login.error"

pnpm run --silent start chat --vid="${VIDEO_ID}" --login 2> "${ERROR}.log" 1> "${OUTPUT}.jsonl"
