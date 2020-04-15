<template>
  <div class="home">
    <div>
      <!-- <router-link to="/home/AllPost">allpost</router-link> |
      <router-link to="/home/MyFeed">myfeed</router-link> -->
      <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link class="nav-link active" data-toggle="tab" to="/home/AllPost">allpost</router-link>

          </li>
          <li class="nav-item">
            <router-link to="/home/MyFeed" class="nav-link" data-toggle="tab">AllPost</router-link>
          </li>
        </ul>

        <div class="col-md-2"></div>

        <div class="tab-content">
          <div class="col-md-2"></div>
          <div class="container tab-pane active col-md-8" id="myfeed">
            <h1 class="my-4"></h1>
          </div>
          <div class="container tab-pane fade col-md-8" id="posts">
            <h1 class="my-4"></h1>
          </div>
        </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <router-view></router-view>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>hi there</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      
    }
  },
  methods: {
    chageTab(){

    }
  },
    
}
</script>
