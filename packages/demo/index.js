
import demo from './index.vue';
demo.install = function (Vue) {
    Vue.component(demo, demo);
};
export default demo;
