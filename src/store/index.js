import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/store/app'
import cache from '@/store/cache'
import info from '@/store/info'
import item from '@/store/item'
import list from '@/store/list'
import paginator from '@/store/paginator'
import search from '@/store/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
      app,
      cache,
      info,
      item,
      list,
      paginator,
      search,
    },
    strict: debug,
})

export default store
