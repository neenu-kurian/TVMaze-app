import { apiUrl, apiSearchUrl } from '../constants'

const actions = {
  async fetchTvShows ({ commit, state }) {
    try {
      state.loading = true
      const url = `${apiUrl}?page=1`
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      commit('GET_SHOWS', data.slice(0, 10))
    } catch (err) {
      console.log(err)
      state.error = true
      state.loading = false
    }
  },
  async fetchShowDetails ({ commit, state }, payload) {
    try {
      state.loading = true
      const url = `${apiUrl}/${payload}`
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      commit('GET_SHOW', data)
    } catch (err) {
      console.log(err)
      state.error = true
      state.loading = false
    }
  },
  async fetchSearchResults ({ commit, state }) {
    try {
      state.loading = true
      const url = `${apiSearchUrl}?q=${state.searchText}`
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      const results = data.map(eachShow =>
        eachShow.show
      )
      commit('GET_SHOWS', results)
    } catch (err) {
      console.log(err)
      state.error = true
      state.loading = false
    }
  }

}

export default actions
