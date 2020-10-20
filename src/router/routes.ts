import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../pages/DashboardPage.vue')
  },
  {
    path: '/detectors/:id',
    name: 'detectors.item',
    component: () => import('../pages/DetectorPage.vue')
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('../pages/rooms/RoomsPage.vue')
  }
]

export default routes
