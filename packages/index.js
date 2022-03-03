
import demot from './demot/index.js';
import demo from './demo/index.js';
export default {
    install(Vue) {
        Vue.use(demot)
        Vue.use(demo)
    }
};
