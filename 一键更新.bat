@echo off
title Libraries_For_Mixly ��������
echo %~dp0
@echo on
echo Libraries_For_Mixly ���������У���ȴ�...
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
echo Libraries_For_Mixly�������, Enjoy it!
@echo off
pause