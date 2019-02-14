import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'

//引用charts
Vue.prototype.$echarts = echarts;

//引入element-ui的弹窗
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
