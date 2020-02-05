<template>
  <div class="Home">
    <div class="search-wrap">
      <SearchComponent />
    </div>
    <div class="list-wrap" id="scrolled">
      <ListComponent />
    </div>
    <div class="paginator-wrap">
      <PaginatorComponent />
    </div>

    <InfoComponent />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from 'jquery'

import InfoComponent from '@/components/Info.vue'
import ListComponent from '@/components/List.vue'
import PaginatorComponent from '@/components/Paginator.vue'
import SearchComponent from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    InfoComponent,
    ListComponent,
    PaginatorComponent,
    SearchComponent,
  },
  computed: {
    ...mapState('list', [
      'loadingViewList',
    ]),
    ...mapState('paginator', [
      'page',
    ]),
  },
  methods: {
    scrollTop() { $('#scrolled').animate({ scrollTop: 0 }, 200) },
  },
  watch: {
    loadingViewList() { this.scrollTop() },
    page() { this.scrollTop() },
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .Home {

    .search-wrap {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: $height-search-panel;
      background: $color-search-back;
      box-shadow: $shadow-block;
      z-index: 2;
    }

    .list-wrap {
      display: block;
      position: fixed;
      top: $height-search-panel;
      left: 0;
      bottom: $height-paginator;
      width: 100%;
      padding: 20px 20px 0 20px;
      overflow-y: auto;
      box-sizing: border-box;
      scrollbar-width: 2px;
      z-index: 1;
    }

    .paginator-wrap {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: $height-paginator;
      background: $color-paginator-back;
      box-shadow: $shadow-block;
      z-index: 2;
    }

  }
</style>
