@echo off
title ��������
echo %~dp0
if not exist %~dp0\address.txt goto nofile

for /f "delims=" %%i in (%~dp0\address.txt) do (
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
echo.
echo ����blockly_compressed.js -- %a%\blockly
echo ------------------------------------------------------------------------------------------------------------------------
echo.
echo ��ȷ��·���Ƿ���ȷ��
echo ����ȷ���밴Enter��������������ȷ�����˳��޸�C:\address.txt��·��
pause

@echo on
echo A|xcopy %~dp0\generator\Arduino.js %c%
echo A|xcopy %~dp0\generator\make.js %c%
echo A|xcopy %~dp0\language %f% /s
echo A|xcopy %~dp0\block\Arduino.js %b%
echo A|xcopy %~dp0\block\make.js %b%
echo A|xcopy %~dp0\change\Arduino.xml %d%
echo A|xcopy %~dp0\change\blockly_compressed.js %a%\blockly
echo A|xcopy make.xml %d%
echo A|xcopy %~dp0\media %e% /s
@echo off

echo.
echo �����ɹ�
echo.

if not exist %~dp0\address_arduino.txt goto nofile_arduino

for /f "delims=" %%m in (%~dp0\address_arduino.txt) do (
set n=%%m
)
if "%n%"=="D:\mixly\mixly_2019_09_15\Mixly\arduino" goto nofile_arduino1
if "%n%"=="" goto nofile_arduino2

if not exist %n%\libraries md %n%\libraries

echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo arduino����·�� -- %n%
echo ------------------------------------------------------------------------------------------------------------------------
echo Ŀ��libraries����·�� -- %n%\libraries\
echo ------------------------------------------------------------------------------------------------------------------------

echo.
echo ��ȷ��Arduino��libraries����·���Ƿ���ȷ��
echo ����ȷ���밴Enter��������������ȷ�����˳��޸�C:\address_libraries.txt��·��
pause

@echo on
echo A|xcopy %~dp0\Arduino���ļ� %n%\libraries\ /s
@echo off

echo.
echo ����libraries�ɹ�
echo.
echo �Ƿ���Ҫ����Arduino���make������̵�Mixly?
echo ���뵼�룬�밴Enter�������������뵼�룬���˳�
echo.
echo ------------------------------------------------------------------------------------------------------------------------
echo Mixly��������·�� -- %a%\sample\
echo ------------------------------------------------------------------------------------------------------------------------

echo.
echo ��ȷ��Mixly��������·���Ƿ���ȷ��
echo ����ȷ���밴Enter��������������ȷ�����˳�
pause

del /f /s /q %a%\sample\Arduino������\*.*
rd /q /s %a%\sample\Arduino������\
md %a%\sample\Arduino������
del /f /s /q %a%\sample\make������\*.*
rd /q /s %a%\sample\make������\
md %a%\sample\make������
echo A|xcopy %~dp0\examples %a%\sample\ /s

echo.
echo ����Arduino�⡢make�����̳ɹ�
pause
exit

:nofile
echo %~dp0\����address.txt�����½�һ��address.txt���ٳ���ִ�д��ļ�
pause
exit

:nofile1
echo %~dp0\��address.txtΪʾ���ı����뽫�ı��е�·����Ϊ�˼������Mixly��·��
pause
exit

:nofile2
echo %~dp0\��address.txt����Ч·��������Ӵ˼������Mixly��·�������ı�
pause
exit

:nofile_arduino
echo %~dp0\����address_arduino.txt�����½�һ��address.txt���ٳ���ִ�д��ļ�
pause
exit

:nofile_arduino1
echo %~dp0\��address_arduino.txtΪʾ���ı����뽫�ı��е�·����Ϊ�˼������arduino��·��
pause
exit

:nofile_arduino2
echo %~dp0\��address_arduino.txt����Ч·��������Ӵ˼������arduino��·�������ı�
pause
exit