const path = require('path')
const {
    merge
} = require('webpack-merge')
const common = require('./base.config.js')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// js压缩 webpack5带有
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',
    entry: path.resolve(__dirname, '../example/app.js'),
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: []
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        moduleIds: 'hashed',
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
})