<template>
  <div class="feedback-container">
    <div class="tip">
      温馨提示，设置允许上网时间段后，孩子可以上网。
    </div>
    <div class="filed-label">请填写建议的内容</div>
    <div class="item-filed">
      <textarea v-model="content"></textarea>
    </div>
    <div class="item-filed">
      <input type="text" placeholder="请填写你的联系电话" v-model="mobile">
    </div>
    <mt-button class="sava-btn" size="large" type="primary" @click="doFeedback">提交</mt-button>
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
      uid:'',
      content:'',
      mobile:''
    }
  },
  created(){
    console.log('home created')
    this.uid = store.get('uid');
  },
  mounted(){
    console.log('mounted')
  },
  methods:{
    doFeedback(){
      let content = this.content
      let mobile = this.mobile
      if(!content || !mobile){
        return Toast('内容不能为空')
      }
      this.$api.feedback({
        id:this.uid,
        content:content,
        mobile:mobile
      }).then(res=>{
        if(res.code==2000){
          Toast('提交成功，感谢你的反馈')
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.feedback-container{
  .tip{
    background: #eee;
    padding: 30px;
    font-size: 28px;
  }
  .filed-label{
    width: 580px;
    margin: 30px auto 0;
  }
  .item-filed{
    width: 580px;
    margin: 0 auto;
    textarea{
      width: 580px;
      height: 200px;
      margin-top: 30px;
      padding: 18px 10px;
      box-sizing: border-box;
      border: none;
    }
    input{
      width: 580px;
      margin-top: 30px;
      padding: 18px 10px;
      box-sizing: border-box;
      border: none;
    }
  }
  .sava-btn{
    width: 600px;
    margin: 60px auto 0;
  }
}
</style>