const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./base.config.js')
const fs = require('fs')
const resolve = path.resolve
const join = path.join
  
function getEntries(path) {
    let files =  fs.readdirSync(resolve(path));
    const entries = files.reduce( (ret, item) => {
          const itemPath =`${path}/${item}`;
          const isDir =  fs.statSync(resolve(itemPath)).isDirectory();
          console.log(isDir,itemPath)
          if (isDir) {
              ret[item] = resolve(join(itemPath, 'index.js'));
          } else {
              const [name] = item.split('.');
              ret[name] = resolve(itemPath);
          }
          return ret;
    }, {})
    return entries;
}
    
module.exports = merge(common,{
    mode: 'production',
    devtool:'source-map',
    // entry:path.resolve(__dirname, '../packages/index.js'),
    entry: getEntries(path.resolve(__dirname, '../packages')),
    output:{
        // filename: 'main.js',
        filename:'[name]/index.js',
        path: path.join(__dirname, '../lib'),
        libraryExport: "default",
        libraryTarget: 'umd'
    },
})