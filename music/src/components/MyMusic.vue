<template>
  <h2>Music List</h2>
  <div>
    <section v-for="song in songs" :key="song.id">
    <button 
        class="star-btn" 
        :class="{ active: isFavorite(song) }" 
        @click="toggleFavorite(song)"
        aria-label="Toggle favorite"
      >
        ★
      </button>
      <img :src="song.image" :alt="song.title" />
      <h3>{{ song.title }}</h3>
      <button 
        class="play-btn"
        @click="togglePlay(song)"
        :aria-label="isPlaying(song) ? 'Pause' : 'Play'"
      >
        {{ isPlaying(song) ? '⏸️' : '▶️' }}
      </button>
    </section>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'

const favoriteSongs = inject('favoriteSongs')
const toggleFavorite = inject('toggleFavorite')

const songs = [
  { id: 1, title: "Around The world", image: "/png/R.png", audio: "/audio/ATC.mp3" },
  { id: 2, title: "Headlock", image: "/png/h.png", audio: "/audio/Headlock.mp3" },
  { id: 3, title: "YWHIRMY", image: "/png/R1.png", audio: "/audio/member.mp3" },
  { id: 4, title: "Dreamspace", image: "/png/as.png", audio: "/audio/009.mp3" },
  { id: 5, title: "Stereo Love", image: "/png/123.png", audio: "/audio/love.mp3" },
]

const audio = new Audio()
const currentSong = ref(null)

function isFavorite(song) {
  return favoriteSongs?.some(s => s.id === song.id)
}

function togglePlay(song) {
  if (currentSong.value && currentSong.value.id === song.id && !audio.paused) {
    audio.pause()
  } else {
    if (currentSong.value?.id !== song.id) {
      audio.src = song.audio
      currentSong.value = song
    }
    audio.play()
  }
}

function isPlaying(song) {
  return currentSong.value?.id === song.id && !audio.paused
}


audio.addEventListener('ended', () => {
  currentSong.value = null
})
</script>

<style scoped>
section {
  margin: 15px;
  border: solid 2px #fff;
  box-shadow: 0 4px 8px #fff;
  transition: transform 0.3s ease;
  color: #d5b3e6b4;
  display: flex;
  flex-direction: column;
  width: 250px;
}
section:hover {
  transform: scale(1, 1.075);
}
div {
  display: flex;
  background-color: #f143a3ff;
  width: 100%;
  height: 100%;
  padding:0px;
}
img {
  width: 235px;
  height: 235px;
}
h2 {
  background-color: #f7077fff;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c0509ff;
  padding: 5px;
  animation: moveLine linear infinite;
}
.star-btn, .play-btn {
  font-size: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: gray;
  margin-top: 5px;
  right: 10px;
  margin-left: auto;
  transition: color 0.3s ease;
}
.star-btn.active {
  color: gold;
}
.star-btn:hover {
  transform: scale(1, 1.15);
}
.play-btn:hover {
  color: #2c0509ff;
}
.play-btn{
  font-size: 30px;
  align-items: center;
  margin-left: 0%;
  border: solid 2px #fff;
  box-shadow: 0 4px 8px #fff;

}
@keyframes moveLine {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
h3 {
  color: #2c0509ff;
  margin-top: 8px;
}
</style>

