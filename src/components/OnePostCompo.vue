<template>
    <div class="card mb-4">
        <div class="card-body">
            <h2 class="card-title">
                {{postData.title}}
            </h2>
            <p class="card-text">
                {{postData.content}}
            </p>
            <a :href="makePostDetailURL" class="btn btn-primary">
                Read More &rarr;
            </a>
        </div>
        <div class="card-footer text-muted">
                Posted on {{ postData.createdAt.split('T')[0] }} by {{postData.user.username}}
            <span v-if="postData.user.isFollow == true" @click="doUnfollow(postData.user.id)"
            class="unfollow" :value="postData.user.id" style="color:red; cursor: pointer;">
                <!-- <button>unfollow</button> -->
                unfollow
            </span>
            <span v-else-if="postData.user.isFollow == false" @click="doFollow(postData.user.id)"
            class="follow" :value="postData.user.id" style="color:blue; cursor: pointer;">
                <!-- <button>follow</button> -->
                follow
            </span>
            <span v-else-if="postData.user.isFollow == null">

            </span>
        </div>

    </div>
</template>

<script>
export default {
    props:
        ['postData']
    ,
    data() {
        return {
            
        }
    },
    created() {
        console.log("postData =",this.postData);
        
    },
    computed: {
        makePostDetailURL(){
            return "/post/detail/"+this.postData.id;
        },
        // makeWriterData(){

        // },
        // selectSpanClass(){

        // },
        // makefollowOrUnfollowButton(){

        // }
    },
    methods: {
        doFollow(useridToFollow){
            console.log(" do Follow, useridToFollow = ",useridToFollow);
            var vm = this
            var config = {
                headers : {
                    accesstoken : vm.$cookies.get('accesstoken')
                }
            }
            var data = {
                followeeId : useridToFollow
            }

            this.axios.post('/follow', data, config)
            .then(function(response){
                // vm.$router.go
            })
            .catch(function(error){
                console.log("이미 팔로우한 회원입니다. ",error);
                // vm.$router.go()
            });
        },
        doUnfollow(useridToUnfollow){
            // console.log(" do unfollow ");
            console.log(" do unFollow, useridToUnfollow = ",useridToUnfollow);
            var vm = this
            var config = {
                headers : {
                    accesstoken : vm.$cookies.get('accesstoken')
                },
                data : {
                   followeeId : useridToUnfollow 
                }
            }
            // var data = {
            //     followeeId : useridToUnfollow
            // }

            this.axios.delete('/follow', config)
            .then(function(response){
                console.log("언팔 성공")
                // vm.$router.go
            })
            .catch(function(error){
                console.log("이미 언팔로우한 회원입니다. ",error);
                // vm.$router.go()
            });

            

/*
            var vm = this;
            var config = null;
            // this.$cookies.set("accesstoken", "1whoxnyrwwfkeljyznx");
            console.log("cookie.token = ", vm.$c console.log(" do Follow, useridToFollow = ",useridToFollow);
            var vm = this
            var config = {
                headers : {
                    accesstoken : vm.$cookies.get('token')
                }
            }
            var data = {
                followeeId : useridToFollow
            }

            this.axios.post('/follow', data, config)
            .then(function(response){
                vm.$router.go
            })
            .catch(function(error){
                console.log("이미 팔로우한 회원입니다. ",error);
                vm.$router.go()
            });ookies.get('token') );
            
            if (vm.$cookies.get('token')) {
                config = {
                    headers: {
                        accesstoken: vm.$cookies.get('token'),
                    }
                } 
            }
            console.log("getPosts - ",config);
            
            this.axios.get('/post', config)
            .then(function(response){
                console.log(response.data);
                vm.postDataList = response.data.data;
                
            })
            .catch(function(error){
                console.log(error); 
            });
            */
        }
    },

}
</script>

<style>
.button-follow
.button-unfollow{
    color: blue;
    cursor: pointer;
}

</style>