#!/usr/bin/env python3
"""
Systematically rename "openclaude" → "oc" throughout the Valarions Claude codebase.
Handles file renames, content replacements, and edge cases carefully.
"""

import os
import re
import shutil
import subprocess
from pathlib import Path

REPO = "/mnt/c/Workspace/experiments/valarions-claude"
os.chdir(REPO)

# ─── Step 1: File & directory renames ───────────────────────────────────────

print("=" * 60)
print("STEP 1: Renaming files and directories")
print("=" * 60)

file_renames = {
    "bin/openclaude": "bin/oc",
    "vscode-extension/openclaude-vscode": "vscode-extension/oc-vscode",
    "scripts/openclaude-bin-heap.test.ts": "scripts/oc-bin-heap.test.ts",
    "src/utils/openclaudeInstallSurfaces.test.ts": "src/utils/ocInstallSurfaces.test.ts",
    "src/utils/openclaudePaths.test.ts": "src/utils/ocPaths.test.ts",
    "src/utils/openclaudeUiSurfaces.test.ts": "src/utils/ocUiSurfaces.test.ts",
}

for old, new in file_renames.items():
    old_path = Path(REPO) / old
    new_path = Path(REPO) / new
    if old_path.exists():
        # For directories, use shutil.move, for files use os.rename
        if old_path.is_dir():
            shutil.move(str(old_path), str(new_path))
        else:
            os.renames(str(old_path), str(new_path))
        print(f"  ✓ {old} → {new}")
    else:
        print(f"  - {old} not found, skipping")

# Rename files inside the VS Code extension directory
vscode_dir = Path(REPO) / "vscode-extension/oc-vscode"
if vscode_dir.exists():
    for f in vscode_dir.rglob("*openclaude*"):
        if f.is_file() or (f.is_dir() and not any(f.iterdir())):
            new_name = str(f).replace("openclaude", "oc")
            os.rename(str(f), str(new_name))
            print(f"  ✓ {f.name} → {os.path.basename(new_name)}")

# Also rename proto file
if (Path(REPO) / "src/proto/openclaude.proto").exists():
    os.renames(str(Path(REPO) / "src/proto/openclaude.proto"),
               str(Path(REPO) / "src/proto/oc.proto"))
    print(f"  ✓ src/proto/openclaude.proto → src/proto/oc.proto")

# Rename web public file
if (Path(REPO) / "web/public/openclaude.png").exists():
    os.renames(str(Path(REPO) / "web/public/openclaude.png"),
               str(Path(REPO) / "web/public/oc.png"))
    print(f"  ✓ web/public/openclaude.png → web/public/oc.png")

# ─── Step 2: Content replacements ──────────────────────────────────────────

print()
print("=" * 60)
print("STEP 2: Content replacements in source files")
print("=" * 60)

# Get list of all files we should process (TS, MJS, JSON, MD, SH, YML, PROTO, CSS, SVG)
extensions = ('.ts', '.mjs', '.json', '.md', '.sh', '.yml', '.yaml', '.proto', '.css', '.svg')
source_dirs = ['./src', './scripts', './bin', './docs', './.github', './web']

# Build file list
files_to_process = []
for ext in extensions:
    for dir_path in source_dirs:
        dir_p = Path(dir_path)
        if dir_p.exists():
            files_to_process.extend(dir_p.rglob(f'*{ext}'))

# Also include root files
root_files = list(Path(REPO).glob('*.json')) + list(Path(REPO).glob('*.md')) + [Path(REPO) / 'Dockerfile', Path(REPO) / '.dockerignore']
files_to_process.extend([f for f in root_files if f.is_file()])

# Also include vscode-extension files
vscode_dir = Path(REPO) / "vscode-extension"
if vscode_dir.exists():
    files_to_process.extend(vscode_dir.rglob('*'))

# Remove node_modules and .git paths
files_to_process = [f for f in files_to_process if 'node_modules' not in str(f) and '.git' not in str(f)]

print(f"Found {len(files_to_process)} files to scan")

# ─── Define replacement rules ──────────────────────────────────────────────
# Order matters: more specific patterns first

replacements = [
    # Env vars: OPENCLAUDE_* → OC_*
    ('OPENCLAUDE_', 'OC_'),
    # File paths in code
    ('openclaude-vscode', 'oc-vscode'),
    ('openclaude-vscode', 'oc-vscode'),
    # NPM package reference
    ('@gitlawb/openclaude', '@hernanda/valarions-claude'),
    # Profile/config file names
    ('.openclaude-profile.json', '.oc-profile.json'),
    ('.openclaude.json', '.oc.json'),
    # CLI binary references in package.json
    ('"openclaude": "./bin/openclaude"', '"oc": "./bin/oc"'),
    # Specific binary path references in code
    ('bin/openclaude', 'bin/oc'),
    # Directory names used in temp paths
    ('openclaude-provider', 'oc-provider'),
    ('openclaude-paths-test', 'oc-paths-test'),
    ('openclaude-json-provider', 'oc-json-provider'),
    ('openclaude-vcr-', 'oc-vcr-'),
    ('/.openclaude', '/.oc'),
    # Error messages and help text
    ('openclaude:', 'oc:'),
    ('OpenClaude GitHub', 'Valarions Claude GitHub'),
    ('This wiki is maintained by OpenClaude', 'This wiki is maintained by Valarions Claude'),
    ('maintained by OpenClaude', 'maintained by Valarions Claude'),
    # Global entity reference
    ("'openclaude'", "'oc'"),
    # Package name in package.json
    ('"name": "@gitlawb/openclaude"', '"name": "@gitlawb/oc"'),
    ('"description": "OpenClaude', '"description": "Valarions Claude'),
    # Inline references
    ('\'openclaude\'', '\'oc\''),
    # Generic catch-all for lowercase usage in code
    # But be careful with "openclaude" as part of other words
]

# For the bulk of the replacements, use sed with word boundaries
# Pattern: replace standalone "openclaude" (case-insensitive for file paths)
# We'll do a more targeted Python-based approach

file_count = 0
total_replacements = 0

for filepath in files_to_process:
    try:
        if not filepath.is_file():
            continue
        
        # Skip binary files
        try:
            content = filepath.read_bytes()
            # Check if file contains "openclaude" (case-insensitive but in bytes)
            if b'openclaude' not in content.lower():
                continue
        except Exception:
            continue
        
        # Read as text
        try:
            text = filepath.read_text(encoding='utf-8', errors='replace')
        except Exception:
            try:
                text = filepath.read_text(encoding='latin-1', errors='replace')
            except Exception:
                continue
        
        # Track if we modified anything
        original = text
        modified = False
        
        # Apply specific logical replacements first
        old_text = text
        
        # OpenClaude (title case, as product name) → Valarions Claude in documentation
        # But keep it as 'oc' in code contexts
        text = re.sub(r'\bOpenClaude\b', 'Valarions Claude', text)
        
        # openclaude-paths → oc-paths
        text = re.sub(r'openclaude-paths', 'oc-paths', text)
        
        # openclaude-provider → oc-provider
        text = re.sub(r'openclaude-provider', 'oc-provider', text)
        
        # openclaude-json-provider → oc-json-provider
        text = re.sub(r'openclaude-json-provider', 'oc-json-provider', text)
        
        # openclaude-vcr → oc-vcr
        text = re.sub(r'openclaude-vcr', 'oc-vcr', text)
        
        # openclaude-ui-surfaces → oc-ui-surfaces
        text = re.sub(r'openclaude-ui-surfaces', 'oc-ui-surfaces', text)
        
        # openclaudeInstallSurfaces → ocInstallSurfaces
        text = re.sub(r'openclaudeInstallSurfaces', 'ocInstallSurfaces', text)
        
        # openclaudePaths → ocPaths
        text = re.sub(r'openclaudePaths', 'ocPaths', text)
        
        # openclaudeUiSurfaces → ocUiSurfaces
        text = re.sub(r'openclaudeUiSurfaces', 'ocUiSurfaces', text)
        
        # openclaude-bin-heap → oc-bin-heap
        text = re.sub(r'openclaude-bin-heap', 'oc-bin-heap', text)
        
        # @gitlawb/openclaude → @gitlawb/oc (npm package name)
        text = re.sub(r'@gitlawb/openclaude', '@gitlawb/oc', text)
        
        # "openclaude" binary in package.json and elsewhere
        # For the bin entry specifically
        text = re.sub(r'"openclaude":\s*"./bin/openclaude"', '"oc": "./bin/oc"', text)
        
        # bin/openclaude path references
        text = re.sub(r'bin/openclaude', 'bin/oc', text)
        
        # .openclaude-profile.json → .oc-profile.json
        text = re.sub(r'\.openclaude-profile\.json', '.oc-profile.json', text)
        
        # .openclaude.json → .oc.json
        text = re.sub(r'\.openclaude\.json(?!")', '.oc.json', text)
        
        # .openclaude/ → .oc/
        text = re.sub(r'/\.openclaude/', '/.oc/', text)
        text = re.sub(r"'\.openclaude/'", "'.oc/'", text)
        text = re.sub(r'join\(homedir\(\),\s*\'\.openclaude\'\)', "join(homedir(), '.oc')", text)
        text = re.sub(r'join\(tmpdir\(\)\s*,\s*\'openclaude', "join(tmpdir(), 'oc", text)
        
        # OPENCLAUDE_ env var references
        text = re.sub(r'OPENCLAUDE_', 'OC_', text)
        
        # openclaude.png → oc.png
        text = re.sub(r'openclaude\.png', 'oc.png', text)
        
        # openclaude.svg → oc.svg
        text = re.sub(r'openclaude\.svg', 'oc.svg', text)
        
        # vscode-extension/openclaude-vscode references
        text = re.sub(r'openclaude-vscode', 'oc-vscode', text)
        
        # src/proto/openclaude.proto → src/proto/oc.proto
        text = re.sub(r'openclaude\.proto', 'oc.proto', text)
        
        # globalClaudeFile/openclaude references in code
        text = re.sub(r"'openclaude'", "'oc'", text)
        text = re.sub(r'"openclaude"', '"oc"', text)
        
        # Error messages "openclaude:" prefix
        text = re.sub(r'\bopenclaude:\s', 'oc: ', text)
        
        if text != original:
            filepath.write_text(text, encoding='utf-8')
            count = len([m.start() for m in re.finditer(r'\boc\b', text)]) - len([m.start() for m in re.finditer(r'\boc\b', original)])
            file_count += 1
            total_replacements += 1
    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")

print(f"\nModified {file_count} files")
print(f"Total replacement batches: {total_replacements}")

# ─── Step 3: Update package.json binary name ──────────────────────────────

print()
print("=" * 60)
print("STEP 3: Verify critical files")
print("=" * 60)

# Check package.json
pkg = Path(REPO) / "package.json"
if pkg.exists():
    content = pkg.read_text()
    if '"oc"' in content and '"oc": "./bin/oc"' in content:
        print("  ✓ package.json: binary entry updated")

# Check bin/oc exists
if (Path(REPO) / "bin/oc").exists():
    print("  ✓ bin/oc: renamed successfully")

# Check VS Code extension directory
if (Path(REPO) / "vscode-extension/oc-vscode").exists():
    print("  ✓ vscode-extension/oc-vscode: renamed successfully")

# Check for any remaining "openclaude" references
result = subprocess.run(
    ['grep', '-rn', 'openclaude', './src', '--include=*.ts', '--include=*.mjs', '--include=*.json'],
    capture_output=True, text=True, timeout=30
)
remaining = [l for l in result.stdout.split('\n') if l.strip() and 'Binary' not in l and 'node_modules' not in l]
remaining = [l for l in remaining if '.git/' not in l]

if remaining:
    print(f"\n  ⚠ {len(remaining)} remaining references (may be in node_modules or test fixtures):")
    for line in remaining[:15]:
        print(f"    {line}")
else:
    print("\n  ✓ No remaining 'openclaude' references in source!")

print("\nDone!")
