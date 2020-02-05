<template>
  <div class="List">
    <div class="view-loading" v-show="loadingViewList && !noResults">
      <loadingChip />
    </div>
    <div class="view-list" v-show="!loadingViewList && !noResults">
      <Item class="item" v-for="(item, index) in list" :key="`item${index}`" :info="item"
        @callback="$e.$emit('item-select', item.imdbID)" />
    </div>
    <div class="view-no-results" v-if="noResults">
      Ничего не найдено...
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Item from '@/components/Item.vue'
import loadingChip from '@/elements/loadingChip.vue'

export default {
  name: 'List',
  components: {
    Item,
    loadingChip,
  },
  computed: {
    ...mapState('list', [
      'loadingViewList',
      'list',
      'noResults',
    ]),
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .List {
    display: block;
    height: 100%;
    max-width: $width-max;
    margin: auto;
    box-sizing: border-box;

    .view-loading {
      display: block;
      width: 100%;
      padding: 30px 0 0 0;
      text-align: center;
    }

    .view-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      justify-content: flex-start;
      justify-content: space-around;

      .item {
        flex: 0 24%;
        height: auto;
        margin-bottom: 20px;
        cursor: pointer;

        @media screen and (max-width: $view-2) {
          flex: 0 32%;
        }
        @media screen and (max-width: $view-1) {
          flex: 0 48%;
        }
        @media screen and (max-width: $view-0) {
          flex: 0 100%;
        }
      }
    }

    .view-no-results {
      display: block;
      width: 100%;
      padding: 30px 0 0 0;
      text-align: center;
    }
  }
</style>
