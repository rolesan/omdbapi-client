<template>
  <div class="Item" @click="$emit('callback')">
    <div class="poster" :id="`${info.imdbID}_poster`"></div>
    <div class="info">
      <div class="label year">{{info.Year}} г.</div>
      <div class="label type"><typeLib :type="info.Type" /></div>
      <div class="title">{{info.Title}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from 'jquery'

import typeLib from '@/elements/typeLib.vue'

export default {
  name: 'Item',
  props: [ 'info' ],
  components: {
    typeLib,
  },
  computed: {
    ...mapState('list', [
      'loadingViewList',
    ]),
  },
  methods: {
    init() {
      this.$nextTick(() => {
        const item = $(`#${this.info.imdbID}_poster`)
        item.css({ width: 'auto' })
        const width = item.width()
        const height = width * 445 / 300
        item.css({ backgroundImage: `url(${this.info.Poster})` })
        if (width != 0) $('.poster').width(width)
        if (height != 0) $('.poster').height(height)
      })
    },
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.init)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.init)
  },
  watch: {
    loadingViewList() { this.init() },
    info() { this.init() },
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .Item {
    height: auto;
    padding: 5px;
    background-color: $color-item-back;
    box-sizing: border-box;

    .poster {
      display: block;
      background: {
        color: $color-item-poster;
        size: cover;
        position: center center;
      }
    }
    
    .info {
      background: #ffffff;
      height: 100px;
      padding: 5px 5px 5px 5px;

      .label {
        display: block;
        height: 20px;
        line-height: 20px;
        padding: 0 5px;
        color: white;
        font: { size: 12px; weight: bold; }
      }

      .year {
        float: left;
        background: rgb(46, 82, 23);
      }

      .type {
        float: right;
      }

      .title {
        display: block;
        height: 72px;
        padding: 8px 0 0 0;
        text-align: center;
        font: { size: 16px; weight: bold; }
        clear: both;
        overflow: hidden;
      }
    }
  }
</style>
