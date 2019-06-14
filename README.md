# 下载战友网怪物数据
本项目上级是 https://github.com/Mapaler/PADDashFormation/tree/master/monsters-info

运行`下载网页数据.bat`，读取父文件夹的怪物信息，然后从战友网获取每个怪物的页面到pad.skyozora.com文件夹。

提取繁体数据用到了`jsdom`模块

本想想用`opencc`模块来繁转简，但是npm安装失败，不会安装，就编译了Win64版exe来用。