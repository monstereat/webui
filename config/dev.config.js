const path = require('path')
module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    entry:path.resolve(__dirname, '../example/app.js'),
    devServer:{
        hot: true,
        open: true,
        port: 9999
    }
})