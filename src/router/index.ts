import OriginalSheet from '@/views/OriginalSheet';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: OriginalSheet,
      path: '/original',
    },
  ],
});

export default router;
