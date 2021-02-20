# uniHTML3

## 简介

### 一种基于vue v3使用vue-cli v4.5.0构建的前端框架系统
本框架为前后端分离开发而设计，更多的是体现一种开发思想，是项目开发的底层框架。

- 允许前端开发者，通过简单配置，一键打包整个项目的不同模板系统。
- 允许第三方开发者，按框架目录结构开发模板供用户使用。

### 功能介绍

* 支持第三方模板导入（简单copy到uni_html目录），自带 `default` 模板主题
* 支持按需一键打包构建项目不同的模板系统
* 支持指定单独页面构建
* 支持按需或全量引入vue组件库（vue对应的组件库支持按需引入）

## 使用说明

### 安装

* 下载最新版本 `git clone https://github.com/hiQbit/uniHTML3.git`
* Project setup `npm install`
* 配置 `uni_config/config.js` 文件 `uniName`,`moduleName`,`devMode`,`apiMode`,`apiUrl` 等参数
* 配置 `uni_config/extra.js` 文件 `extraFilePath` 参数
* 本地测试 `npm run serve`
* 构建模块页面 `npm run build`

### 目录结构说明

```
uni_config 框架配置目录（主要的配置目录）
uni_config/config.js uniHTML框架通用配置文件，非常重要！
uni_config/extra.js uniHTML框架扩展配置文件，按需配置时使用！
uni_config/extra/xxx.js 按需配置文件
uni_config/extra/default.config.js vue-cli默认配置
uni_config/extra/element_plus.js element plus配置
uni_config/extra/vant_next.js vant vue3版的配置文件
uni_static/${uniName}/${moduleName}/* 构建时不编译直接copy的文件，按项目/模板名称区分
uni_static/${uniName}/${moduleName}/xxx.json 模拟接口开发调试（apiMode=true）时，api数据文件
src/components 公共组件
src/uni_html 模板库目录（主要的开发目录）
src/uni_html/${uniName}/${moduleName}/pages.js 模板所有页面的build配置

src/uni_tools/ 框架函数库目录
src/uni_tools/uni_string.js 字符函数,含random随机函数等函数
src/uni_tools/uni_ajax.js Ajax封装函数，依赖axios
src/uni_tools/uni_url.js 浏览器url处理函数
src/uni_tools/uni_api.js 基于uniHTML规范，封装的uniAjax方法，用于api调用
```

### 按需引入

需要修改 `uni_config/extra.js` 文件中 `extraFilePath` 参数。

### 接口返回格式

```
//0表示成功，非0表示失败
{
  "code": 0,
  "data": {},
  "msg": "说明"
}
```

### 常见问题及注意事项

**1. post请求本地.json文件，模拟接口提交时**

```
POST http://localhost:8080/api/login.json 404 (Not Found)
Uncaught (in promise) TypeError: Cannot set property 'type' of undefined
```

原因：绝大多数web服务器，都不允许静态文件响应POST请求

解决方式：
> 可以将post转为get模拟请求json文件

**2. 接口模拟json文件，命名及使用规范**

```
1. 文件名: api接口名.json
2. 使用：uniApi.post('/cookie_token')
3. 放置位置：应放置在 uni_static/${uniName}/${moduleName}/ 目录下
```