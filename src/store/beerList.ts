export interface beerList {
  beerList: Beer[]
}
export interface Beer {
  id: number
  name: string
  food_pairing?: (string)[] | null
}

const state = {
  beerList: [
    {
      id: 31,
      name: 'Nanny State',
      food_pairing: 'Earthy mushroom pasta'
    },
    {
      id: 1,
      name: 'Punk IPA',
      food_pairing: 'everything'
    }
  ]
}

const getters = {
  allBeers: (state: beerList) => state.beerList
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
