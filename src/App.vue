<template>
  <div id="app">
    <oheader></oheader>
    <router-view></router-view>
  </div>
</template>

<script>

  import oheader from './components/header.vue'

  export default {
    name: 'app',
    components: {
      oheader,
    },
  }
</script>

<style lang="scss"> 
  html {
    overflow-y: scroll;
  }
  button {
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  #app {
    font-family: Arial "Microsoft YaHei" sans-serif;
    .container {
      width: 1200px;
      margin: 31px auto;
      display: flex;
    }
  }
</style>
