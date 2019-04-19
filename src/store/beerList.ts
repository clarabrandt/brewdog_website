export interface beerList {
  beerList: Beer[]
}
export interface Beer {
  id: number
  name: string
  abv: number
  ibu: number
  image_url: string
  food_pairing?: (string)[] | null
}

const state = {
  beerList: [],
  randomBeer: []
}

const getters = {
  allBeers: (state: beerList) => state.beerList,
  oneBeer: (state: randomBeer) => state.randomBeer
}

const getUrl = (payload: any) => {
  const base_url = 'https://api.punkapi.com/v2/beers'
  let filters = ''
  if (payload.grad === 'abv') {
    filters += `abv_gt=${payload.min}&abv_lt=${payload.max}`
  }
  if (payload.grad === 'ibu') {
    filters += `ibu_gt=${payload.min}&ibu_lt=${payload.max}`
  }
  return `${base_url}?${filters}`
}

const actions = {
  async fetchBeers({ commit }: any, payload: any) {
    const response = await fetch(getUrl(payload))
    const data = await response.json()

    commit('setBeers', data)
  },
  async fetchRandom({ commit }: any) {
    const response = await fetch('https://api.punkapi.com/v2/beers/random')
    const data = await response.json()

    commit('randomBeer', data)
    console.log(data)
  }
}

const mutations = {
  setBeers: (state: beerList, beerList: Beer[]) => (state.beerList = beerList),
  randomBeer: (state: randomBeer, randomBeer: Beer[]) =>
    (state.randomBeer = randomBeer)
}

// fetch(url, { method: 'POST',

export default {
  state,
  getters,
  mutations,
  actions
}
