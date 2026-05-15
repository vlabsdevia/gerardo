#!/usr/bin/env bash
# Regenerates the QR SVGs in shared/qr/ for Gerardo Pressure Washing.
# Run after changing the phone number, website URL, or color set.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$DIR/shared/qr"
mkdir -p "$OUT"

# >>> EDIT THESE WHEN YOU HAVE THE REAL PHONE/URL <<<
PHONE="tel:+19045550100"
WEB="https://gerardopressurewash.com"

# qrencode -l H = 30% error correction; -m 2 = 2-module quiet zone (CSS may add more).
# Foreground colors match shared/tokens.css: ink #001D3D, accent #0EA5E9.
qrencode -t SVG -o "$OUT/tel-navy.svg"  -l H -m 2 --foreground=001D3D --background=FFFFFF "$PHONE"
qrencode -t SVG -o "$OUT/tel-white.svg" -l H -m 2 --foreground=FFFFFF --background=001D3D "$PHONE"
qrencode -t SVG -o "$OUT/tel-blue.svg"  -l H -m 2 --foreground=0EA5E9 --background=FFFFFF "$PHONE"

qrencode -t SVG -o "$OUT/web-navy.svg"  -l H -m 2 --foreground=001D3D --background=FFFFFF "$WEB"
qrencode -t SVG -o "$OUT/web-white.svg" -l H -m 2 --foreground=FFFFFF --background=001D3D "$WEB"
qrencode -t SVG -o "$OUT/web-blue.svg"  -l H -m 2 --foreground=0284C7 --background=FFFFFF "$WEB"

# Strip the cm sizing so the SVG scales freely to its container.
for f in "$OUT"/*.svg; do
  /usr/bin/sed -i '' 's/ width="[^"]*cm"//; s/ height="[^"]*cm"//' "$f"
done

echo "Wrote QR variants:"
ls -1 "$OUT" | sed 's/^/  /'
