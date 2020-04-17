<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/home">CNS-Vue</a>
        <div v-if="isLogin" class="row">
          <button class="btn btn-secondary mx-3" id="create_btn" data-toggle="modal"
            data-target="#create_post_modal" 
            @click="openModal">Create Post</button>
          <button @click="logout" class="btn" id="header_logout_btn">Logout</button>
        </div>
        <div v-else class="row">
          <router-link to="/signup">
            <button class="btn btn-secondary mr-3" id="header_signup_btn">Sign Up</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-secondary" id="header_login_btn">Login</button>
          </router-link>
        </div>


      </div>
    </nav>


<!-- <div class="modal fade" id="create_post_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Create Post</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="create_title_text">Title</label>
                <input type="text" class="form-control" id="create_title_text" placeholder="Title">
              </div>
              <div class="form-group">
                <label for="create_content_text">Content</label>
                <textarea class="form-control" rows="3" id="create_content_text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="save_post_btn">Save Post</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Button trigger modal -->


    <!-- <div class="example-modal-window">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>   -->

    <!-- 컴포넌트 MyModal -->
    <MyModal @close="closeModal" v-if="modal" class=" modal-dialog-centered">
      <template slot="header">
        <!-- <div> -->
          <h5 class="modal-title" id="exampleModalLongTitle">Create Post</h5>
            <button  @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        <!-- </div> -->
      </template>
      <template>
              <!-- <p>Vue.js Modal Window!</p> -->
      <div>
        <!-- <input v-model="message"> -->
         <form>
              <div class="form-group">
                <label for="create_title_text">Title</label>
                <input v-model="title" type="text" class="form-control" id="create_title_text" placeholder="Title">
              </div>
              <div class="form-group">
                <label for="create_content_text">Content</label>
                <textarea v-model="content" class="form-control" rows="3" id="create_content_text"></textarea>
              </div>
            </form>
        </div>
      </template>
      <!-- default 슬롯 콘텐츠 -->
      <!-- <p>Vue.js Modal Window!</p>
      <div>
        <input v-model="message">
         <form>
              <div class="form-group">
                <label for="create_title_text">Title</label>
                <input type="text" class="form-control" id="create_title_text" placeholder="Title">
              </div>
              <div class="form-group">
                <label for="create_content_text">Content</label>
                <textarea class="form-control" rows="3" id="create_content_text"></textarea>
              </div>
            </form>
        </div> -->
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <button @click="doSend">제출</button>
        <button @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="createPost" type="button" class="btn btn-primary" id="save_post_btn">Save Post</button>
      </template>
      <!-- /footer -->
    </MyModal>
  <!-- </div> -->
</div>

</template>

<script>
import MyModal from './TestModal.vue'
export default {

  data() {

    return {
      // showModal: false,
      isLogin: false, // 임시
      // is_show: false,
      modal: false,
      message: '',
      title: "",
      content: "",
    }
  },
  components:{
    MyModal,
  },
  created() {
    console.log("baseheader created ");
    
    if(this.$cookies.get('accesstoken')){
      console.log("isLogin = ",this.isLogin);
      
      this.isLogin = true;
    }
  },
  methods: {
    // handle_toggle: function(){ 
    //   this.is_show = !this.is_show; // #2, #3
    // },
    logout(){
      this.$cookies.remove("accesstoken");
      this.$router.go()
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    },
    createPost(){
      console.log("create post");
      
      var vm = this
      var data = {
        title : this.title,
        content : this.content,
      }
               var config = {
                    headers: {
                        accesstoken: vm.$cookies.get('accesstoken'),
                    }
                } 
            
      this.axios.post("/post",data,config)
      .then(function(response) {
        console.log("success ",response.data);
        vm.closeModal()
        vm.$router.go()
      })
      .catch(function(error) {
        console.log(error);
        
      })
    }
  },
    
}

</script>

<style>
/* .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
/* 
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */

</style>
