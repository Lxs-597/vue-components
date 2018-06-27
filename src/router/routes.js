import ScrollDemo from 'views/ScrollDemo'

export default [
  {
    path: '/',
    redirect: '/scrolldemo'
  },
  {
    path: '/scrolldemo',
    name: 'ScrollDemo',
    component: ScrollDemo
  }
]