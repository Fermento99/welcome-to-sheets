import Home from '@/views/Home/Home.vue';
import OriginalSheet from '@/views/OriginalSheet';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: '/home',
      path: '/',
    },
    {
      component: Home,
      path: '/home',
    },
    {
      component: OriginalSheet,
      path: '/original',
    },
  ],
});

export default router;
