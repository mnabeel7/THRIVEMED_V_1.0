@echo off
TITLE Thrive Med RCM Local Server
echo ==================================================
echo  Starting Thrive Med RCM Local Server...
echo ==================================================

:: Automatically open browser after a brief delay
start http://localhost:3000

:: Check if standard Node is available in PATH
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [INFO] System Node.js detected.
    node server.js
) else (
    echo [INFO] System Node.js not found in PATH.
    echo [INFO] Using built-in local engine...
    "C:\Users\Arshalooz Habib\AppData\Local\ms-playwright-go\1.57.0\node.exe" server.js
)

pause
