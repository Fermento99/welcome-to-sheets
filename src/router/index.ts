import Dealer from '@/views/Dealer';
import Home from '@/views/Home';
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
    {
      component: Dealer,
      path: '/dealer',
    },
  ],
});

export default router;
