const path = require("path");
const commonConfig = require("./webpack.base.config");
const merge = require("webpack-merge");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  // 入口文件
  module: {
    // 配置相应的规则
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js[x]?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "../dist")
  }
};
module.exports = merge({
  customizeArray(a, b, key) {
    if (key === "entry.app") {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);
