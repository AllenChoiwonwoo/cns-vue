<template>
<div>

  <router-view name="BaseHeader"></router-view>
  <div class="container">
    
    <div v-if="this.$cookies.get('accesstoken')">
      <!-- <router-link to="/home/AllPost">allpost</router-link> |
      <router-link to="/home/MyFeed">myfeed</router-link> -->
      <ul v-if="selectTab" class="nav nav-tabs">
          <li class="nav-item">
            <router-link to="/home/AllPost" class="nav-link active" data-toggle="tab" >
            <p @click="activetab(1)">Allpost</p>
            </router-link>

          </li>
          <li class="nav-item">
            <router-link to="/home/MyFeed" class="nav-link" data-toggle="tab">
            <p @click="activetab(2)">MyFeed</p>
            </router-link>
          </li>
        </ul>
        <ul v-else class="nav nav-tabs">
          <li class="nav-item">
            <router-link to="/home/AllPost" class="nav-link" data-toggle="tab" >
            <p @click="activetab(1)">Allpost</p>
            </router-link>

          </li>
          <li class="nav-item">
            <router-link to="/home/MyFeed" class="nav-link active" data-toggle="tab">
            <p @click="activetab(2)">MyFeed</p>
            </router-link>
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
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <router-view></router-view>
    </div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>hi there</h1> -->
  </div>
  <router-view name="BaseFooter"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      _class_allpost: "nav-link active",
      _class_myfeed: "nav-link",
      whichTab: true
    }
  },
  created() {
    // this.$router.push('/home/AllPost')
    
  },
  methods: {
    activetab(numb){
      if(numb === 1){
        this.whichTab = false
      }else if(numb === 2){
        this.whichTab = true
      }
    },
    selectTab(){
      
    },
    activeAllpost(){
      console.log("activeAllpost");
      
      this._class_allpost = "nav-link active"
      this._class_myfeed = "nav-link"
    },
    activeMyfeed(){
      console.log("activeMyfeed");
      
      this._class_allpost = "nav-link"
      this._class_myfeed = "nav-link active"
    }
  },
    
}
</script>
