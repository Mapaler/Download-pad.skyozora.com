@echo off
title ʹ��nodejs���������б�
node.exe download-pad.skyozora.com.js
title ʹ��Aria2������ҳ
aria2c.exe --input-file=��ҳ�����б�.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true --check-certificate=false --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0"
::--all-proxy=http://127.0.0.1:7890 
pause