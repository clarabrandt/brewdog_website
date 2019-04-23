import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      path: '/beers',
      name: 'beers',
      // route level code-splitting
      // this generates a separate chunk (beers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "beers" */ './views/Beers.vue')
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
