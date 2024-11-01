VIDEO_ID=""
OUTPUT="${VIDEO_ID}.output"
ERROR="${VIDEO_ID}.error"

pnpm run --silent start --vid="${VIDEO_ID}" 2> "${ERROR}.log" 1> "${OUTPUT}.jsonl"
