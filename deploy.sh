#!/usr/bin/env bash
set -euo pipefail

HOST="pi@red.local"
STAGE="/home/pi/www/diegobarrioh-dev"
LIVE="/var/www/html"
KEY="${DEPLOY_KEY:-$HOME/.ssh/pi_deploy_key}"
SSH="ssh -i $KEY -o IdentitiesOnly=yes"

npm run build

rsync -avz --delete -e "$SSH" dist/ "$HOST:$STAGE/"

ssh -i "$KEY" -o IdentitiesOnly=yes "$HOST" "sudo rsync -av --delete $STAGE/ $LIVE/"
echo "✅ Deploy OK -> $HOST:$LIVE"
