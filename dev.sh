#!/usr/bin/env bash
set -e

docker run --platform linux/amd64 --rm -it \
  -p 8000:8000 \
  -e CHOKIDAR_USEPOLLING=true \
  -v "$PWD":/app \
  -v nestted_node_modules:/app/node_modules \
  -v nestted_gatsby_cache:/app/.cache \
  nestted-gatsby \
  bash -lc "npm install && npm run develop -- -H 0.0.0.0 -p 8000"
