<template>
    <div class="bg-light">

            <div class="container-sm p-3">
                <div class="py-5 text-center">
                    <img class="d-block mx-auto mb-4" src="../assets/codepresso-online-logo.png" 
                    alt="codepresso.kr" width="auto" height="150px">
                    <h2>Sign Up</h2>
                    <p class="lead">
                        가입하기 버튼을 클릭하면 CodePresso의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. 
                        CodePresso로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다..
                    </p>
                </div>
                <!-- <div class="container"></div> -->
                <div class="row">
                    <div class="col-md-12">
                        <hr class="mb-4">
                        <!-- <h4 class="mb-3">Billing address</h4> -->
                        <form class="needs-validation" novalidate="">
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="홍길동" value=""
                                        required="" v-model="signUpData.username">
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="email">Email </label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com"
                                v-model="signUpData.email">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="birth">Birth ( CP.SHOP has age policy that can join older when 7 years old )</label>
                                <input type="date" class="form-control" id="birth" placeholder="2020-01-12"
                                 v-model="signUpData.birth">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="*******"
                                 v-model="signUpData.password">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                                
                            </div>
                            <div class="mb-3">
                                <label for="passwordConfirm">Password Confirm </label>
                                <input type="password" class="form-control" id="passwordConfirm" placeholder="*******"
                                 v-model="signUpData.passwordConfirm" @blur="this.passwordConfirm">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                                <p v-if="this.isNotPasswordConfirmed" class="alert alert-danger">
                                    Password is NOT correct
                                </p>
                            </div>

                            <h4 class="mb-3">Gender</h4>

                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="man" name="paymentMethod" type="radio" class="custom-control-input"
                                        checked="" required="" value=1 v-model="signUpData.gender">
                                    <label class="custom-control-label" for="man">Man</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="woman" name="paymentMethod" type="radio" class="custom-control-input"
                                        required=""  value=0 v-model="signUpData.gender">
                                    <label class="custom-control-label" for="woman">Woman</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="othor" name="paymentMethod" type="radio" class="custom-control-input"
                                        required="" value=2 v-model="signUpData.gender">
                                    <label class="custom-control-label" for="other">other</label>
                                </div>
                            </div>
                            <hr class="mb-4">
                            <button class="btn btn-primary btn-lg btn-block" type="button" v-on:click="this.submit">
                                Sign Up</button>
                        </form>
                    </div>
                </div>
            <!-- <button @click="this.checkAge">checkAge</button> -->
            </div>
    </div>
</template>

<script>
    /*
    이메일 중복확인,
    비밀번호&확인 일치여부 확인
    나이 확인 ( 7세 이하는 밴)
    모든폼 입력 확인

    화원가입 시키는 메서드
    */
//    import axios from 'axios'
    export default {
        data() {
            return {
                signUpData: {
                    email: null,
                    username: null,
                    birth: null,
                    password: null,
                    passwordConfirm: null,
                    gender: 0,
                    // token: "",

                },
                ResultPasswordConfirm : "",
                isNotPasswordConfirmed : false,
                isNoBlank : false
            }
        },
        methods: {
            // 이메일 중복확인
            emailDuplicationCheck(){
                var url = 'http://localhost:8080/user/emailConfirm';
                    var data= {
                        email : this.signUpData.email
                    }
                    this.axios.get(url, {params : data})
                    .then(function(response){
                        console.log("성공 ",response);
                        
                    })
                     .catch(function(error){
                        console.log(error);
                        
                    })
            },
            // 모든폼 입력 확인
            checkBlankInput(){
                console.log(this.signUpData);
                if (!this.signUpData.email) {
                    console.log("!this.signUpData.email = false");
                    return false;
                }
                if (!this.signUpData.username) {
                    console.log("!this.signUpData.username = false");
                    return false;
                }
                if (!this.signUpData.birth) {
                    console.log("!this.signUpData.birth = false");
                    return false;
                }
                if (!this.signUpData.password) {
                    console.log("!this.signUpData.password = false");
                    return false;
                }
                if (!this.signUpData.passwordConfirm) {
                    console.log("!this.signUpData.passwordConfirm = false");
                    return false;
                }
                this.isNoBlank = true;
                console.log("this.isNoBlank =",this.isNoBlank);
                return this.isNoBlank;
                
            },
            signUp(){

            },
            checkAge(){
                var date = new Date();                
                date.setFullYear(date.getFullYear() -7);//회원가입 가능한 생일 limit

                if(date > new Date(this.signUpData.birth)){
 //yyyy-MM-dd 를  Date(Mon Apr 06 2020 19:56:17 GMT+0900 (대한민국 표준시))형식으로 바꿔서 비교한다. 
                    console.log("회원가입 가능합니다.");
                    return true;
                }else{
                    console.log("회원가입 불가능합니다.");
                    alert("회원가입이 불가능한 나이입니다. (7세 이상 이용가능)");
                    return false;
                }

            },
            submit(){
                if(!this.checkAge()){
                    return;
                }
                if(this.checkBlankInput()){
                    var myrouter = this.$router
                    console.log("signUpData = ", this.signUpData);
                    // var vm = this;
                    var url = '/user';
                    var data= {
                        username : this.signUpData.email,
                        password : this.signUpData.password
                    }
                    this.axios.post(url, data)
                    .then(function(response){
                        if(response.data.code > 299){
                            alert("회원가입에 실패하였습니다.");
                            return;
                        }
                        console.log("성공 ",response);
                        myrouter.push('/login' ); 
                        return;
                    })
                     .catch(function(error){
                        console.log(error);
                        alert("회원가입에 실패하였습니다.");
                    })
                    this.isNoBlank = false;
                    //메서드 안에서 라우터 이동 (위치,이름, pathname 을 입력해 이동가능)
                    // 해당하는 pathname을 입력하여 이동
                    
                }else{
                    alert(" 입력하지 않은 정보가 있습니다.");
                }
                
                
            },
            passwordConfirm(){
                var vm = this
                if(vm.signUpData.password != vm.signUpData.passwordConfirm){
                    // ResultPpasswordConfirm = "비밀번호가 일치하지 않습니다.";
                    vm.isNotPasswordConfirmed = true;
                }else{
                    vm.isNotPasswordConfirmed = false;
                }
                console.log("p = ",vm.signUpData.password,", pc= ",vm.signUpData.passwordConfirm);
                console.log("isNotPasswordConfirmed = "+vm.isNotPasswordConfirmed);
            },
        },
        // 
        computed: {
            // (비밀번호 확인에서 커서가 사라지면) 비밀번호 중복확인
            
            // // 7세 이하인지 구분 ,
            // checkAge(){

            // },
            
        },

    }
</script>

<style>

</style>