import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import SiteMap from './views/SiteMap.vue'

Vue.use(VueRouter)

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: SiteMap
    },
    {
      path: '/beers',
      name: 'beers',
      // route level code-splitting
      // this generates a separate chunk (beers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "beers" */ './views/Beers.vue'),
      props: true
    },
    {
      path: '/beers/:grad/:min/:max',
      component: () =>
        import(/* webpackChunkName: "beers" */ './views/Beers.vue'),
      props: true
    },
    {
      path: '/beers/:id',
      component: () =>
        import(/* webpackChunkName: "beers" */ './views/OneBeer.vue'),
      props: true
    }
  ]
})

