@echo off
title µºø‚÷˙ ÷
echo %~dp0
for /f "delims=" %%i in (address.txt) do (
set a=%%i
)
@echo on
set b=%a%\blockly\blocks\company
set c=%a%\blockly\generators\arduino\company
set d=%a%\blockly\media\Arduino\
xcopy %~dp0\block\Arduino.js %b%
xcopy %~dp0\generator\Arduino.js %c%
xcopy %~dp0\media\Arduino %d% /s
@echo off
pause