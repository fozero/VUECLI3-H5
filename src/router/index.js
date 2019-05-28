import Vue from 'vue'
import Router from 'vue-router'

const EntryIndex = () => import('@/pages/entry/Index.vue')
const StatisticsIndex = () => import('@/pages/statistics/Index.vue')
const MineIndex = () => import('@/pages/mine/Index.vue')


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/pages/Login.vue')
  },{
    path: '/',
    name: 'entrance',
    component: () => import('@/pages/Entrance.vue'),
    children:[
      {
        name: 'home',
        path: 'home',
        meta: {
          title: '首页'
        },
        component: EntryIndex
      }, {
        name: 'statistics',
        path: 'statistics',
        meta: {
          title: '统计'
        },
        component: StatisticsIndex
      }, {
        name: 'mine',
        path: 'mine',
        meta: {
          title: '我的'
        },
        component: MineIndex
      }
    ]
  },{
      path:'/myInfo',
      name:'myInfo',
      meta: {
        title: '我的信息'
      },
      component: () => import('@/pages/mine/myInfo.vue')
  },{
      path:'/feedback',
      name:'feedback',
      meta: {
        title: '反馈'
      },
      component: () => import('@/pages/mine/feedback.vue')
  },{
      path:'/about',
      name:'about',
      meta: {
        title: '关于我们'
      },
      component: () => import('@/pages/mine/about.vue')
  }]
})

// 路由守卫 拦截
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path != '/login'){
    let uid = store.get('uid')
    console.log('uid', uid)
    if (uid) {
      if (to.path == '/') {
        next({ path: '/home' })
      }
      next()
    } else {
      next({ path: '/login' })
    }
  }else{
    next()
  }
})

export default router
