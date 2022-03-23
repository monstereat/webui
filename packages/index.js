import demo from './demo/index.js';
import demot from './demot/index.js';
const install = function(Vue){
    Vue.component(demo.name, demo);
    Vue.component(demot.name, demot);
}
export default {
    install,
    demo,
    demot
};
