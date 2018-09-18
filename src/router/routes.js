import ScrollDemo from 'views/ScrollDemo'
import Layout from 'views/Layout'

// console.log(ScrollDemo.__proto__ === Vue.prototype.__proto__)

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        name: 'Home',
        meta: { title: '首页' },
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
    path: '/page2',
    component: Layout,
    name: 'Page2',
    meta: { title: '页面-2' },
    children: [
      {
        path: 'page2-1',
        name: 'Page2-1',
        meta: { title: '页面2-1' },
        redirect: '/page2/page2-1/page2-1-1',
        component: () => import('views/Page2'),
        children: [
          {
            path: 'page2-1-1',
            name: 'Page2-1-1',
            meta: { title: '页面2-1-1' },
            component: () => import('views/Page2/Page2-1/Page2-1-1')
          }
        ]
      },
      {
        path: 'page2-2',
        name: 'Page2-2',
        meta: { title: '页面2-2' },
        component: () => import('views/Page2/Page2-2')
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