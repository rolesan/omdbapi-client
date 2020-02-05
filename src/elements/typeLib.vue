<template>
  <div class="typeLib">
    <div v-if="type === 'movie'" class="movie">кино</div>
    <div v-if="type === 'series'" class="series">сериал</div>
    <div v-if="type === 'episode'" class="episode">сериал</div>
    <div v-if="type === 'game'" class="game">игра</div>
  </div>
</template>

<script>
export default {
  name: 'tipeLib',
  props: [ 'type' ],
}
</script>

<style lang="scss">
  @import '@/assets/styles/custom.scss';

  .typeLib {
    text-shadow: 1px 1px 1px black;

    .movie {
      padding: 0 7px;
      background: $color-type-movie;
    }
    .series {
      padding: 0 7px;
      background: $color-type-series;
    }
    .episode {
      padding: 0 7px;
      background: $color-type-episode;
    }
    .game {
      padding: 0 7px;
      background: $color-type-game;
    }
  }
</style>
