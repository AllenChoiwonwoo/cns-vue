<template>
  <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input v-model="data.username" type="text" id="login_username" class="form-control" placeholder="Username *" value="" />
                        </div>
                        <div class="form-group">
                            <input v-model="data.password" type="password" id="login_password" class="form-control" placeholder="Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input @click="doLogin" type="button" id="login_btn" class="btnSubmit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            data: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        doLogin(){
            console.log("doLogin" , this.data);
            
            // var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
            // var thisfilefullname = document.URL;
            var vm = this;
            this.axios.post('/auth', this.data)
        .then(function(response) {
          console.log(response.data.data);
          vm.$cookies.set('accesstoken',response.data.data.token);
          console.log(vm.$cookies.get('accesstoken'));
            vm.$router.push('/home/AllPost');
        })
        .catch(function(error) {
          console.log(error);
        });
            
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

.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 35%;
}
.login-form-1{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #333;
}
.login-form-2{
    padding: 5%;
    background: #0062cc;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #0062cc;
}
.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
.login-form-2 .ForgetPwd{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}
.login-form-1 .ForgetPwd{
    color: #0062cc;
    font-weight: 600;
    text-decoration: none;
}
</style>