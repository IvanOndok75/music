<template>
  <footer class="footer">
    <p>&copy; 2025 My Retro Music Player. Усі права захищено.</p>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style scoped>
.footer {
  background-color: #fa0881ff;
  text-align: center;
  color: #2c0509ff;
  font-size: 20px;
  width: 100%;
  padding: 10px 0;   /* невеликий внутрішній відступ для тексту */
  margin: 0;
  position: fixed;   /* "прилипає" до низу */
  bottom: 0;         /* фіксується внизу */
  left: 0;
}

.footer p {
  margin: 0;         /* прибирає відступи у <p> */
}
</style>
