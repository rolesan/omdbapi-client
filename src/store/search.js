const state = {
  searchString: '', // строка поиска
  blockWidth: null,
}

const getters = {
  // ...
}

const actions = {
  // ...
}

const mutations = {
  SEARCH_STRING: (state, searchString) => state.searchString = searchString,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
