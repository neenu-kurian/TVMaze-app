/* eslint-disable semi */
const mutations = {
  GET_SHOWS (state, payload) {
    state.shows = payload;
  },
  GET_SHOW (state, payload) {
    state.show = payload;
  },
  CLEAR_SHOW_DETAILS (state) {
    state.show = {};
  },
  SET_SEARCH (state, payload) {
    state.searchText = payload;
  }
}

export default mutations;
