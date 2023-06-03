#! /bin/bash

# 使用包管理器初始化
 yarn init -y

 #将 VuePress 安装为本地依赖
 yarn add -D vuepress 

# 为 vuepress 自动生成侧边栏的插件
# https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/#%E4%BB%8B%E7%BB%8D
 npm i vuepress-plugin-auto-sidebar -D

