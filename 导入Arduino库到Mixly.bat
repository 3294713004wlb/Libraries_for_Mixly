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
set d=%a%\blockly\media\Arduino\
xcopy %~dp0\block\Arduino.js %b%
xcopy %~dp0\generator\Arduino.js %c%
xcopy %~dp0\media\Arduino %d% /s
@echo off
pause

:nofile
echo ��C:\����address.txt�����½�һ��address.txt���ٳ���ִ�д��ļ�
pause