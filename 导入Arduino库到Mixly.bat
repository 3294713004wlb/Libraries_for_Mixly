@echo off
title 导库助手
echo %~dp0
if not exist C:\address.txt goto nofile
goto start

:start
for /f "delims=" %%i in (C:\address.txt) do (
set a=%%i
)
if "%a%"=="D:\mixly\mixly_2019_09_15\Mixly" goto nofile1
if "%a%"=="" goto nofile2

set b=%a%\blockly\blocks\company
set c=%a%\blockly\generators\arduino\company
set d=%a%\company
set e=%a%\blockly\media\Arduino\

echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo Mixly所在路径 -- %a%
echo ------------------------------------------------------------------------------------------------------------------------
echo 更改Arduino.xml -- %d%
echo.
echo 更改block下文件 -- %b%
echo.
echo 更改generator下文件 -- %c%
echo.
echo 更改media\Arduino下文件 -- %c%
echo ------------------------------------------------------------------------------------------------------------------------
echo.
echo 请确认更改路径是否正确！
echo 若正确，请点击任意键继续；若不正确，请退出修改C:\address.txt下路径
pause

@echo on
echo A|xcopy %~dp0\block\Arduino.js %b%
echo A|xcopy %~dp0\generator\Arduino.js %c%
echo A|xcopy Arduino.xml %d%
echo A|xcopy %~dp0\media\Arduino %e% /s
@echo off
pause
exit

:nofile
echo C:\下无address.txt，请新建一个address.txt后再尝试执行此文件
pause
exit

:nofile1
echo C:\下address.txt为示例文本，请将文本中的路径改为此计算机中Mixly的路径
pause
exit

:nofile2
echo C:\下address.txt无有效的路径，请添加此计算机中Mixly的路径到此文本
pause
exit