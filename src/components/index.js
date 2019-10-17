import A from '@/components/A.vue'
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(A.name, A)
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
export default {
  install
}