import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

import '@/assets/css/app.css';
import Utils from '@/lib/utils';

Vue.use(Utils);

Vue.config.productionTip = false;

// Vue.prototype.$custom='自定义属性---Janice';
//
// let obj={
//   install:function (Vue,options) {
//     Vue.prototype.$abc='啦啦啦！！！';
//     console.log(Vue);
//     console.log(options);
//   }
// };
// Vue.use(obj,{a:11*11,b:'hello world!!!'});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
