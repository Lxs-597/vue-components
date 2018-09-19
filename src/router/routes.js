import ScrollDemo from 'views/ScrollDemo'
import Layout from 'views/Layout'

// console.log(ScrollDemo.__proto__ === Vue.prototype.__proto__)

const createWrap = () => ({ template: '<router-view/>' })

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
        component: () => import('views/Page2/Page2-1'),
        children: [
          {
            path: 'page2-1-1',
            name: 'Page2-1-1',
            meta: { title: '页面2-1-1' },
            component: () => import('views/Page2/Page2-1/Page2-1-1')
          },
          {
            path: 'page2-1-2',
            name: 'Page2-1-2',
            meta: { title: '页面2-1-2' },
            component: {
              template: '<h1>页面2-1-2</h1>'
            }
          },
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
    name: 'Mobile',
    component: Layout,
    redirect: '/mobile/index',
    meta: { title: '移动端' },
    children: [
      {
        path: 'index',
        meta: { title: '滚动demo' },
        component: () => import('views/ScrollDemo')
      }
    ]
  },
  {
    path: '/template',
    name: 'Template',
    meta: { title: 'Template' },
    component: {
      template: '<div>template</div>'
    }
  }
]