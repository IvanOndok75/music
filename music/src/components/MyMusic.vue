<template>
  <h2>Music List</h2>
  <div>
    <section v-for="song in songs" :key="song.id">
      <img :src="song.image" :alt="song.title" />
      <h3>{{ song.title }}</h3>
      <button 
        class="star-btn" 
        :class="{ active: isFavorite(song) }" 
        @click="toggleFavorite(song)"
        aria-label="Toggle favorite"
      >
        ★
      </button>
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
  { id: 1, title: "Around The world", image: "https://openclipart.org/image/800px/221020", audio: "/audio/ATC.mp3" },
  { id: 2, title: "Headlock", image: "https://th.bing.com/th/id/R.d7dd540a725624650187f30e6e40e565?rik=voVDu6aq3bQQ4w&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f2448-256x256x32.png", audio: "/audio/Headlock.mp3" },
  { id: 3, title: "YWHIRMY", image: "https://th.bing.com/th/id/R.7617e85831e8d6d29fe3ea10edb0514a?rik=d%2fn674kTaDKKzQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f06%2fcool-folder-icons-windows-7_156646.png", audio: "/audio/member.mp3" },
  { id: 4, title: "Dreamspace", image: "https://th.bing.com/th/id/R.a39718a19898f4779ed53acdac20f038?rik=BhU5Gtunu24DrQ&riu=http%3a%2f%2ficons.iconseeker.com%2fpng%2ffullsize%2fnext-series%2fmy-music-3.png", audio: "/audio/009.mp3" },
  { id: 5, title: "Stereo Love", image: "https://www.shareicon.net/data/2015/05/29/45717_music_256x256.png", audio: "/audio/love.mp3" },
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
  align-items: center;
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
  background-color: #dd3489ff;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  flex-wrap: wrap;
}
img {
  width: 235px;
  height: 235px;
  object-fit: cover;
}
h2 {
  background-color: #dd3489ff;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c0509ff;
  margin: 20px;
  animation: moveLine linear infinite;
}
.star-btn, .play-btn {
  font-size: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: gray;
  margin-top: 10px;
  transition: color 0.3s ease;
}
.star-btn.active {
  color: gold;
}
.play-btn:hover {
  color: #2c0509ff;
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

