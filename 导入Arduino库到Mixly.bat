@echo off
title ��������
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
set e=%a%\blockly\media\
set f=%a%\blockly\msg\js\company\language\

echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo Mixly����·�� -- %a%
echo ------------------------------------------------------------------------------------------------------------------------
echo ����Arduino.xml��make.xml -- %d%
echo.
echo ����block���ļ� -- %b%
echo.
echo ����language���ļ� -- %f%
echo.
echo ����generator���ļ� -- %c%
echo.
echo ����media���ļ� -- %e%
echo ------------------------------------------------------------------------------------------------------------------------
echo.
echo ��ȷ�ϸ���·���Ƿ���ȷ��
echo ����ȷ����Enter��������������ȷ�����˳��޸�C:\address.txt��·��
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
pause
exit

:nofile
echo C:\����address.txt�����½�һ��address.txt���ٳ���ִ�д��ļ�
pause
exit

:nofile1
echo C:\��address.txtΪʾ���ı����뽫�ı��е�·����Ϊ�˼������Mixly��·��
pause
exit

:nofile2
echo C:\��address.txt����Ч��·��������Ӵ˼������Mixly��·�������ı�
pause
exit