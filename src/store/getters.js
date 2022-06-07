/* eslint-disable space-unary-ops */
const getters = {

  show: (state) => state.show,
  shows: (state) => state.shows,
  summary: (state) => state.show.summary.replace(/(<([^>]+)>)/ig, '')
}

export default getters
