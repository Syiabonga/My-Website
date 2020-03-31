import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/MainPage.vue';
import Login from '../views/Admin/Login.vue';
import Dash from '../views/Admin/Dash.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dash,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(localStorage.getItem('signedIn'));
    if (authUser) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
  next();
});
export default router;
