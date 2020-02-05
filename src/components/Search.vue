<template>
  <div class="Search">
    <input type="text" class="line-part input" v-model="search" v-on:keyup.enter="$e.$emit('search')">
    <button class="line-part button" @click="$e.$emit('search')">Поиск</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Search',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState('search', [
      'searchString',
    ]),
  },
  watch: {
    searchString(string) { this.search = string },
    search(string) { this.$store.commit('search/SEARCH_STRING', string) },
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .Search {
    display: flex;
    width: 100%;
    /* max-width: $width-max; */
    margin: auto;
    box-sizing: border-box;

    .line-part {
      height: 40px;
      box-sizing: border-box;
      border: $border-panels;
      font-size: 16px;
      text-align: center;
      outline: none;
    }
    .line-part.input {
      flex: 0 80%;
      padding: 0 20px;
      border-right: none;
    }
    .line-part.button {
      flex: 0 20%;
    }

  }
</style>
