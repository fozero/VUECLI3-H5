<template>
  <div class="containner">
    <div class="logo-img">
      <img class="logo" src="@/assets/logo.jpeg" alt="">
    </div>
    <div class="login-form">
      <div class="login-field">
        <input class="field-input" type="tel" placeholder="手机号" maxlength="11" v-model="phone">
      </div>
      <div class="login-field">
        <input class="field-input field-verify" type="tel" placeholder="验证码" maxlength="4" v-model="verifyCode">
        <div class="field-verify-btn" @click="getVerifyCode">获取验证码</div>
      </div>
    </div>
    <mt-button class="login-btn" size="large" type="primary" @click="doLogin">登录</mt-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters,mapActions} from 'vuex'
import {getUrlParameter} from '@/utils/common.js'
import { Toast,MessageBox } from 'mint-ui';
export default {
  name: 'login',
  components: {
    HelloWorld
  },
  data() {
    return {
      phone:'',
      verifyCode:'',
      wxcode:'',
      wxstate:''
    }
  },
  created() {
    this.weixinAuth()
  },
  mounted() {
  },
  computed:{
    ...mapGetters(['getUserInfo'])
  },
  methods:{
    // mapActions辅助函数  自动映射为 this.$store.dispatch('user_info/setUserInfo', userinfo)
    ...mapActions(['setUserInfo']),
    weixinAuth(){
      let uid = store.get('uid')
      if(!uid){
        this.wxcode = getUrlParameter(location.href, 'code')
        this.wxstate = getUrlParameter(location.href, 'state')
        if(!this.wxcode){
          location.href = `${process.env.VUE_APP_API_URL}/api/v1/getwxusercode?callback=${location.href}`
        }
      }else{
        this.$router.push({path:'/home'})
      }
    },
    doLogin(){
      if(!this.phone){
        return Toast('请输入手机号');
      }
      if(!this.verifyCode){
        return Toast('请填写验证码');
      }
      this.$api.wxUserLogin({
        phone:this.phone,
        validateCode:this.verifyCode,
        code:this.wxcode,
        state:this.wxstate
      }).then((res)=>{
        console.log(res)
        if(res.code==2000){
          store.set('uid',res.row.id)
          this.$router.push({path: '/home'})
        }else{
          Toast(res.msg)
        }
      })

      // test
      // store.set('uid',1)
      // this.$router.push({path: '/home'})
    },
    getVerifyCode(){
      if(!this.phone){
        return alert('请输入手机号');
      }
      this.$api.sendVerifyCode({
        mobile:this.phone,
        type:0//type 0注册  1找回密码  9免发短信
      }).then((res)=>{
        console.log(res)
        if(res.code==2000){
          Toast('验证码已发送');
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.containner{
  padding-top: 100px;
  background: #fff;
  width: 100%;
  height: 1334px;
  box-sizing: border-box;
  .logo-img{
    width: 320px;
    height: 320px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 100%;
    .logo{
      width: 100%;
      height: 100%;
    }
  }
  .login-form{
    width: 600px;
    margin: 50px auto 0;
    background: #fff;
    .login-field{
      position: relative;
      display: flex;
      align-items: center;
      // margin-bottom: 60px;
      height: 96px;
      line-height: 96px;
      border-bottom: 1px solid #eee;
      .field-input{
        width: 360px;
        border: none;
        &.field-verify{
          width: 320px;
        }
        margin-left: 20px;
      }
      .field-verify-btn{
        margin-left: 20px;
        border: 1px solid #eee;
        border-radius: 10px;
        // width: 90px;
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #eee;
      }
    }
  }
  .login-btn{
    width: 580px;
    margin: 60px auto 0;
  }
}
</style>

