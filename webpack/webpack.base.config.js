const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = {
  // 入口文件
  devtool: "inline-source-map",
  entry: {
    app: [path.join(__dirname, "../src/index.js")]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "../src")
      }
    ]
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
