/* eslint-disable space-unary-ops */
const getters = {
  show: (state) => state.show,
  shows: (state) => state.shows,
  // if no summary present, show a defaut text saying it is not available
  summary: (state) => state.show.summary ? state.show.summary.replace(/(<([^>]+)>)/ig, '') : 'No summary available',
  searchText: (state) => state.searchText
}

export default getters
