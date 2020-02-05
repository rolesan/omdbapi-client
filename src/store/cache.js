const _ = require('lodash')

const state = {
  lists: [ // сохраненные результаты запросов к api
    // {
    //   searchString: 'Batman', // строка поиска
    //   page: 2, // номер страницы в поиске
    //   items: [], // список найденных
    //   totalResults: 369, // количество найденных
    // },
  ],
  items: {
    // 'tt2975590': {} // TODO: закомментировать структуру
  },
}

const getters = {
  // ...
}

const actions = {

  /**
   * обновить результаты поиска, если они ранее заносились в state.lists
   *  или
   * добавить результаты поиска, если их нет в state.lists
   */
  lists({commit}, { searchString, page, items, totalResults }) {
    let replaceStatus = false
    _.forEach(state.lists, (item, index) => {
      if (item.searchString === searchString, item.page == page) {
        replaceStatus = true
        commit('LISTS_REPLACE', { index, data: { searchString, page, items, totalResults } })
      }
    })
    if (!replaceStatus) commit('LISTS_PUSH', { searchString, page, items, totalResults })
  },

}

const mutations = {
  LISTS_PUSH: (state, data) => state.lists.push(data),
  LISTS_REPLACE: (state, { index, data }) => state.lists[index] = data,
  ITEM: (state, item) => state.items[item.imdbID] = item,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
