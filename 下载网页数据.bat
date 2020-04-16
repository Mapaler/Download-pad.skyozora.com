@echo off
title 使用nodejs导出下载列表
node.exe download-pad.skyozora.com.js
title 使用Aria2下载网页
aria2c.exe --input-file=网页下载列表.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true --check-certificate=false
pause