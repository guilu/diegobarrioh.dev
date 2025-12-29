#!/usr/bin/env bash
set -euo pipefail

HOST="pi@red"
STAGE="/home/pi/www/diegobarrioh-dev"
LIVE="/var/www/html"

npm run build

rsync -avz --delete dist/ "$HOST:$STAGE/"

ssh "$HOST" "sudo rsync -av --delete $STAGE/ $LIVE/"
echo "✅ Deploy OK -> $HOST:$LIVE"
