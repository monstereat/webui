const common = require('./base.config.js')
const {
    merge
} = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, '../examples/app.js'),
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 9999
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../examples/index.html')
        })
    ]
})