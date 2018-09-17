import ScrollDemo from 'views/ScrollDemo'
import Layout from 'views/Layout'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [
      {
        path: 'home',
        component: () => import('views/Home')
      }
    ]
  },
  {
    path: '/page1',
    component: Layout,
    redirect: '/page1/page1-1',
    name: 'Page1',
    meta: { title: '页面-1' },
    children: [
      {
        path: 'page1-1',
        name: 'Page1-1',
        meta: { title: '页面1-1' },
        component: () => import('views/Page1/Page1-1')
      },
      {
        path: 'page1-2',
        name: 'Page1-2',
        meta: { title: '页面1-2' },
        component: () => import('views/Page1/Page1-2')
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