// js模块将es6转成es5
// 将css文件和js文件分离打包
// css的转换
// 配置别名
// 图片处理之类

const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const config = require('./config.js');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // alias: config.alias,
    modules: ['node_modules']
  },
//   externals: config.externals,
//   externals: ['node_modules'],
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        // exclude: config.jsexclude,
        // exclude: ['node_modules'],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/, 
        use:[{
            loader: 'url-loader',
            options: {
                limit:10240
            }
        }]
        // query: {
        //   limit: 10000,
        //   name: path.posix.join('static', '[name].[hash:7].[ext]')
        // }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
};

