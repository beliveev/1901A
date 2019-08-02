<template>
  <div class="inline">
    <!-- {{msg}} -->
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">给我们留言</mt-button>
      </router-link>
    </mt-header>
    <van-panel class="inline_panel">
      <div class="inline_title">
		  【简学教育】您好，我们的服务时间周一至周五9:00-12:00，
		  13:30-18:00。其他时间如需帮助，请留言，我们将尽快联系并解决您的问题。
		  ★参加21天活动★药师请关注“简学药师”公众号消防请关注“简学大智慧”公众号
		  回复“21”即可参加“21天激励刷题”，期待您的参与！如有活动疑问，
		  请添加专属微信客服：jianxue03
	  </div>
	  <div class="inline_radio">
		  <h4>分类 <sup style="color:red">*</sup></h4>
		  <div class="inline_radio_item">
			  <input type="radio" name="cls_item"> 建造----学员服务问题
		  </div>
		  <div class="inline_radio_item">
			  <input type="radio" name="cls_item"> 消防----学员服务问题
		  </div>
		  <div class="inline_radio_item">
			  <input type="radio" name="cls_item"> 课程知识问题
		  </div>
	  </div>
	  <div class="inline_input">
		  <h4>姓名 <sup style="color:red">*</sup></h4>
		  <div class="inline_ipt_name">
			  <van-field v-model="usnval" placeholder="请输入姓名" />
		  </div>
		  <h4>手机 <sup style="color:red">*</sup></h4>
		  <div class="inline_ipt_tel">
			  <van-field v-model="telval" placeholder="请输入手机号" />
		  </div>
		  <h4>邮箱 <sup style="color:red">*</sup></h4>
		  <div class="inline_ipt_mail">
			  <van-field v-model="maival" placeholder="请输入邮箱" />
		  </div>
		  <h4>留言内容 <sup style="color:red">*</sup></h4>
		  <div class="inline_ipt_problem">
			  <van-field v-model="proval" placeholder="请描述您的问题" />
		  </div>
		  
	  </div>
      <div slot="footer">
		<van-button type="primary" size="large" @click="cnotify">提交</van-button>
      </div>
    </van-panel>
  </div>
</template>

<script>
export default {
  name: "inline",
  data() {
    return {
	  usnval:"",
	  telval:"",
	  maival:"",
	  proval:"",
      msg: "inline"
    };
  },
  methods: {
	 cnotify() {
		 this.$toast('提交成功');
	 }
  },
  components: {
  }
};
</script>

<style scoped>
.inline{
	font-size: .16rem;
}
.inline_title{
	padding:.4rem .14rem .1rem;
	line-height: 1.2;
	background-color: #f0f0f0;
}
.inline_radio>div{
	padding: .14rem;
}
.inline h4{
	margin: 0;
	border: none;
	padding: .14rem;
	background-color: #f0f0f0;
	font-weight: 400;
}
</style>