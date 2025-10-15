<template>
  <h2>Music List</h2>
  <div>
  <section class="m1">
  <img alt="music player" src="https://openclipart.org/image/800px/221020">
  <h3>Sjnjwejj</h3>
  </section>
  <section class="m2">
  <img alt="music player" src="https://th.bing.com/th/id/R.d7dd540a725624650187f30e6e40e565?rik=voVDu6aq3bQQ4w&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f2448-256x256x32.png&ehk=Qj7BA%2b567kDneC3%2f%2bQWSnTsDVdMtHW00e3AZNuvGO%2bg%3d&risl=&pid=ImgRaw&r=0">
  <h3>fvweffevw</h3>
  </section>
  <section class="m3">
  <img alt="music player" src="https://th.bing.com/th/id/R.7617e85831e8d6d29fe3ea10edb0514a?rik=d%2fn674kTaDKKzQ&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f06%2fcool-folder-icons-windows-7_156646.png&ehk=eUPyFbRAmaS6Ioo62qXV9dHKIKIfYw9NlVIIRcLRFeA%3d&risl=&pid=ImgRaw&r=0">
  <h3>weffw</h3>
  </section>
  <section class="m4">
   <img alt="music player" src="https://th.bing.com/th/id/R.a39718a19898f4779ed53acdac20f038?rik=BhU5Gtunu24DrQ&riu=http%3a%2f%2ficons.iconseeker.com%2fpng%2ffullsize%2fnext-series%2fmy-music-3.png&ehk=jc00dmkrtwpzqgf1qWGF4dIMnxdXm6L3DBrh%2bAsZlT8%3d&risl=&pid=ImgRaw&r=0">
   <h3>ewfwf</h3>
   </section>
   <section class="m5">
    <img alt="music player" src="https://www.shareicon.net/data/2015/05/29/45717_music_256x256.png">
    <h3>Stereo Love</h3>
    </section>
  </div>
</template>

<script>
export default{
    name:"MyMusic"
}
</script>

<style scoped>
section {
    margin: 15px;
    align-items: center;
    border: solid 2px #fff;
    box-shadow: 0 4px 8px #fff;
    translition: transform 0,3s ease;
    color: #d5b3e6b4;
}
section:hover{
transform: scale(1,1.075);
}
div {
    display: flex;
    background-color: #dd3489ff;
    width: 100%;
    margin: 0px;
    padding: 0px;
    
}
img {
    width: 235px;
}
h2 {
    background-color: #dd3489ff;
    text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c0509ff;
  margin: 20px;
  position: relative;
  display: inline block;
  animation: moveLine linear infinite;
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
h3{
  color: #2c0509ff;
}


</style>