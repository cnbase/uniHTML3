# uniHTML3
### 一种基于vue v3使用vue-cli v4.5.0构建的前端框架系统
本框架为前后端分离开发而设计，更多的是体现一种开发思想，是项目开发的底层框架。

- 允许前端开发者，通过简单配置，一键打包整个项目的不同模块系统。
- 允许第三方开发者，按框架目录结构开发模板供用户使用。

### 功能介绍

* 支持第三方模板导入，只需简单配置，自带 `default` 模板主题
* 支持按模块module一键打包构建前后台系统
* 支持指定页面构建
* 支持按需和全量引入vue组件库（vue对应组件库支持按需引入）

### 说明

**1. 安装说明**

* 下载文件，git clone https://github.com/hiQbit/uniHTML3.git
* 执行 `npm install`
* 配置 `uni_config/config.js` 文件,`devMode`,`apiData`等参数
* 本地测试 `npm run serve`
* 构建模块页面 `npm run build`

**2. 目录结构说明**

```
uni_config 框架配置目录（主要的配置目录）
uni_config/config.js 框架配置文件，非常重要！
uni_config/apiData.js 本地开发环境，api调试模拟数据
uni_config/element.js 按需引入element plus组件库时，babel配置（配合config内babelName使用）
src/components 公共组件
src/uni_html 模板库目录（主要的开发目录）
src/uni_html/模板名称/模块名称/pages.js 模块页面build配置
src/uni_tools/ 框架函数库目录
src/uni_tools/string.js 随机字符函数
src/uni_tools/ajax.js 封装的axios函数(使用前先安装axios,模拟数据时该文件内devMode设置为true)
src/uni_tools/url.js 浏览器url相关处理函数
src/uni_tools/api.js 封装好的ajax请求函数
```

**3. 配置 `按需/全量` 引入 `elementUI plus` 组件**

    查看 `uni_config/config.js` 文件中 `babelMode` 配置
    `babelMode = true;//全量引入`
    `babelMode = false;//按需引入`
    `babelName = 'element';//按需引入配置文件名`

**4. 组件引入方式不同，语法不同**

参考各页面目录下相关 `.js` 文件

* 按需引入组件：

```
import { createApp } from 'vue'
import { ElButton, ElSelect } from 'element-plus';
import App from './Index.vue';

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);

/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */

app.mount('#app')
```

* 全量引入组件：

```
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './Index.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

**5. 打包构建方式的选择**

请参考 `config.js` 文件

注意：每次打包都会删除原构建目录所有文件重新打包，通过配置 `outputDir` 修改构建目录，避免覆盖原文件

```
buildMode=true;//全页面构建，打包全部文件
buildMode=false;//单页面构建，单独打包
pageName='index';//单页面构建时，页面名称
```

**6. 接口返回格式说明**

```
{
  "code": 0,//0表示成功，非0表示失败
  "data": {},
  "msg": "说明"
}
```

**7. 模板配置文件 `config.js`**

```
siteUrl:'', #网站域名
apiUrl:'', #接口域名
devMode:true, #开发模式
getApiUrl：正式模式，请求实际 api 接口
apiData：开发模式时，需要配置模拟数据js文件路径
```

### 常见问题

**1. post请求本地.json文件，模拟接口提交时**

```
POST http://localhost:8080/api/login.json 404 (Not Found)
Uncaught (in promise) TypeError: Cannot set property 'type' of undefined
```

原因：绝大多数web服务器，都不允许静态文件响应POST请求

解决方式：
```
#修改 src/uni_tools/ajax.js
#改为开发模式，原理将post请求转为模拟get请求json文件
devMode = true;
```