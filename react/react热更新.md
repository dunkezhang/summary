## 为什么配置热更新

react项目配置热加载，由于开发项目，每次修改代码浏览器都会重载页面，这样效率不高，我们希望是只更新修改代码的那部分组件，不用重新加载页面。

## React热更新相关配置

1. webpack-dev-server --hot

   修改打包指令,增加 --hot(这个开启了后，css文件更新不用重新加载页面，但是js文件更新还是会重新加载页面)

   

   ```
   "scripts":{
   	"start": "webpack-dev-server --hot --mode development --port 3001",
    }
   
   ```

   如果添加了--hot指令后有以下报错:


  ```
  Cannot use [chunkhash] or [contenthash] for chunk in '[name].[chunkhash].js' (use [hash] instead)
  ```

​	按照以下方式即可解决，在wepack的output中修改：

```
output:{
	filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
	chunkFilename: mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
}
```

2. 添加React Fast Refresh

React Fast Refresh 是 React 官方为 React Native 开发的**模块热替换（HMR）方案**，由于其核心实现与平台无关，所以也适用于 Web。

快速上手如下：

a.安装依赖，主要使用下面两个npm包

```
npm install @pmmmwh/react-refresh-webpack-plugin react-refresh
```

b.修改配置文件webpack.config.js，修改module配置和plugins配置

```
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          {
						loader:require.resolve('babel-loader'),// 如果有其他loader,这个一定放在第一位，不然会报错
						options: {
              plugins: [require.resolve('react-refresh/babel')], // 为 react-refresh 添加
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),    // 为 react-refresh 添加
  ],
};

```

这样配置一下就可以零侵入式的进行热更新啦。

## 参考文章

 [一分钟用上热更新 React Fast Refresh（react-refresh）](https://segmentfault.com/a/1190000023534941)

