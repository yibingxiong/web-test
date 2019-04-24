# web-test web开发实验项目

> 本项目用于做一些web开发相关实验

## 背景介绍

大雄(我)在学习web开发或在项目中遇到问题时经常需要做一些实验, 在react出了什么新的特性时也常常通过做实验来了解一下.
最开始常常直接在公司的项目做实验, 直接拉个test分支就开搞, 这样做有如下缺点:
1. 在公司的项目去做实验本身就是一件不好的事情
2. 公司的项目里边只有前端的部分, 想要做接口有关的实验不方便. 例如想测试跨域的响应头Access-Control-Allow-Origin就得再启一个web服务器
3. 实验动东西零散, 过一段时间想查找却找不到了

基于以上原因, 特搭建了这个基于react,webpack,express的用于web开发相关实验的项目.

## 适合测试什么

1. js, css, html相关应该都可以
2. http相关
3. 前端框架测react比较方便, 其他框架不太好改
4. 前端工具相关的, webpack, eslint等等都可以配置进去测
5. 后端实验不是重点, 这里用的express, 所以也可以测express和node

---

**举几个具体的栗子**

1. React有个新特性hooks, 可以在里边实验下
2. 原生fetch, 如果接口302会怎样, 可以实验下
3. prefetch, preload区别是什么, 可以测
4. http缓存相关header及其意义, max-age, lastModified之类

## 使用

### clone 这个项目

```bash
git clone https://github.com/yibingxiong/web-test your-project-name

# 后面这个项目我也会拿来做实验
# 如果你想要一个干净的版本,可以回退到1.0.0版
# commitId为1f90b217371ab4527d16b6df3bf5a2883924625f

git reset --hard 1f90b217371ab4527d16b6df3bf5a2883924625f
```

### 进项目装依赖包

```bash
cd your-project-name && npm install
```

### 打包前端代码

```bash
# 这个不会监听前端文件变化
npm run build
# 或
# 这个当前端代码变化后会实时重新编译
npm run watch
```

### 启动服务器

```bash
npm run start
```

### 在浏览器查看

例如输入localhost:3001

## 项目结构说明

> 下边是重要目录或文件的说明

```
├── LICENSE
├── README.md
├── config  配置
│   ├── path.js 路径相关配置, 这个不用改
│   ├── router.js   后端路由配置,返回html的,新增或调整需要改
│   └── server.js   后端服务配置, 端口号
├── package-lock.json
├── package.json
├── src
│   ├── fe  前端源代码
│   │   ├── App.js
│   │   ├── components  公共组件
│   │   ├── index.html  html模板
│   │   ├── index.js    入口
│   │   ├── pages  页面目录
│   │   │   ├── 404 404页面
│   │   │   │   ├── index.js
│   │   │   │   └── index.scss
│   │   │   └── Index.jsx   首页
│   │   └── router.js   前端路由配置
│   └── server  后端代码
│       ├── html    前端编译生成html会到这里
│       │   └── index.html
│       └── index.js    入口
├── static  前端代码编译产物
│   ├── 404.app.js
│   ├── app.js
│   ├── index.app.js
│   └── vendors~app.app.js
└── webpack.config.js webpack配置
```
## 本项目所用技术

### react

### express

### webpack

### code split方案