import Vue from 'vue'
import Vuex from 'vuex'
// import BeerList from '../BeerList.vue'
import beerList from './beerList'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    beerList
  }
})
