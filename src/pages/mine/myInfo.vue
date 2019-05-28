<template>
  <div class="myInfo-container">
    <mt-cell title="手机号" v-model="userMobile"></mt-cell>
    <mt-cell title="昵称" v-model="wxNickname"></mt-cell>
    <mt-cell title="加入时间" v-model="dateCreated"></mt-cell>
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
      userMobile:'',
      dateCreated:'',
      wxNickname:''
    }
  },
  created(){
    console.log('created')
    this.uid = store.get('uid')
    this.getUserInfo();
  },
  mounted(){
    console.log('mounted')
  },
  methods:{
    getUserInfo(userid){
      this.$api.getUserInfo({
        id:this.uid
      }).then((res)=>{
        if(res.code==2000){
          this.userMobile = res.row.userMobile
          let _dateCreated = res.row.dateCreated
          this.dateCreated = this.$moment(_dateCreated).format("YYYY-MM-DD hh:mm:ss")
          this.wxNickname = res.row.wxNickname
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.myInfo-container{
}
</style>