```
# NPM 
npm install --save-dev webpack-bundle-analyzer
# Yarn 
yarn add -D webpack-bundle-analyzer
```

1、配置webpack.config.js文件：

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports={
  plugins: [
    new BundleAnalyzerPlugin()  // 使用默认配置
	]
}
```

2.配置package.json

```
"analyz": "NODE_ENV=production npm_config_report=true npm run build"
```

