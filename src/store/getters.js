/* eslint-disable space-unary-ops */
const getters = {
  show: (state) => state.show,
  shows: (state) => state.shows,
  summary: (state) => state.show.summary.replace(/(<([^>]+)>)/ig, ''),
  searchText: (state) => state.searchText
}

export default getters
