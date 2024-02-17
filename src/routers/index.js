import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import DashboardPage from '../pages/DashboardPage.vue'
import OverviewPage from '../pages/OverviewPage.vue'

const routes = createRouter(
  {
    history: createWebHistory(),
    routes: [
      { 
        path: '/',
        name: 'dashboard',
        component: DashboardPage
      },
      {
        path: '/overview',
        name: 'overview',
        component: OverviewPage
      }
    ]
  }
)

export default routes