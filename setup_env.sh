#! /bin/bash

# 使用包管理器初始化
 pnmp init -y

# 构建 navigation
# pnpm run docs:nav -f

# 构建开发版本
# pnpm run docs:dev

#构建发布版本(如果使用 github action自动部署，local无需此步骤)
# pnpm run docs:build

# 为 vuepress 自动生成侧边栏的插件
# https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/#%E4%BB%8B%E7%BB%8D
# npm i vuepress-plugin-auto-sidebar -D

