@echo off
title Libraries_For_Mixly 升级助手
echo %~dp0
@echo on
echo Libraries_For_Mixly 正在升级中，请等待...
@echo off
cd "%~dp0\PortableGit\cmd\"
git reset --hard origin/master
git pull origin master
@echo off
rd/s/q %~dp0\.git\refs\original
rd/s/q %~dp0\.git\logs\
git gc
git prune
@echo on
echo Libraries_For_Mixly更新完成, Enjoy it!
@echo off
for /f "delims=" %%i in (address.txt) do (
set a=%%i
)
echo %a%
set b=%a%\blockly\blocks\company
set c=%a%\blockly\generators\arduino\company
set d=%a%\blockly\media\Arduino\
echo %b%
echo %c%
echo %d%
xcopy %~dp0\block\Arduino.js %b%
xcopy %~dp0\generator\Arduino.js %c%
xcopy %~dp0\media\Arduino %d% /s
pause