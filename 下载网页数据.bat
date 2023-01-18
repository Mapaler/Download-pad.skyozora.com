@echo off
title 使用nodejs导出下载列表
node.exe download-pad.skyozora.com.js
title 使用Aria2下载网页
aria2c.exe --input-file=网页下载列表.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true --check-certificate=false --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0"
::--all-proxy=http://127.0.0.1:7890 
pause