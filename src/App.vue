<template>
  <div id="app" class="App">
    <HomeLayout />
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'

import api from '@/api'
import config from '@/config'

import HomeLayout from '@/layouts/Home.vue'

export default {
  name: 'app',
  components: {
    HomeLayout,
  },
  computed: {
    ...mapState('search', [
      'searchString',
    ]),
    ...mapState('paginator', [
      'page',
    ]),
    ...mapState('cache', [
      'lists',
      'items',
    ]),
  },
  methods: {

    apiSearch(searchString, page) {
      if (!searchString) return
      if (!page) page = 1
      const cachedItems = _.filter(this.lists, item  => (item.searchString === searchString && item.page == page))
      if (cachedItems.length === 0) {
        this.$store.dispatch('app/apiSearchBefore')
        api.search(searchString, page)
        .then(response => {
          if (!response.Error) {
            this.$store.commit('list/NO_RESULTS', false)
            this.$store.dispatch('list/set', { searchString, page, items: response.Search, totalResults: response.totalResults })
            this.$store.dispatch('app/apiSearchAfter')
          } else {
            this.$store.commit('list/NO_RESULTS', true)
            this.$store.dispatch('list/set', { searchString, page, items: [], totalResults: 0 })
            this.$store.dispatch('app/apiSearchAfter')
          }
        })
        .catch(error => console.error(error) )
      } else {
        this.$store.dispatch('list/set', { searchString, page, items: cachedItems[0].items, totalResults: cachedItems[0].totalResults })
        this.$store.dispatch('app/apiSearchAfter')
      }
    },

    apiItem(id) {
      if (!id) return
      this.$store.commit('info/SHOW', true)
      const cachedItems = _.filter(this.items, item  => (item.imdbID === id))
      if (cachedItems.length === 0) {
        this.$store.dispatch('app/apiItemBefore')
        api.item(id)
        .then(response => {
          this.$store.dispatch('info/set', response)
          this.$store.dispatch('app/apiItemAfter')
        })
        .catch(error => console.error(error) )
      } else {
        this.$store.dispatch('info/set', cachedItems[0])
        this.$store.dispatch('app/apiItemAfter')
      }
    },

  },
  created() {
    this.apiSearch(config.searchStringDefault, 1)
    this.$store.commit('paginator/ON_PAGE_COUNT', config.resultsCountOnPage)

    this.$e.$on('page-set', page => this.apiSearch(this.searchString, page))
    this.$e.$on('searchString-set', searchString => this.apiSearch(searchString, this.page))
    this.$e.$on('item-select', id => this.apiItem(id))
    this.$e.$on('search', () => this.apiSearch(this.searchString, 1))
  },
  beforeDestroy() {
    this.$e.$on('page-set', () => {})
    this.$e.$on('searchString-set', () => {})
    this.$e.$on('item-select', () => {})
    this.$e.$on('search', () => {})
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }

  .App {
    display: block;
    margin: 0;
    height: 100%;
    background: $color-app-back;
  }
</style>
