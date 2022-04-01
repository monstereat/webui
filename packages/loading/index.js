import loading from './index.vue';
loading.install = function (Vue) {
    Vue.component(loading, loading);
};
export default loading;