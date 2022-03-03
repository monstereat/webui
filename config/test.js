const path = require('path')
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

console.log('xxxxxx', getEntries(path.resolve(__dirname, '../packages')))
