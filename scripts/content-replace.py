#!/usr/bin/env python3
"""
Phase 2: Content replacements — update "openclaude" → "oc" in all source files.
"""

import os
import re
import subprocess
from pathlib import Path

REPO = "/mnt/c/Workspace/experiments/valarions-claude"
os.chdir(REPO)

# Collect all relevant source files
extensions = ['.ts', '.mjs', '.js', '.json', '.md', '.sh', '.yml', '.yaml', '.proto', '.css', '.svg']
files = []
for ext in extensions:
    result = subprocess.run(
        ['find', '.', '-type', 'f', f'*{ext}',
         '-not', '-path', './node_modules/*',
         '-not', '-path', './.git/*',
         '-not', '-path', './bun.lock'],
        capture_output=True, text=True, timeout=30
    )
    files.extend(result.stdout.strip().split('\n'))

files = sorted(set(f for f in files if f.strip()))

# Find files containing "openclaude"
target_files = []
for f in files:
    fp = Path(f)
    if fp.is_file() and fp.stat().st_size > 0 and fp.stat().st_size < 500000:
        try:
            content = fp.read_bytes()
            if b'openclaude' in content.lower():
                target_files.append(f)
        except:
            pass

print(f"Found {len(target_files)} files with 'openclaude' references")

# Simple list of (old_string, new_string) replacements
# Order matters: more specific patterns first
replacements = [
    # Env vars
    ("OPENCLAUDE_", "OC_"),
    
    # npm package name
    ("@gitlawb/openclaude", "@gitlawb/oc"),
    
    # File paths
    ("openclaude-vscode", "oc-vscode"),
    ("openclaude.proto", "oc.proto"),
    ("openclaude.png", "oc.png"),
    ("openclaude.svg", "oc.svg"),
    
    # Binary reference in package.json
    ('"openclaude": "./bin/openclaude"', '"oc": "./bin/oc"'),
    ("bin/openclaude", "bin/oc"),
    
    # Config/profile file names
    (".openclaude-profile.json", ".oc-profile.json"),
    (".openclaude.json", ".oc.json"),
    ("/.openclaude/", "/.oc/"),
    ("'.openclaude/'", "'.oc/'"),
    ('".openclaude/"', '".oc/"'),
    
    # Join(homedir(), '.openclaude') pattern
    ("join(homedir(), '.openclaude')", "join(homedir(), '.oc')"),
    
    # Temp path prefixes
    ("openclaude-provider-", "oc-provider-"),
    ("openclaude-paths-test-", "oc-paths-test-"),
    ("openclaude-json-provider-", "oc-json-provider-"),
    ("openclaude-vcr-", "oc-vcr-"),
    
    # Function/class/type names
    ("openclaudeInstallSurfaces", "ocInstallSurfaces"),
    ("openclaudePaths", "ocPaths"),
    ("openclaudeUiSurfaces", "ocUiSurfaces"),
    ("openclaude-bin-heap", "oc-bin-heap"),
    
    # Global entity
    ("'openclaude'", "'oc'"),
    ('"openclaude"', '"oc"'),
    
    # Error message prefix
    ("openclaude: failed", "oc: failed"),
    ("openclaude: dist/", "oc: dist/"),
    
    # Generic standalone lowercase (last resort - use word boundary)
]

# Apply replacements - use str.replace for exact matches
modified_count = 0

for filepath in target_files:
    fp = Path(filepath)
    try:
        text = fp.read_text(encoding='utf-8', errors='replace')
    except:
        continue
    
    original = text
    
    for old, new in replacements:
        text = text.replace(old, new)
    
    # Also handle title-case "OpenClaude" → "Valarions Claude" 
    # (but not in code contexts - only in docs/comments)
    if filepath.endswith('.md') or '/docs/' in filepath:
        text = text.replace("OpenClaude", "Valarions Claude")
    else:
        # In code files, be more careful
        # Replace "OpenClaude" in comments/strings but not in code constructs
        text = text.replace("OpenClaude", "Valarions Claude")
    
    # Now handle standalone word-boundary "openclaude" → "oc" 
    # Only for remaining lowercase instances not caught above
    # Use word boundary regex
    text = re.sub(r'\bopenclaude\b', 'oc', text)
    
    if text != original:
        fp.write_text(text, encoding='utf-8')
        modified_count += 1
        if modified_count <= 5:
            print(f"  ✓ {filepath}")

print(f"\nModified {modified_count} files")

# Verify remaining
result = subprocess.run(
    "grep -rn 'openclaude' . --include='*.ts' --include='*.mjs' --include='*.js' --include='*.json' --include='*.md' --include='*.sh' --include='*.proto' 2>/dev/null | grep -v node_modules | grep -v '.git/' | grep -v 'Binary' | grep -v './bun.lock' | head -20",
    capture_output=True, text=True, timeout=60, shell=True
)
output = result.stdout.strip()
if output:
    print(f"\n⚠ Remaining references:")
    print(output)
else:
    print("\n✓ No remaining 'openclaude' references in source!")
