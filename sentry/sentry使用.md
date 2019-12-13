## 为什么需要sentry

JS没有如后端一样完善的日志系统，因此线上的各种bug都难以迅速定位。在加入错误日志工具前，每次报告bug都要麻烦用户协助开发人员进行定位，一方面对用户极不友好，另一方面也加大了Bug定位的难度。因此我们需要一个工具来帮我们收集错误信息，如接口报错，dom报错以及语法错误等。下面我就介绍一下sentry这个工具如何在项目中使用。

## 引入sentry

1. sentry 部署

   因为公司内部已经搭建好了一套sentry服务，并且创建好项目生成了一个DSN。所以只需要工程里面引用项目DSN即可。DSN就相当于连接到你sentry server的url，每个项目都单独对应一个DSN。

   ```javascript
   Sentry.init({
   dsn: '自己项目的dsn',
   integrations: [
     new Integrations.Vue({Vue, attachProps: true}),
   ],
   environment: process.env.VUE_APP_MODE,
   release: 'release@1.0.0'
   })
   ```

2. 上传source-map文件

   目前来说，前端项目基本都会压缩混淆代码，这样导致Sentry捕捉到的异常堆栈难以理解。为了定位到错误的精确位置，我们需要把source和map文件上传到sentry服务器，这一步可以通过webpack插件[Sentry Webpack Plugin](https://github.com/getsentry/sentry-webpack-plugin)上传。

* 添加配置文件，在项目的根目录添加.sentryclirc文件

  ```javascript
  [defaults]
  url = 服务器地址
  org = 组织名
  project = 项目名
  apiKey = apiKey
  
  [auth]
  token = token
  
  [http]
  keepalive=false
  ```

  

* 安装Sentry Webpack Plugin插件，配置文件如下

  ```javascript
  const SentryCliPlugin = require('@sentry/webpack-plugin')
  module.exports = {
    plugins:[
      new SentryCliPlugin({
        include: './dist',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
        configFile: '.sentryclirc',
        urlPrefix: 'http:' + process.env.VUE_APP_CDN_URL, // 静态文件地址
        release: 'release@1.0.0' //release版本号
      }),
    ]
  }
  ```

  

  配置好后sentry后台错误信息展示效果

  ![sentry图片](https://s2.ax1x.com/2019/12/05/Q8kt8U.png)

3. 配置项目的release版本号

   上传的sourece-map通过realease来标注版本,这样在多版本的监控中可以对错误信息进行过滤.
由于Sentry服务是依赖release版本号区分map文件的，因此需要确保版本号对应和唯一性，采用用法是在打包运行的时候获取到当前的时间戳并赋值给了一个全局变量。使用webpack自带的插件DefinePlugin即可实现，修改如下：

   ```javascript
   const SentryCliPlugin = require('@sentry/webpack-plugin')
   const SENTRY_RELEASE = JSON.stringify(Date.now())
   
   module.exports = {
     plugins:[
       new webpack.DefinePlugin({
         SENTRY_RELEASE: SENTRY_RELEASE
       }),
       new SentryCliPlugin({
         include: './dist',
         ignoreFile: '.sentrycliignore',
         ignore: ['node_modules', 'webpack.config.js'],
         configFile: '.sentryclirc',
         urlPrefix: 'http:' + process.env.VUE_APP_CDN_URL, // 静态文件地址
         release: process.env.VUE_APP_MODE + `@${SENTRY_RELEASE}` //release版本号
       }),
     ]
   }
   ```

   

   Sentry发布的版本如下图所示：
   ![版本](https://s2.ax1x.com/2019/12/05/Q88fsI.png)

4. 打包删除sourceMap文件

   但是如果在项目打包部署的时候把map文件一起上传到web服务器会造成非常大的安全隐患，所以我们需要在打包完成后删除map文件。可以在webpack中使用[Clean plugin for webpack插件](https://github.com/johnagan/clean-webpack-plugin)来删除。配置文件如下:

   ```javascript
   const {CleanWebpackPlugin} = require('clean-webpack-plugin');
   module.exports = {
      plugins:[
       new CleanWebpackPlugin({
         protectWebpackAssets: false,
         cleanAfterEveryBuildPatterns: ['**/js/*.map'],
       })
     ]
   }
   ```

   


