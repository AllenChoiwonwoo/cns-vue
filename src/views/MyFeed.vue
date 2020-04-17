<template>
  <div>
    <!-- <h1>MyFeed</h1> -->
   <!-- <router-view></router-view> -->
    <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8" id="posts">
            <div v-for="postData in postDataList" :key="postData.idx">
                <one-post-compo v-bind:postData="postData"></one-post-compo>
            </div>
            
          <h1 class="my-4"></h1>
        </div>
      </div>
  </div>
  
</template>

<script>
import OnePostCompo from '../components/OnePostCompo.vue'
export default {
  data() {
    return {
      isLogin: true,
      postDataList: [],
    }
  },
  components: {
        OnePostCompo,
    },
  created() {
    console.log("allpost.vue 출력");
    
    this.getMyFeed()
  },
  methods: {
    getMyFeed(){
            var vm = this;
            var config = null;
            // this.$cookies.set("accesstoken", "1whoxnyrwwfkeljyznx");
            console.log("cookie.token = ", vm.$cookies.get('accesstoken') );
            
            if (vm.$cookies.get('accesstoken')) {
                config = {
                    headers: {
                        accesstoken: vm.$cookies.get('accesstoken'),
                    }
                } 
            }
            console.log("getPosts - ",config);
            
            this.axios.get('/post/feed', config)
            .then(function(response){
                console.log(response.data);
                vm.postDataList = response.data.data;
                
            })
            .catch(function(error){
                console.log(error); 
            });

        },
  },

}
</script>

<style>

</style>