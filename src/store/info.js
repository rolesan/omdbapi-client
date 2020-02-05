const state = {
  show: false,
  data: null, // объект с полным описанием
  loadingViewInfo: true,
}

const getters = {
  // ...
}

const actions = {
  set({commit}, data) {
    this.commit('cache/ITEM', data)
    commit('DATA', data)
  },
  close({commit}) {
    commit('SHOW', false)
    commit('DATA', null)
  },
}

const mutations = {
  SHOW: (state, show) => state.show = show,
  DATA: (state, data) => state.data = data,
  LOADING_VIEW_INFO: (state, loadingViewInfo) => state.loadingViewInfo = loadingViewInfo,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
