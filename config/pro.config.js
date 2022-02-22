const path = require('path')
module.exports = merge(common,{
    mode: 'production',
    entry:path.resolve(__dirname, '../example/app.js'),
    output:{
        filename: 'js/[name]-[hash].js',
        path: path.join(__dirname, '../dist')
    },
    module:{
        rules: []
    },
    optimization:{
        runtimeChunk:{
            name:'runtime',
        },
        moduleIds: 'hashed',
        minimizer: [
            new CssMinimizerPlugin(),
            new TreserPlugin(),
        ]
    }
})