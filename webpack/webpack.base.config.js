const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const commonConfig = {
  // 入口文件
  devtool: 'inline-source-map',
  // entry: {
  //   app: [path.join(__dirname, '../src/index.js')]
  // },
  // output: {
  //   path: path.join(__dirname, '../dist'),
  //   filename: '[name].[chunkhash].js',
  //   chunkFilename: '[name].[chunkhash].js',
  //   publicPath: '/'
  // },
  entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, '../src/index.js')]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
        include: path.join(__dirname, '../src')
      }
    ]
  },
  // 配置相应的插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

    new webpack.HashedModuleIdsPlugin(),

    new StyleLintPlugin({
      context: 'src',
      files: '**/*.less',
      syntax: 'less'
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}

module.exports = commonConfig
