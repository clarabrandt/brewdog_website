export interface beerList {
  beerList: Beer[]
}
export interface Beer {
  id: number
  name: string
  food_pairing?: (string)[] | null
}

const state = {
  beerList: []
}

const getters = {
  allBeers: (state: beerList) => state.beerList
}

const mutations = {}

const actions = {
  async fetchBeers({ commit }) {
    const response = await fetch('https://api.punkapi.com/v2/beers')
    const data = await response.json()

    console.log(data)
  }
}

// fetch(url, { method: 'POST',

export default {
  state,
  getters,
  mutations,
  actions
}

// function postData(url = ``, data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//         redirect: "follow", // manual, *follow, error
//         referrer: "no-referrer", // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native Javascript objects
// }
