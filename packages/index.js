import demo from './demo/index.js';
import demot from './demot/index.js';
export default {
    install(Vue) {
        Vue.use(demo)
        Vue.use(demot)
    }
};
