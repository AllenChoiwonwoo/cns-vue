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
            <span v-if="postData.user.isFollow == true" @click="doUnfollow"
            class="unfollow" :value="postData.user.id" style="color:red; cursor: pointer;">
                <!-- <button>unfollow</button> -->
                unfollow
            </span>
            <span v-else-if="postData.user.isFollow == false" @click="doFollow"
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
        doFollow(){
            console.log(" do Follow");
        },
        doUnfollow(){
            console.log(" do unfollow ");
            
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