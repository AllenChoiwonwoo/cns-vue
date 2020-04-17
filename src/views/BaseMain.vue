<template>
  <div>
    <div class="container">
      <div v-if="isLogin">
        <div class="my-5"></div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="/home/MyFeed">My Feed</a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="/home/AllPost">All Posts</a>
          </li>
        </ul>
        

        <div class="col-md-2"></div>

        <div class="tab-content">
          <div class="col-md-2"></div>
          <div class="container tab-pane active col-md-8" id="myfeed">
            <h1 class="my-4">test1</h1>
          </div>
          <div class="container tab-pane fade col-md-8" id="posts">
            <h1 class="my-4">tesst2</h1>
          </div>
        </div>
      </div>


      <div v-else class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8" id="posts">
            <div v-for="postData in postDataList" :key="postData.idx">
                <one-post-compo v-bind:postData="postData"></one-post-compo>
            </div>
            
          <h1 class="my-4"></h1>
        </div>
      </div>


    </div>

    <!-- <#include "footer.ftl"> -->

    <div class="modal fade" id="create_post_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
        tab1: true,
        tab2: false,
      }
    },
    components: {
        OnePostCompo,
    },
    created() {
        // this.$cookies.get('token');
        this.getPosts();
    },
    computed: {
      
    },
    methods: {
        changeTab(){
          if(tab1 == true){}
        },
        getPosts(){
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
            
            this.axios.get('/post', config)
            .then(function(response){
                console.log(response.data);
                vm.postDataList = response.data.data;
                
            })
            .catch(function(error){
                console.log(error); 
            });

        },
    /*
        old() {
            $(document).ready(function(){
	
	var token;
	if(document.cookie.includes("accesstoken")) {
		token = document.cookie.split('token=')[1];	
	}
	
	$.ajax({
		beforeSend: function(xhr){
			xhr.setRequestHeader('accesstoken', token);
        },
        url: "/post"
    }).then(function(data) {
    	$.each(data.data, function(index, e) {
    		$('#posts').append(
    				'<div class="card mb-4"> <div class="card-body"> <h2 class="card-title">' + e.title 
    				+ '</h2> <p class="card-text">' + e.content 
    				+ '</p> <a href="/post/detail/' + e.id 
    				+ '" class="btn btn-primary">Read More &rarr;</a> </div> ' 
    				+ '<div class="card-footer text-muted"> Posted on ' + e.createdAt.split('T')[0]
    				+ ' by ' + e.user.username + getFollowInfo(e.user , e.id)
    				+ '</div> </div>');
    	});
       console.log(data);
    }, function(err) {
    	console.log(err.responseJSON);
    });
	
	function getFollowInfo(user , id) {
		if(user.isFollow) {// true : 팔로우 하고 있을때
			
			return ' <span class="unfollow" value="' + user.id + '" style="color:blue; cursor: pointer;"> Unfollow </span>';	
		} else if(user.isFollow == null ){
			return '';
		} else { // false : 팔로우 안하고 있을때

			return ' <span class="follow" value="' + user.id + '" style="color:blue; cursor: pointer;"> Follow </span>';
		}
		
	}
	
	
	if(token) {
		$.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader('accesstoken', token);
	        },
	        url: "/post/feed"
	    }).then(function(data) {
	    	$.each(data.data, function(index, e) {
	    		$('#myfeed').append(
	    				'<div class="card mb-4"> <div class="card-body"> <h2 class="card-title">' + e.title 
	    				+ '</h2> <p class="card-text">' + e.content 
	    				+ '</p> <a href="/post/detail/' + e.id 
	    				+ '" class="btn btn-primary">Read More &rarr;</a> </div> ' 
	    				+ '<div class="card-footer text-muted"> Posted on ' + e.createdAt.split('T')[0]
	    				+ ' by ' + e.user.username + getFollowInfo(e.user, e.id)
	    				+ '</div> </div>');
	    	});
	       console.log(data);
	    }, function(err) {
	    	console.log(err.responseJSON);
	    });
	}
	
	$('#save_post_btn').click(function(){
		var title = $('#create_title_text').val();
		var content = $('#create_content_text').val();
		
		console.log(title);
		console.log(content);
		
		var param = {
			title: title,
			content: content
		}
		
		$.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader('accesstoken', token);
	        },
	        url: "/post",
	        method: "POST",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {
	    	window.location.href = '/';
	    }, function(err) {
	    	alert(err.responseJSON);
	    });
	});
	
	$('#header_logout_btn').click(function(){
		document.cookie = "accesstoken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		window.location.href = '/';
	});
	
	$('body').on('click', '.follow', function($event) {
		console.log($(event.target).html());
		console.log($(this).html());
		console.log($(this).attr('value'));
		var userId = $(this).attr('value');
		
		var param = {
			followeeId: userId
		}
		
		$.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader('accesstoken', token);
	        },
	        url: "/follow",
	        method: "POST",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {
	    	window.location.reload(); 	    
	    }, function(err) {
	    	alert(err.responseJSON);
	    });
	});
	
	$('body').on('click', '.unfollow', function() {
		console.log("unfollow clicked!!!");
		
		var userId = $(this).attr('value');
		
		var param = {
			followeeId: userId
		}
		
		$.ajax({
			beforeSend: function(xhr){
				xhr.setRequestHeader('accesstoken', token);
	        },
	        url: "/follow",
	        method: "DELETE",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {
	    	window.location.reload();
	    }, function(err) {
	    	alert(err.responseJSON);
	    });
	});
	
});

        }
        */
    },
  }

</script>

<style>

</style>
