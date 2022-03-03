const fs=require('fs');
const path=require('path');
var endOfLine = require('os').EOL;
const render = require('json-templater/string');

const IMPORT_TEMPLATE='import {{name}} from \'./{{name}}/index.js\';';
const USE_TEMPLATE='Vue.component({{name}}, {{component}});';
const MAIN_TEMPLATE=`
{{include}}
export default {
    install(Vue) {
        Vue.use({{component}})
    }
};
`

const files=fs.readdirSync('./packages');

const folder =files.slice(0,-1)

console.log(folder)

console.log('MAIN_TEMPLATE', MAIN_TEMPLATE)


const includeComponentTemplate = [];
const listComponentTemplate =[];

const writeFile=function(file,include,list){
    const p=path.resolve(__dirname,`../packages/index.js`);
    fs.writeFileSync(p,render(MAIN_TEMPLATE,{
        include:include,
        list: list,
        component:file
    }));
}

folder.forEach((item)=>{
    const include=render(IMPORT_TEMPLATE,{
        name:item,
        component:item,
    });
    const list=render(USE_TEMPLATE,{
        name:item,
        component:item,
    });
    writeFile(item,include,list);
});

