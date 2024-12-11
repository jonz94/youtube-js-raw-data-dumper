VIDEO_ID=""
OUTPUT_DIR="data"
OUTPUT="${OUTPUT_DIR}/${VIDEO_ID}.output"
ERROR="${OUTPUT_DIR}/${VIDEO_ID}.error"

pnpm run --silent start chat --vid="${VIDEO_ID}" 2> "${ERROR}.log" 1> "${OUTPUT}.jsonl"
