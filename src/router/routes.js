import ScrollDemo from 'views/ScrollDemo'
import Index from 'views/index/Index'

export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/scrolldemo',
    name: 'ScrollDemo',
    component: ScrollDemo
  }
]