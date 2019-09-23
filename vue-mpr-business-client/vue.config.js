/* eslint-disable no-unused-vars */
let target = "";
const env = process.env.NODE_ENV;
var proEnv = require("./config/pro.env"); // 生产环境
var uatEnv = require("./config/uat.env"); // 测试环境
var devEnv = require("./config/dev.env"); // 开发环境

if (env === "production") {
  target = proEnv.hosturl;
} else if (env === "test") {
  target = uatEnv.hosturl;
} else {
  target = devEnv.hosturl;
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  devServer: {
    open: false,
    host: "localhost",
    port: 9090,
    proxy: {
      "*": {
        target: target, // 目标代理接口地址
        secure: false,
        logLevel: "debug",
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        outFiles: "D://a.txt"
      }
    }
  }
};
