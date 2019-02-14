import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Line from './views/line.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/line',
      name: 'line',
      component: Line
    }
  ]
})

//前置守卫
router.beforeEach((to, from, next) => {
  // ...
  if (to.query.type == 0) {
    router.push('/home');
  }
  if (to.query.type == 1) {
    router.push('/about');
  }
  if (to.query.type == 2) {
    router.push('/line');
  }
  next();
})

export default router