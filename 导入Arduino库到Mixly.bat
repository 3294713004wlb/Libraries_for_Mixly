@echo off
title ��������
echo %~dp0
if not exist C:\address.txt goto nofile
goto start

:start
for /f "delims=" %%i in (C:\address.txt) do (
set a=%%i
)
@echo on
set b=%a%\blockly\blocks\company
set c=%a%\blockly\generators\arduino\company
set d=%a%\company
set e=%a%\blockly\media\Arduino\

xcopy %~dp0\block\Arduino.js %b%
xcopy %~dp0\generator\Arduino.js %c%
xcopy Arduino.xml %d%
xcopy %~dp0\media\Arduino %e% /s
@echo off
pause
exit

:nofile
echo ��C:\����address.txt�����½�һ��address.txt���ٳ���ִ�д��ļ�
pause