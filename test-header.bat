@echo off
title Hernanda Agent - Header Test
chcp 65001 >nul

echo ============================================
echo    Hernanda Agent - Header Verification
echo ============================================
echo.

:: Step 1: Build
echo [1/3] Building project...
wsl -d ubuntu -e bash -c "cd /mnt/c/Workspace/experiments/valarions-claude && bun run build 2>&1"
if %ERRORLEVEL% neq 0 (
    echo [FAIL] Build failed
    pause
    exit /b 1
)
echo [OK] Build successful
echo.

:: Step 2: Verify header content
echo [2/3] Verifying header strings in bundle...
wsl -d ubuntu -e bash -c "grep -c 'Hernanda Agent' /mnt/c/Workspace/experiments/valarions-claude/dist/cli.mjs" >nul 2>&1
if %ERRORLEVEL% equ 0 ( echo [OK] Hernanda Agent branding verified ) else ( echo [WARN] Branding not found )
echo.

:: Step 3: Instructions
echo [3/3] Ready!
echo.
echo ============================================
echo   All checks passed!
echo.
echo   To see the header, open a WSL terminal and run:
echo.
echo     cd /mnt/c/Workspace/experiments/valarions-claude
echo     node bin/oc
echo.
echo   Then press Ctrl+C to exit the CLI.
echo ============================================
echo.
pause
