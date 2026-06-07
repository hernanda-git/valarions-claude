#!/bin/bash
# Hernanda Agent - Header Test Script (WSL/Linux)
# Run: bash test-header.sh

set -e

REPO_DIR="/mnt/c/Workspace/experiments/valarions-claude"
DIST_FILE="$REPO_DIR/dist/cli.mjs"

echo ""
echo "============================================"
echo "   Hernanda Agent - Header Verification"
echo "============================================"
echo ""

# Step 1: Build
echo "[1/3] Building project..."
cd "$REPO_DIR"
bun run build 2>&1
echo "[OK] Build successful"
echo ""

# Step 2: Verify header content in built bundle
echo "[2/3] Verifying header strings in bundle..."

echo "--- Hernanda Agent references ---"
grep -c "Hernanda Agent" "$DIST_FILE" 2>/dev/null && echo "Found" || echo "Not found"

echo "--- Stale Open Claude references ---"
if grep -q "OPEN CLAUDE\|LOGO_OPEN\|LOGO_CLAUDE" "$DIST_FILE" 2>/dev/null; then
    echo "[WARN] Stale references still present!"
    grep -o "OPEN CLAUDE\|LOGO_OPEN\|LOGO_CLAUDE" "$DIST_FILE" | sort | uniq -c
else
    echo "[OK] No stale references"
fi
echo ""

# Step 3: Launch CLI
echo "[3/3] Launching CLI to display header..."
echo ""
echo "============================================"
echo "  CLI will start -- header should show    "
echo "  'HERNANDA AGENT' in gold gradient       "
echo "  block-letter ASCII art                  "
echo "  (Press Ctrl+C to exit after viewing)    "
echo "============================================"
echo ""
sleep 2

node "$REPO_DIR/bin/oc"

echo ""
echo "Test complete."
