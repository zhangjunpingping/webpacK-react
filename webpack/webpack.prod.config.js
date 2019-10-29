const path = require("path");
const commonConfig = require("./webpack.base.config");
const merge = require("webpack-merge");

const proConfig = {
  // 入口文件
  devtool: "source-map",
  mode: "production",
  entry: {
    app: [path.join(__dirname, "../src/index.js")]
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "../dist")
  },
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
          { loader: "css-loader", options: { importLoaders: 1 } },
          "less-loader"
        ]
      }
    ]
  }
};
module.exports = merge({
  customizeArray(a, b, key) {
    if (key === "entry.app") {
      return b;
    }
    return undefined;
  }
})(commonConfig, proConfig);
