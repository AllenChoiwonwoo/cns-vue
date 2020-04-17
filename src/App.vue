<template>
  <div id="app">
    <router-view name="BaseHeader"></router-view>
<!-- 
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/main">Main</router-link>
    </div> -->
    <router-view/>
    <router-view name="BaseFooter"></router-view>
  </div>
</template>
<script>

export default {
  // components:{

  // }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
