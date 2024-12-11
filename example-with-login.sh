VIDEO_ID=""
OUTPUT_DIR="data"
OUTPUT="${OUTPUT_DIR}/${VIDEO_ID}-login.output"
ERROR="${OUTPUT_DIR}/${VIDEO_ID}-login.error"

pnpm run --silent start chat --vid="${VIDEO_ID}" --login 2> "${ERROR}.log" 1> "${OUTPUT}.jsonl"
