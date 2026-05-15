#!/usr/bin/env bash
# Generates print-ready PDF for Gerardo Pressure Washing in dist/.
# PDF: 2 pages (front, back), 3.75"x2.25" page (3.5"x2" trim + 0.125" bleed all sides),
# embedded fonts, sRGB. Suitable for upload to Vistaprint, Moo, GotPrint, 4Over, or any
# online printer that accepts a PDF with bleed.
#
# Usage:
#   ./scripts/build-print.sh
#
# Requires: Google Chrome (headless), pdfinfo (poppler).

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$DIR/dist"
mkdir -p "$DIST"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[[ -x "$CHROME" ]] || { echo "ERROR: Chrome not found at $CHROME"; exit 1; }

# Start a local server so Chrome can resolve relative URLs (file:// has same-origin issues
# for fonts and CSS imports across some Chrome versions).
PORT=8767
SERVER_STARTED=0
if ! curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" | grep -qE '^(200|404)$'; then
  ROOT="$(cd "$DIR/../.." && pwd)"  # JoseFinal (parent of gerardo/)
  ( cd "$ROOT" && python3 -m http.server $PORT >/dev/null 2>&1 & )
  SERVER_PID=$!
  SERVER_STARTED=1
  sleep 0.6
fi
trap '[[ $SERVER_STARTED -eq 1 ]] && kill $SERVER_PID 2>/dev/null || true' EXIT

# Path under the served root
URL_BASE="http://localhost:$PORT/gerardo"

build() {
  local OPT="$1"
  local LABEL="$2"
  local OUT="$DIST/gerardo-$LABEL.pdf"
  echo "→ Building $LABEL ..."
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-pdf-header-footer \
    --hide-scrollbars \
    --virtual-time-budget=10000 \
    --run-all-compositor-stages-before-draw \
    --no-default-browser-check \
    --print-to-pdf="$OUT" \
    "$URL_BASE/$OPT/print.html" 2>&1 | grep -vE 'externally_managed|allocator|SharedImage' || true

  if [[ ! -s "$OUT" ]]; then
    echo "  ERROR: PDF not produced"
    exit 1
  fi

  if command -v pdfinfo >/dev/null 2>&1; then
    SIZE=$(pdfinfo "$OUT" | awk '/Page size:/ {print $3 " x " $5}')
    PAGES=$(pdfinfo "$OUT" | awk '/Pages:/ {print $2}')
    BYTES=$(wc -c < "$OUT" | tr -d ' ')
    echo "  $OUT  ·  $PAGES pages  ·  $SIZE pt  ·  $BYTES bytes"
  else
    echo "  $OUT  ·  $(wc -c < "$OUT" | tr -d ' ') bytes"
  fi
}

build card  card

echo
echo "Done. Print-ready PDF in $DIST/"
echo "Open dist/README.md for upload instructions."
