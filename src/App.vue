<template>
  <div id="app">
    <oheader></oheader>
    <shoppingList></shoppingList>
    <!--<storage></storage>-->
    <!--<shoppingCart></shoppingCart>-->
    <!--<commodityOperations></commodityOperations>-->
  </div>
</template>

<script>

  import oheader from './components/header.vue'
  import shoppingList from './components/shoppingList.vue'
  import storage from './components/storage.vue'
  import shoppingCart from './components/shoppingCart.vue'
  import shoppingRecord from './components/shoppingRecord.vue'
  import commodityOperations from './components/commodityOperations.vue'
  import calender from './components/calendar.vue'

  export default {
    name: 'app',
    components: {
      oheader,
      shoppingList,
      storage,
      shoppingCart,
      shoppingRecord,
      calender,
      commodityOperations,
    },
  }
</script>

<style lang="scss"> 
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
