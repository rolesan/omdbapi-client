<template>
  <div class="Paginator" id="paginator">

    <button class="page" @click="$e.$emit('page-set', 1)" v-if="toLeft">1</button>
    <div class="page" v-if="toLeft">...</div>

    <button class="page added" v-for="(pageNum, index) in pages" :key="`page${index}`" :class="{'active': page == pageNum}"
      @click="$e.$emit('page-set', pageNum)">
      {{pageNum}}
    </button>

    <div class="page" v-if="toRight">...</div>
    <button class="page" @click="$e.$emit('page-set', pagesCount)" v-if="toRight">{{ pagesCount }}</button>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from 'jquery'

export default {
  name: 'Paginator',
  data() {
    return {
      pagesCount: null,
      pages: [],
      countButtons: null,
      toLeft: false,
      toRight: false,
    }
  },
  computed: {
    ...mapState('paginator', [
      'page',
      'onPageCount',
      'totalResults',
    ]),
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.pages = []
        this.toLeft = false
        this.toRight = false
        this.pagesCount = Math.ceil(this.totalResults / this.onPageCount)
        if (this.pagesCount === 0) return
        for (let i = 0; i < this.pagesCount; i++) this.pages.push(i + 1)
        this.$nextTick(() => {
          const buttons = $(".page.added")
          if (buttons.length == 0) return
          const widthCanva = $("#paginator").width()
          const widthButton = buttons[0].clientWidth
          this.countButtons = (Math.floor(widthCanva / widthButton)) - 5
          const half = Math.floor(this.countButtons / 2)
          let from = 0
          if ((this.page - half) > 0) from = this.page - half
          if ((this.page + half) >= this.pagesCount) from = this.pagesCount - this.countButtons
          let newPagesArray = []
          for (let i = 0; i < this.pagesCount; i++) {
            if (this.pages[i] >= from && this.pages[i] <= (from + this.countButtons)) newPagesArray.push(this.pages[i])
          }
          this.pages = newPagesArray
          this.toLeft = !!(this.pages.indexOf(1) === -1)
          this.toRight = !!(this.pages.indexOf(this.pagesCount) === -1)
        })
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
    totalResults: {
      handler() { this.init() },
      immediate: true,
    },
    page() { this.init() },
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .Paginator {
    max-width: $width-max;
    line-height: $height-paginator;
    margin: auto;
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
    overflow: hidden;

    .page {
      display: inline-block;
      width: $width-page-button;
      height: $height-page-button;
      text-align: center;
      cursor: pointer;
      outline: none;
      border: 0;
    }
    .page.active {
      background: $color-page-active;
      color: #ffffff;
    }
  }
</style>
