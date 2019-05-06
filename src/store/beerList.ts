export interface IState {
  beerList: beerList
  selectedBeer: Beer
}

export interface beerList {
  beerList: Beer[]
}

export interface Beer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: object
  boil_volume: object
  method: object
  ingredients: object
  food_pairing?: (string)[] | null
  brewers_tips: string
  contributed_by: string
}

const state = {
  beerList: [],
  selectedBeer: {},
  getIngredients: [{}],
  page: 1
}

const getters = {
  allBeers: (state: IState) => state.beerList,
  selectedBeer: (state: IState) => state.selectedBeer
}

const getUrl = (payload: any) => {
  const base_url = 'https://api.punkapi.com/v2/beers?per_page=24'
  let filters = ''
  if (payload.grad === 'abv') {
    filters += `&abv_gt=${payload.min}&abv_lt=${payload.max}`
  }
  if (payload.grad === 'ibu') {
    filters += `&ibu_gt=${payload.min}&ibu_lt=${payload.max}`
  }
  if (payload.page) {
    filters += `&page=${payload.page}`
  }
  return `${base_url}${filters}`
}

export interface Payload {
  grad: string
  min: number
  max: number
  id: string
  page: number
}

const actions = {
  async fetchBeers({ commit }: any, payload: Payload) {
    const response = await fetch(getUrl(payload))
    const data = await response.json()
    commit('setBeers', data)
  },
  async fetchRandom({ commit }: any) {
    const response = await fetch('https://api.punkapi.com/v2/beers/random')
    const data = await response.json()

    commit('setBeer', data[0])
  },
  async fetchBeerById({ commit }: any, id: number) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    const data = await response.json()

    commit('setBeer', data[0])
  }
}

const mutations = {
  setBeers: (state: IState, beerList: beerList) => (state.beerList = beerList),
  setBeer: (state: IState, selectedBeer: Beer) =>
    (state.selectedBeer = selectedBeer)
}

export default {
  state,
  getters,
  mutations,
  actions
}
