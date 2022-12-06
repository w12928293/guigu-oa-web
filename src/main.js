import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/main.less';

import router from './routes/index';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
