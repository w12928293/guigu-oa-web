import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Approval from '../views/Approval.vue';
import ApprovalDetail from '../views/ApprovalDetail.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/approval', component: Approval, navbar: true },
  { path: '/approval/:id', component: ApprovalDetail, meta: {
    hideNav: true
  } },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;