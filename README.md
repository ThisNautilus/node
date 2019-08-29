### 运行前需要全局安装browserify
`npm install -g browserify`
###  将main.js转为浏览器可用的格式
`browserify main.js > compiled.js`

- Browserify 是目前最常用的 CommonJS 格式转换的工具
- 浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。

    -  module
    -  exports
    -  require
    -  global

-  只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。