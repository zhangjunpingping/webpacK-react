const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = {
  // 入口文件
  entry: {
    app: [path.join(__dirname, "../src/index.js")]
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "../dist")
  },
  // 配置相应的插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};

module.exports = commonConfig;
