<template>
  <div id="app">
    <Scrabble/>
  </div>
</template>

<script>
import Scrabble from './components/Scrabble.vue'

export default {
  name: 'app',
  components: {
    Scrabble
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
