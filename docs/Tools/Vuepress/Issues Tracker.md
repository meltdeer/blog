---
title: Vuepress issue tracker
author: Ronnie
date: '2023-06-03'
categories: [frontEnd]
tags: [vuepres,blog]
---

# Git

 ## git@github.com: Permission denied (publickey).

克隆项目失败，提示没有权限。

```powershell
PS E:\> git clone git@github.com:meltdeer/blog.git
Cloning into 'blog'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

> [!解决方法]
>
> 添加 github ssh 公钥

