<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { reactive, provide } from 'vue'

export default {
  components: {
  },
  setup() {
    const favoriteSongs = reactive([])

    function toggleFavorite(song) {
      const index = favoriteSongs.findIndex(s => s.id === song.id)
      if (index === -1) {
        favoriteSongs.push(song)
      } else {
        favoriteSongs.splice(index, 1)
      }
    }

    provide('favoriteSongs', favoriteSongs)
    provide('toggleFavorite', toggleFavorite)
  }
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>