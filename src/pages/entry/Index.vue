<template>
  <div class="home-container">
    <div class="view-content">
      首页
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'mint-ui';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      curChildId:''
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
  methods:{
    historyTrack(){
      this.$router.push({path: `/track/${this.curChildId}`})
    },
    addChild(){
      this.$router.push({path: '/childAdd'})
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container{
  .view-content{
    bottom: 120px;
  }
  .children{
    background: #25a0f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    .child-list{
      display: flex;
      color: #fff;
      overflow-x: scroll;
      margin-right: 10px;
      .child-item{
        text-align: center;
        padding: 20px 0;
        &:not(:first-child){
          margin-left: 30px;
        }
        .child-item-img{
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 80px;
          overflow: hidden;
          text-align: center;
          margin: 0 auto;
          .actived{
            position: absolute;
            left: 0;
            top: 0;
            color: #333;
            width: 80px;
            height: 80px;
            border-radius: 80px;
            padding-top: 10px;
            background: rgba(0,0,0,0.2);
            .icon-actived{
              font-size: 60px;
              font-weight: bold;
              color: #fff;
            }
          }
          .avatar{
            width: 100%;
            height: 100%;
          }
        }
        .name{
          width: 100px;
          text-align: center;
        }
      }
    }
    .add-btn{
      border: 1px solid #eee;
      background: #fff;
      padding: 10px;
      border-radius: 10px;
      width: 380px;
      text-align: center;
    }
  }
  .block{
    background: #fff;
    margin-top: 30px;
    padding: 30px;
    .title{
      color: #333;
      font-size: 36px;
    }
    .tip{
      color: #999;
      margin-top: 15px;
    }
    .open{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &.location-block{
      text-align: left;
      .title{
        display: flex;
        justify-content: space-between;
        .icon-right{
          font-size: 32px;
          font-weight: bold;
        }
      }
      .contont{
        display: flex;
        margin-top: 20px;
        .address-lef{
          &.icon-location{
            font-size: 32px;
            font-weight: bold;
          }
          .address-txt{
            font-size: 32px;
          }
          .tip{
            color: #999;
            font-size: 28px;
          }
          .time{
            color: #666;
            font-size: 28px;
          }
        }
      }
    }
    &.action-block{
      .title{
        display: flex;
        justify-content: space-between;
        .icon-right{
          font-size: 32px;
          font-weight: bold;
        }
      }
      .app-list{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        .app-item{
          width: 160px;
          height: 160px;
          line-height: 120px;
          background: #25a0f5;
          position: relative;
          border: 1px solid #eee;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          .name{
            color: #fff;
          }
          .categ{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background: #fff;
            color: #666;
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
            height: 60px;
            line-height: 60px;
            width: 170px;
            left: 50%;
            transform: translate(-50%);
          }
        }
      }
      .no-data{
        text-align: center;
        padding: 20px 0;
        color: #666;
        font-size: 28px;
      }
      .tip{
        color: #999;
        font-size: 28px;
      }
    }
    &.internet-block{
      .internet{
        .title{}
      }
      .tip{}
      .time-list{
        display: flex;
        color: #999;
        margin-top: 15px;
        flex-wrap: wrap;
        .time-item{
          // &:not(:first-child){
          //   margin-left: 30px;
          // }
          margin-right: 30px;
        }
        .setting-btn{
          color: #25a0f5;
          margin-left: 30px;
        }
      }
    }
    &.security-block{
      .security-on{
        .title{}
      }
      .tip{}
      .tongji{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .tongji-item{
          text-align: center;
          .title{}
          .time{}
        }
      }
    }
  }
  
}
</style>