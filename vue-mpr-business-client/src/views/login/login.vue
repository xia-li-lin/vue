<template>
    <div class="container">
        <p>
            <span class="title">泛媒网</span>
            <span class="second-title">（商户端）</span>
        </p>
        <div class="login">
            <a-form :form="loginForm" @submit.stop="handleLoginSubmit">
                <header class="login-hd">用户登录</header>
                <a-form-item>
                    <a-input
                        placeholder="账户"
                        v-decorator="['username',
                            {rules:[
                                    {
                                        required:true,
                                        message:'请输入帐号'
                                    }
                                ]}
                            ]"
                    ></a-input>
                    <a-icon slot="prefix" type="user"/>
                </a-form-item>
                <a-form-item>
                    <a-input
                        type="password"
                        placeholder="密码"
                        v-decorator="['password',
                            {rules:[
                                {
                                    required:true,
                                    message:'请输入密码'
                                }
                            ]}
                        ]"
                    ></a-input>
                    <a-icon slot="prefix" type="lock"/>
                </a-form-item>
                <a-form-item :wrapperCol="{class:'valid-code-item'}">
                    <a-input
                        placeholder="验证码"
                        v-decorator="['captcha',{
                          rules:[{
                            required:true,
                            message:'请输入验证码'
                          },{
                            asyncValidator:validCodeSync
                          }]
                        }]"
                    ></a-input>
                    <img :src="validCodeUrl" @click="handleCaptchaClick"/>
                </a-form-item>
                <a-form-item :wrapperCol="{style:'text-align:left'}">
                    <a-checkbox v-decorator="['rember']">记住密码</a-checkbox>
                </a-form-item>
                <a-form-item :wrapperCol="{class:'submit-item'}">
                    <a-button
                        type="primary"
                        size="large"
                        :loading="loading"
                        html-type="submit"
                    >登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
const CAPTCHA_URL='/with-out-rcs/v1/genKaptcha?';
export default{
    name:"login",
    data(){
        return {
            validCodeUrl:CAPTCHA_URL+Math.random(),
            loading:false,
            loginForm:this.$form.createForm(this)
        }
    },
    methods:{
        handleCaptchaClick(){

        },
        handleLoginSubmit(){

        },
        validCodeSync(rule,value,callback){
          return Promise.resolve(null).then(()=>{
            callback()
          });
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 235px;
  height: 100%;
  background-color: #4974b5;
  .title {
    font-size: 36px;
    color: #fff;
    vertical-align: middle;
  }
  .second-title {
    font-size: 20px;
    color: #fff;
    vertical-align: middle;
  }
}
.login {
  width: 597px;
  height: 434px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 39px 126px 36px 105px;
  background-color: #fff;
  border-radius: 5px;
  .login-hd {
    padding-bottom: 36px;
    text-align: center;
    font-size: 26px;
    color: #4974b5;
  }
  .ant-input {
    height: 50px;
    font-size: 16px;
    border: solid 1px #dadbe0;
  }
  .ant-form-item-control {
    line-height: unset;
  }
  .ant-form-item {
    height: 50px;
    margin-bottom: 19px;
    .ant-checkbox-wrapper {
      color: #333;
    }
    .ant-form-explain {
      text-align: left;
    }
  }
  .valid-code-item {
    .ant-input {
      width: 243px;
    }
    img {
      width: 116px;
      height: 50px;
      margin-left: 7px;
      vertical-align: top;
    }
  }
  .submit-item {
    margin-top: -19px;
  }
  .ant-btn-lg {
    width: 170px;
    height: 40px;
    background-color: #4974b5;
    border-radius: 5px;
  }
}
</style>
