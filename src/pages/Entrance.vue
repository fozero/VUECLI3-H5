<template>
  <div class="container">
    <router-view/>
    <div class="bottom-nav">
      <div class="navs">
        <router-link to="/home" class="nav" :class="{'actived':$route.name === 'home'}">
          <span class="icon icon-index"></span>
          <span class="lable">首页</span>
        </router-link>
        <router-link to="/statistics" class="nav" :class="{'actived':$route.name === 'statistics'}">
          <span class="icon icon-statistics"></span>
          <span class="lable">统计</span>
        </router-link>
        <router-link to="/mine" class="nav" :class="{'actived':$route.name === 'mine'}">
          <span class="icon icon-mine"></span>
          <span class="lable">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'entrance',
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  },
  created() {
    console.log('entrance created')
  },
  mounted() {
    console.log('$route.name',this.$route.name)
  },
  computed:{
    ...mapGetters(['getUserInfo'])
  },
  methods:{
    // mapActions辅助函数  自动映射为 this.$store.dispatch('user_info/setUserInfo', userinfo)
    ...mapActions(['setUserInfo'])
  }
}
</script>
<style lang="scss" scoped>
.container{
  // font-size: 200px;
  .bottom-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 120px;
    background: #fff;
    border-top: 1px solid #eee;
    .navs{
      display: flex;
      justify-content: space-around;
      height: 120px;
      align-items: center;
      .nav{
        display: flex;
        flex-direction: column;
        color: #999;
        font-size: 28px;
         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &.actived{
          color: #333;
          .icon{
            &.icon-index{
              background: url('../assets/icon/ic_home_selected.png') no-repeat;
              background-size: 50px auto;
            }
            &.icon-statistics{
              background: url('../assets/icon/ic_find_selected.png');
              background-size: 50px auto;
            }
            &.icon-mine{
              background: url('../assets/icon/ic_mine_selected.png');
              background-size: 50px auto;
            }
          }
        }
        .icon{
          width: 50px;
          height: 50px;
          &.icon-index{
            background: url('../assets/icon/ic_home.png') no-repeat;
            background-size: 50px auto;
          }
          &.icon-statistics{
            background: url('../assets/icon/ic_find.png');
            background-size: 50px auto;
          }
          &.icon-mine{
            background: url('../assets/icon/ic_mine.png');
            background-size: 50px auto;
          }
        }
        .lable{
          margin-top: 5px;
        }
      }
    }
  }
}
</style>

