const state = {
  loadingViewList: false,
  list: [],
  noResults: true,
}

const getters = {
  // ...
}

const actions = {
  set({commit}, { searchString, page, items, totalResults }) {
    this.dispatch('cache/lists', { searchString, page, items, totalResults })
    this.commit('search/SEARCH_STRING', searchString)
    this.commit('paginator/PAGE', page)
    this.commit('paginator/TOTAL_RESULTS', totalResults)
    commit('LIST', items)
  },
}

const mutations = {
  LOADING_VIEW_LIST: (state, loadingViewList) => state.loadingViewList = loadingViewList,
  LIST: (state, list) => state.list = list,
  NO_RESULTS: (state, noResults) => state.noResults = noResults,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
