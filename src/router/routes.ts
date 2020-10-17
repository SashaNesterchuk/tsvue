import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard.page',
    component: () => import('../pages/DashboardPage.vue')
  }
]

export default routes
