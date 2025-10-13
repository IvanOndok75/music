<template>
<div>
<MyHeader/>
<MyMusic/>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMusic from './components/MyMusic.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyMusic,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
