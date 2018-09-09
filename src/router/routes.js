import ScrollDemo from 'views/ScrollDemo'
import Layout from 'views/Layout'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('views/Home')
      }
    ]
  },
  {
    path: '/mobile',
    component: Layout,
    redirect: '/mobile/index',
    children: [
      {
        path: 'index',
        component: () => import('views/ScrollDemo')
      }
    ]
  }
]