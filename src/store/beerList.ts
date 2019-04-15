export interface beerList {
  beerList: Beer[]
}
export interface Beer {
  id: number
  name: string
  abv: number
  ibu: number
  food_pairing?: (string)[] | null
}

const state = {
  beerList: []
}

const getters = {
  allBeers: (state: beerList) => state.beerList
}

const getUrl = payload => {
  const base_url = 'https://api.punkapi.com/v2/beers'
  let filters = ''
  if (payload.grad === 'abv') {
    filters = filters + `abv_gt=${payload.min}&abv_lt=${payload.max}`
  }
  if (payload.grad === 'ibu') {
    filters = filters + `ibu_gt=${payload.min}&ibu_lt=${payload.max}`
  }
  return `${base_url}?${filters}`
}

const actions = {
  async fetchBeers({ commit }: any, payload: any) {
    console.log('payload', payload)
    const response = await fetch(getUrl(payload))
    const data = await response.json()

    commit('setBeers', data)
  }
}

const mutations = {
  setBeers: (state: beerList, beerList: Beer[]) => (state.beerList = beerList)
}

// fetch(url, { method: 'POST',

export default {
  state,
  getters,
  mutations,
  actions
}
