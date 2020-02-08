@echo off
title 导库助手
echo %~dp0
if not exist C:\address.txt goto nofile

for /f "delims=" %%i in (C:\address.txt) do (
set a=%%i
)
if "%a%"=="D:\mixly\mixly_2019_09_15\Mixly" goto nofile1
if "%a%"=="" goto nofile2

set b=%a%\blockly\blocks\company
set c=%a%\blockly\generators\arduino\company
set d=%a%\company
set e=%a%\blockly\media\
set f=%a%\blockly\msg\js\company\language\

echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo Mixly所在路径 -- %a%
echo ------------------------------------------------------------------------------------------------------------------------
echo 更改Arduino.xml、make.xml -- %d%
echo.
echo 更改block下文件 -- %b%
echo.
echo 更改language下文件 -- %f%
echo.
echo 更改generator下文件 -- %c%
echo.
echo 更改media下文件 -- %e%
echo ------------------------------------------------------------------------------------------------------------------------
echo.
echo 请确认路径是否正确！
echo 若正确，请按Enter键继续；若不正确，请退出修改C:\address.txt下路径
pause

@echo on
echo A|xcopy %~dp0\generator\Arduino.js %c%
echo A|xcopy %~dp0\generator\make.js %c%
echo A|xcopy %~dp0\language %f% /s
echo A|xcopy %~dp0\block\Arduino.js %b%
echo A|xcopy %~dp0\block\make.js %b%
echo A|xcopy Arduino.xml %d%
echo A|xcopy make.xml %d%
echo A|xcopy %~dp0\media %e% /s
@echo off

echo.
echo 导入库成功
echo.

if not exist C:\address_arduino.txt goto nofile_arduino

for /f "delims=" %%m in (C:\address_arduino.txt) do (
set n=%%m
)
if "%n%"=="D:\mixly\mixly_2019_09_15\Mixly\arduino" goto nofile_arduino1
if "%n%"=="" goto nofile_arduino2

if not exist %n%\libraries md %n%\libraries

echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo arduino所在路径 -- %n%
echo ------------------------------------------------------------------------------------------------------------------------
echo 目标libraries所在路径 -- %n%\libraries\
echo ------------------------------------------------------------------------------------------------------------------------

echo.
echo 请确认Arduino和libraries所在路径是否正确！
echo 若正确，请按Enter键继续；若不正确，请退出修改C:\address_libraries.txt下路径
pause

@echo on
echo A|xcopy %~dp0\Arduino库文件 %n%\libraries\ /s
@echo off

echo.
echo 导入libraries成功
echo.
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
echo C:\下address.txt无有效路径，请添加此计算机中Mixly的路径到此文本
pause
exit

:nofile_arduino
echo C:\下无address_arduino.txt，请新建一个address.txt后再尝试执行此文件
pause
exit

:nofile_arduino1
echo C:\下address_arduino.txt为示例文本，请将文本中的路径改为此计算机中arduino的路径
pause
exit

:nofile_arduino2
echo C:\下address_arduino.txt无有效路径，请添加此计算机中arduino的路径到此文本
pause
exit