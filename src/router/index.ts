import Home from '@/views/Home/Home.vue';
import OriginalSheet from '@/views/OriginalSheet';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Home,
      path: '/',
    },
    {
      component: OriginalSheet,
      path: '/original',
    },
  ],
});

export default router;
