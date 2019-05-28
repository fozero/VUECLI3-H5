<template>
  <div class="mine-container">
    <div class="view-content">
      <div class="header">
        <div class="header-img">
          <img class="avatar" src="@/assets/avatar.png" alt="">
        </div>
        <div class="nickname">阿健</div>
      </div>
      <div class="list">
        <mt-cell
          class="list-item"
          title="我的信息"
          to="/myInfo"
          is-link>
        </mt-cell>
      </div>
      <div class="list">
        <mt-cell
          title="问题反馈"
          to="/feedback"
          is-link>
        </mt-cell>
        <mt-cell
          title="关于我们"
          to="/about"
          is-link>
        </mt-cell>
      </div>
      <div class="list logout" @click="logout">
        <mt-cell
          title="退出登录">
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'mine',
  components: {
    HelloWorld
  },
  data() {
    return {
      userMobile:'',
      dateCreated:'',
      wxNickname:'',
      userAvatar:''
    }
  },
  created(){
    console.log('home created')
    this.uid = store.get('uid')
    this.getUserInfo();
  },
  mounted(){
    console.log('mounted')
  },
  methods:{
    logout(){
      store.remove('uid')
      this.$router.push({path:'/login'})
    },
    getUserInfo(userid){
      this.$api.getUserInfo({
        id:this.uid
      }).then((res)=>{
        console.log('res',JSON.stringify(res))
        if(res.code==2000){
          this.userMobile = res.row.userMobile
          this.dateCreated = res.row.dateCreated
          this.wxNickname = res.row.wxNickname
          this.userAvatar = res.row.userAvatar
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mine-container{
  .view-content{
    bottom: 120px;
    padding-bottom: 80px;
  }
  .header{
    background: #25a0f5;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 50px;

    .header-img{
      width: 120px;
      height: 120px;
      border-radius: 120px;
      overflow: hidden;
      .avatar{
        width: 100%;
      }
    }
    .nickname{
      margin-left: 30px;
    }
  }
  .list{
    margin-top: 30px;
    &.logout{
      text-align: center;
    }
  }
}
</style>