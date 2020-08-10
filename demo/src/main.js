import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerComponent from './plugin/registerComponent'
import { init, bind } from './plugin/lifeCycle' // 引入初始化生命周期钩子
Vue.config.productionTip = false

registerComponent(); // 全局注册基础组件

//自定义options合并策略
Vue.config.optionMergeStrategies.myOption = function (parent, child) {
  console.log('parent' + parent);
  console.log('child' + child);
  return 'mmmmmm';
}
init() // 初始化
const vm =new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
bind(vm)


