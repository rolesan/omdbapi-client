<template>
  <div class="Info" v-if="show" :class="{'visible': show}">
    <div class="info-wrap">
      <div class="view-loading" v-show="loadingViewInfo">
        <loadingChip />
      </div>
      <div class="view-info" v-show="!loadingViewInfo">
        <div class="content">
          {{ data }}
        </div>
      </div>
    </div>
    <div class="close" @click="$store.dispatch('info/close')"><i class="fa fa-close"></i></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import loadingChip from '@/elements/loadingChip.vue'

export default {
  name: 'Info',
  components: {
    loadingChip,
  },
  computed: {
    ...mapState('info', [
      'show',
      'data',
      'loadingViewInfo',
    ]),
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .Info {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 3;

    .close {
      display: block;
      position: absolute;
      right: 0;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: $color-info-back;
      text-align: center;
      cursor: pointer;
      z-index: 4;

      @media screen and (max-width: $view-0) {
        width: 30px;
        height: 30px;
        line-height: 30px;
      }
    }

    .info-wrap {
      display: block;
      position: absolute;
      top: $padding-info-1;
      left: $padding-info-1;
      right: $padding-info-1;
      bottom: $padding-info-1;
      background: $color-info-back;

      @media screen and (max-width: $view-0) {
        top: $padding-info-0;
        left: $padding-info-0;
        right: $padding-info-0;
        bottom: $padding-info-0;
      }
    }

    .view-loading {
      display: block;
      width: 100%;
      padding: 60px 0 0 0;
      text-align: center;
    }

    .view-info {
      display: block;
      position: absolute;top: $padding-info-1;
      left: $padding-info-1;
      right: $padding-info-1;
      bottom: $padding-info-1;
      background: $color-info-back;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;

      @media screen and (max-width: $view-0) {
        left: $padding-info-0;
        right: $padding-info-0;
      }
    }
  }
</style>
