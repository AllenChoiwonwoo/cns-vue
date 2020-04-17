<template>
  <div>
    <!-- {{ $route.params.id }} -->
    <div class="container">

      <div class="row">

        <div class="col-lg-2"></div>
        <div class="col-lg-8">

          <h1 class="mt-4" id="detail_title"> {{postDetail.title}} </h1>

          <p class="lead">
            by <span id="detail_user">{{postDetail.user.username}}</span>
          </p>

          <hr>

          <p>
            Posted on <span id="detail_date">{{ postDetail.createdAt }}</span>
          </p>

          <hr>

          <div id="detail_content" class="my-5"> {{ postDetail.content }} </div>

          <hr>

          <button @click="openPostModifyModal" class="btn btn-primary" data-toggle="modal" data-target="#modify_post_modal">Modify</button>
          <button @click="deletePost" class="btn btn-danger" id="detail_delete_btn">Delete</button>

          <hr>

          <div class="card my-4">
            <h5 class="card-header">Leave a Comment:</h5>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="comment_user_text" placeholder="Username">
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="3" id="comment_text"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="create_comment_btn">Write Comment</button>
              </form>
            </div>
          </div>

          <div id="comments"></div>

        </div>

      </div>

    </div>

        <!-- 컴포넌트 MyModal -->
    <MyModal @close="closeModal" v-if="modal" class=" modal-dialog-centered">
      <template slot="header">
        <!-- <div> -->
          <h5 class="modal-title" id="exampleModalLongTitle">Modify Post</h5>
            <button  @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        <!-- </div> -->
      </template>
      <!-- default 슬롯 콘텐츠 -->
      <template>
              <!-- <p>Vue.js Modal Window!</p> -->
      <div>
        <!-- <input v-model="message"> -->
         <form>
              <div class="form-group">
                <label for="create_title_text">Title</label>
                <input v-model="postDetail.title" type="text" class="form-control" id="create_title_text">
              </div>
              <div class="form-group">
                <label for="create_content_text">Content</label>
                <textarea v-model="postDetail.content" class="form-control" rows="3" id="create_content_text">
                    
                </textarea>
              </div>
            </form>
        </div>
      </template>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template slot="footer">
        <!-- <button @click="doSend">제출</button> -->
        <button @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="modifiedPost" type="button" class="btn btn-primary" id="save_post_btn">Save Post</button>
      </template>
      <!-- /footer -->
    </MyModal>

  </div>

</template>

<script>
import MyModal from '../components/TestModal.vue'
  export default {
      data() {
          return {
              modal : false,
            //   title: "",
            //   content: "",
              id : this.$route.params.id,
              postDetail : {
                  id:"",
                  userId:"",
                  title: "",
                  content: "",
                  createdAt: "",
                  user: {
                      id:"",
                      username: "",
                      createdAt: "",
                  }
              }
          }
      },
      components:{
         MyModal,
      },
      created() {
          this.getPostById()
      },
      methods: {
          getPostById(){
              var vm = this;
            //   var config
            console.log("getPostById", this.id)
            this.axios.get('/post/'+this.id)
            .then(function(response){
                console.log(response.data.data);
                vm.postDetail = response.data.data;
            })
            .catch(function name(error) {
                console.log(error);
                
            })
          },
          openPostModifyModal() {
            this.modal = true
            },
          closeModal() {
            this.modal = false
            },

          deletePost(){
              console.log("delete post");
              console.log("create post");
            var vm = this
            var config = {
                 headers: {
                     accesstoken: vm.$cookies.get('accesstoken'),
                },
                // data: {
                //     id : this.id,
                //     title : this.title,
                //     content : this.content,
                // }
              }
              this.axios.delete("/post/"+this.id , config)
              .then(function(response) {
                  console.log("delete success ", response.data);
                  vm.$router.push('/home/MyFeed')
              })
              .catch(function(error) {
                  console.log(error);
                  
              })
          },
          modifiedPost(){
            console.log("create post");
            var vm = this
            var data = {
                id : this.id,
                title : this.postDetail.title,
                content : this.postDetail.content,
            }
            var config = {
                 headers: {
                     accesstoken: vm.$cookies.get('accesstoken'),
                }
              } 
                    
            this.axios.put("/post",data,config)
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

<style lang="stylus" scoped>
body {
	padding-top: 54px;
}

@media ( min-width : 992px) {
	body {
		padding-top: 56px;
	}
}
</style>
