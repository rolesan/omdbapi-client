const state = {
  page: 1, // страница результатов поиска
  onPageCount: 10,
  totalResults: 0, // количество найденых
}

const getters = {
  // ...
}

const actions = {
  // ...
}

const mutations = {
  PAGE: (state, page) => state.page = page,
  ON_PAGE_COUNT: (state, onPageCount) => state.onPageCount = onPageCount,
  TOTAL_RESULTS: (state, totalResults) => state.totalResults = totalResults,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
