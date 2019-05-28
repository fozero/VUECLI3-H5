<template>
  <div class="about-container">
    <div class="logo-img">
      <img class="logo" src="../../assets/logo.jpeg" alt="">
    </div>
    <div class="title">fozero@126.com</div>
    <p class="intro">关于我们关于我们关于我们关于我们关于我们关于我们关于
      我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  },
  created(){
    console.log('home created')
    // let userid = localStorage.CURREN_USER_ID;
  },
  mounted(){
    console.log('mounted')
  },
  methods:{
    getUserInfo(userid){
      this.$api.getUserInfo({
        id:userid
      }).then((res)=>{
        console.log('res',res.data.row.userName)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.about-container{
  text-align: center;
  background: #fff;
  padding: 100px 0;
  .logo-img{
    width: 300px;
    height: 300px;
    margin: 0 auto;
    .logo{
      width: 100%;
      height: 100%;
    }
  }
  .title{
    font-size: 50px;
    margin-top: 30px;
  }
  .intro{
    text-align: left;
    padding: 30px;
    line-height: 50px;
    font-size: 28px;
  }
}
</style>