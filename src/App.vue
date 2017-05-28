<template>
  <div id="app">
    <header>
      <div>
        <signIn></signIn>
        <search></search>
      </div>
    </header>
    <div class="container">
      <oNav></oNav>
      <!--<router-view></router-view>-->
      <!--<quickSearch></quickSearch>-->
      <!--<shoppingList></shoppingList>-->
      <!--<storage></storage>-->
      <!--<shoppingCart></shoppingCart>-->
      <!--<shoppingRecord></shoppingRecord>-->
      <calender></calender>
    </div>
  </div>
</template>

<script>

  import signIn from './components/signIn.vue'
  import search from './components/search.vue'
  import oNav from './components/nav.vue'
  import quickSearch from './components/quickSearch.vue'
  import shoppingList from './components/shoppingList.vue'
  import storage from './components/storage.vue'
  import shoppingCart from './components/shoppingCart.vue'
  import shoppingRecord from './components/shoppingRecord.vue'
  import calender from './components/calendar.vue'

  export default {
    name: 'app',
    components: {
      signIn,
      search,
      oNav,
      shoppingList,
      storage,
      shoppingCart,
      shoppingRecord,
      quickSearch,
      calender,
    },
  }
</script>

<style lang="scss">
  body {
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
  }
  #app {
    header {
      height: 60px;
      border-bottom: 2px solid #333;
      font-family: "Microsoft YaHei" sans-serif;
      >div {
        width: 1200px;
        height: 100%;
        margin: auto;
        display: flex;
      }
    }
    .container {
      width: 1200px;
      margin: auto;
      display: flex;
    }
  }
</style>
