@echo off
title ʹ��nodejs���������б�
node.exe download-pad.skyozora.com.js
title ʹ��Aria2������ҳ
aria2c.exe --input-file=��ҳ�����б�.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true --check-certificate=false
pause