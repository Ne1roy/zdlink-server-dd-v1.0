使用了几个重要的库：

- https://github.com/mzabriskie/axios
- https://github.com/winstonjs/winston
- https://github.com/koajs/koa
- https://github.com/moment/moment
- https://github.com/alexmingoia/koa-router

## 替换CorpID CorpSecret

**注意⚠️：调用钉钉的服务需要依赖CorpID和CorpSecret，在启动服务之前，请确保将`app/env.js`中的CorpID和CorpSecret替换成你企业的CorpID和CorpSecret。**

## 如何启动服务

windows用户：

```bash
# install dependencies
$ npm install

# 安装 nodemon
$ npm install -g nodemon

# 启动服务器
$ npm run serve
```


安装全局的nodemon，为DEV环境的服务启动工具，cd到本项目内，`npm install` 安装完成之后，输出：`npm run serve`即启动服务器。

**注意⚠️：运行 npm run serve之前，一定要全局安装完成nodemon，以及在本项目内npm install**

## 项目说明

- api/ 路由的定义
- controller/ 请求进来之后具体的实现
- logger/ 日志系统
- middleware/ 自定义的中间件
- request/ 服务端请求放置的目录
- env.js 配置信息
- index.js 服务启动的入口

