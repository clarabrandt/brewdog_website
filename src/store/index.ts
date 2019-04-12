import Vue from 'vue'
import Vuex from 'vuex'
import BeerList from '../BeerList.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beerList: []
  },
  mutations: {
    setText(state: any, newText: string) {
      state.text = newText
    }
  },
  // actions call mutations, which uptates the state directly
  actions: {},
  getters: {
    textUpper: (state: any) => {
      return state.text.toUpperCase()
    }
  }
})
