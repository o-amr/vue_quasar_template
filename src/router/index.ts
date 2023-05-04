import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteNames } from '@/router/routeNames';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: { name: RouteNames.Main },
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'main',
        name: RouteNames.Main,
        component: () => import('@/pages/MainPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
