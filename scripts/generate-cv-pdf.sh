#!/usr/bin/env bash
# Print /cv/ to PDF with headless Chrome so the CV can never drift from the
# site again. Run it after changing anything under src/i18n/, then commit the
# regenerated files.
#
#   npm run cv:pdf
#
set -euo pipefail

PORT="${CV_PDF_PORT:-4331}"
CHROME="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [[ ! -x "$CHROME" ]]; then
  echo "Chrome not found at: $CHROME" >&2
  echo "Set CHROME_BIN to your Chrome binary and try again." >&2
  exit 1
fi

npm run build

npx astro preview --port "$PORT" > /tmp/cv-pdf-preview.log 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null || true' EXIT

# Wait for the preview server rather than sleeping a hopeful number of seconds.
for _ in $(seq 1 40); do
  if curl -fsS -o /dev/null "http://localhost:$PORT/cv/"; then break; fi
  sleep 0.25
done

print_one() {
  local url="$1" out="$2"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=10000 \
    --print-to-pdf="$out" "$url" 2>/dev/null
  echo "  $out"
}

echo "Printing:"
print_one "http://localhost:$PORT/cv/"    public/cv/diego-barrio-hortiguela-cv.pdf
print_one "http://localhost:$PORT/es/cv/" public/cv/diego-barrio-hortiguela-cv-es.pdf

echo "Done. Rebuild or deploy to publish the new files."
