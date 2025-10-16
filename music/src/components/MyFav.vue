<template>
  <div>
    <h1>My Favorite Music</h1>
    <div v-if="favoriteSongs.length > 0">
      <div v-for="song in favoriteSongs" :key="song.id" class="song">
        <img :src="song.image" :alt="song.title" />
        <h3>{{ song.title }}</h3>
      </div>
    </div>
    <p v-else>No favorites yet.</p>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: "MyFav",
  setup() {
    const favoriteSongs = inject('favoriteSongs')

    // Захист від undefined
    if (!favoriteSongs) {
      console.warn('favoriteSongs is not provided')
      return { favoriteSongs: [] }
    }

    return { favoriteSongs }
  }
}
</script>

<style scoped>
.song {
  margin: 10px;
}
img {
  width: 150px;
}
</style>

