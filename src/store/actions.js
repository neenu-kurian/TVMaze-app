const actions = {
  async fetchTvShows ({ commit, state }) {
    try {
      state.loading = true
      const url = 'https://api.tvmaze.com/shows?page=1'
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      commit('GET_SHOWS', data.slice(0, 10))
    } catch (err) {
      console.log(err)
    }
  },
  async fetchShowDetails ({ commit, state }, payload) {
    try {
      state.loading = true
      const url = `https://api.tvmaze.com/shows/${payload}`
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      commit('GET_SHOW', data)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchSearchResults ({ commit, state }) {
    try {
      state.loading = true
      const url = `https://api.tvmaze.com/search/shows?q=${state.searchText}`
      const res = await fetch(url)
      const data = await res.json()
      state.loading = false
      const results = data.map(eachShow =>
        eachShow.show
      )
      commit('GET_SHOWS', results)
    } catch (err) {
      console.log(err)
    }
  }

}

export default actions
