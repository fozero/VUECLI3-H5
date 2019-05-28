<template>
  <div class="stat-container">
    <div class="view-content">
      统计
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import F2 from '@antv/f2'
export default {
  name: 'statistics',
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
  watch:{
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
.stat-container{
  .view-content{
    padding-bottom: 30px;
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
  }
  .stat{
    background: #fff;
    margin-top: 30px;
    padding: 30px;
    .stat-nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      .stat-option{
        display: flex;
        align-items: center;
        .option-title{
          
        }
        .option-type{
          position: relative;
          margin-left: 10px;
          .options{
            opacity: 0;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 220px;
            height: 78px;
          }
        }
        .option-type-show{
          .cover{
            border: 1px solid #eee;
            width: 220px;
            height: 78px;
            line-height: 78px;
            padding: 0 10px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            .angle{
              font-size: 32px;
            }
          }
        }
      }
      .stat-time{
        .time-item{
          border: none;
          background: none;
          padding: 5px 30px;
          &.actived{
            background: #25a0f5;
            border: 1px solid #eee;
            border-radius: 10px;
            color: #fff;
          }
        }
      }
    }
    .stat-charts{
      width: 100%;
    }
  }
  .app-use-title{
    background: #fff;
    padding: 30px;
    border-bottom: 1px solid #eee;
    margin-top: 30px;
  }
  .app-use-list{
    background: #fff;
    .app-item{
      display: flex;
      padding: 30px;
      align-items: center;
      .app-item-img{
        width: 90px;
        height: 90px;
        border-radius: 10px;
        overflow: hidden;
        .app-icon{
          width: 100%;
          height: 100%;
        }
      }
      .app-name{
        margin-left: 10px;
        .name{}
        .time{
          margin-top: 5px;
        }
      }
    }
  }
  .list-empty{
    text-align: center;
    margin-top: 10%;
  }
}
</style>