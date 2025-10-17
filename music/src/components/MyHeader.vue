<template>
<div>
  <h1>Retro Music Player</h1>
  <nav>
   <router-link to="/admin/music" active-class="active-link">music     </router-link>
      <router-link to="/admin/favorites" active-class="active-link">      favorites</router-link>
  </nav>
  <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default{
    name:"MyHeader"
}
</script>

<style scoped>
div {
    background-color: #dd3489ff;
    text-align: center;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
}
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c0509ff;
  background-color: #f8039aff;
  margin: 0px;
  padding: 10px;
}
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{
  padding: 5px;
  font-size: 30px;
  text-decoration: none;
}


</style>