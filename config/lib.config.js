const path = require('path')
module.exports = merge(common,{
    mode: 'production',
    devtool:'source-map',
    entry:path.resolve(__dirname, '../packages/index.js'),
    output:{
        filename: 'main.js',
        path: path.join(__dirname, '../lib'),
        libraryExport: "default",
        libraryTarget: 'umd'
    },
})