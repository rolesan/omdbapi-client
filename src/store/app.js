const state = {
  // ...
}

const getters = {
  // ...
}

const actions = {
  apiSearchBefore() {
    this.commit('list/LOADING_VIEW_LIST', true)
  },
  apiSearchAfter() {
    setTimeout(() => {
      this.commit('list/LOADING_VIEW_LIST', false)
    }, 450) // 450ms время разглядеть
  },
  apiItemBefore() {
    this.commit('info/LOADING_VIEW_INFO', true)
  },
  apiItemAfter() {
    setTimeout(() => {
      this.commit('info/LOADING_VIEW_INFO', false)
    }, 450) // 450ms время разглядеть
  },
}

const mutations = {
  // ...
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
