const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = {
  // 入口文件
  entry: {
    app: [path.join(__dirname, "../src/index.tsx")]
  },
  output: {
    filename: "bundle.[hash].js"
  },
  // 配置相应的插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = commonConfig;
