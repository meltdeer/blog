@REM # 使用包管理器初始化
pnpm i

@REM # 构建 navigation
@REM # pnpm run docs:nav -f

@REM # 构建开发版本
@REM # pnpm run docs:dev

@REM #构建发布版本(如果使用 github action自动部署，local无需此步骤)
@REM # pnpm run docs:build

@REM # 为 vuepress 自动生成侧边栏的插件
@REM # https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/#%E4%BB%8B%E7%BB%8D
@REM # npm i vuepress-plugin-auto-sidebar -D