import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BaseFooter from '../components/BaseFooter.vue'
import BaseHeader from '../components/BaseHeader.vue'
import BaseMain from '../views/BaseMain.vue'
import BaseLogin from '../views/BaseLogin.vue'
import AllPost from '../views/AllPost.vue'
import MyFeed from '../views/MyFeed.vue'
import PostDetail from '../views/PostDetail.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    component: 
    // { 
      Home,
      // BaseHeader: BaseHeader,
      // default: Home,
      // BaseFooter: BaseFooter,

      children: [
        {
        path: 'AllPost',
        // component : AllPost
        components: {
                BaseHeader: BaseHeader,
                default: AllPost,
                BaseFooter: BaseFooter,
        }
      },
      {
        path: 'MyFeed',
        // component : MyFeed
        components: {
          BaseHeader: BaseHeader,
          default: MyFeed,
          BaseFooter: BaseFooter,
        }
      },
      {
        path: '/',
        // component : AllPost
        components: {
          BaseHeader: BaseHeader,
          default: AllPost,
          BaseFooter: BaseFooter,
        }
      },
    ]

    // }
  },
  {
    path: '/main',
    components: {
      BaseHeader: BaseHeader,
      default: BaseMain,
      BaseFooter: BaseFooter,
    }
  },
  {
    path: '/login',
    components: {
      BaseHeader: BaseHeader,
      default: BaseLogin,
      BaseFooter: BaseFooter,
    }
  },
  {
    path: '/post/detail/:id',
    components:{
      BaseHeader: BaseHeader,
      default: PostDetail,
      BaseFooter: BaseFooter,  
    }
  },
  {
    path: '/signup',
    components: {
      BaseHeader: BaseHeader,
      default: SignUp,
      BaseFooter: BaseFooter,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
