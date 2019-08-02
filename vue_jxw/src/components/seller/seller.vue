<template>
  <div class="seller">
    <!-- {{msg}} -->
		<mt-header sticky title="课程详情" >
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBack"></mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header>
	  <div class="seller_items" v-if="Object.keys(params).length">
       <!-- 1{{params}} -->
			 <div class="seller_item_con">
					<div class="seller_img">
						<img :src="'http://localhost:81/img/'+params.imgSrc" alt="">
					</div>
					<div class="seller_main">
						<van-tabs v-model="active">
							<van-tab title="详情">
								  <div class="seller_des">
										{{params.des}}
									</div>
									<div class="seller_person">
                    <span class="person_num">购买人数: {{params.person}}</span>
									</div>
									<div class="seller_price">
                    <span class="price_now">&yen;{{params.price}}</span>
										<span class="price_old">&yen;2.0</span>
									</div>
									<span class="seller_time">
										课程有效期至: 不限日期
									</span>
								  <van-panel title="课程介绍">
										<div class="seller_moreinfo">
											<img :src="'http://localhost:81/img/'+params.imgSrc" alt="">
										</div>
									</van-panel>
								  <van-panel title="教师介绍">
										<div class="seller_tech">
											<div class="tech_user">
											 <img :src='"http://localhost:81/img/"+params.imgSrc' alt="">
											 <span>李阳</span>
											</div>
											<div class="lis_info">
												<span class="lis_info_cls">开课:{{params.cls}}</span>
												<span>招生:{{params.person}}</span>
											</div>
										</div>
									</van-panel>
							</van-tab>
							<van-tab title="课程模块" v-if="Number(params.price)>1">课程模块</van-tab>
							<van-tab title="目录" v-if="Number(params.price)<1">
								<ul>
									<li class="cls_item" v-for="(v,i) in list" :key="'ci'+i">{{v}}</li>
								</ul>
							</van-tab>
						</van-tabs>
					</div>
          <van-submit-bar
						:price="Number(params.price)"
						button-text="提交订单"
						@submit="onSubmit(params)"
					></van-submit-bar>
				 </div>	
		</div>
	  <div class="seller_items" v-if="Object.keys(query).length">
       <!-- 2{{query}} -->
			 <div class="seller_item_con">
				  <!-- {{k}}={{t}} -->
					<!-- <span v-show="k=='id'?0:1">{{t}}</span> -->
					<div class="seller_img">
						<img :src="'http://localhost:81/img/'+query.imgSrc" alt="">
					</div>
					<div class="seller_main">
						<van-tabs v-model="active">
							<van-tab title="详情">
								<div class="seller_des">
										<!-- {{query.des}} -->
									</div>
									<div class="seller_person">
                    <span class="person_num">购买人数: {{query.person}}</span>
									</div>
									<div class="seller_price">
                    <span class="price_now">&yen;{{query.price}}</span>
										<span class="price_old">&yen;2.0</span>
									</div>
									<span class="seller_time">
										课程有效期至: 不限日期
									</span>
								  <van-panel title="课程介绍">
										<div class="seller_moreinfo">
											<img :src="'http://localhost:81/img/'+query.imgSrc" alt="">
										</div>
									</van-panel>
								  <van-panel title="教师介绍">
										<div class="seller_tech">
											<div class="tech_user">
											 <img :src='"http://localhost:81/img/"+query.imgSrc' alt="">
											 <span>李阳</span>
											</div>
											<div class="lis_info">
												<span class="lis_info_cls">开课:{{query.cls}}</span>
												<span>招生:{{query.person}}</span>
											</div>
										</div>
									</van-panel>
							</van-tab>
							<van-tab title="课程模块" v-if="Number(query.price)>1">
								<div class="cls_module">
									<div class="every_module" v-for="(num,index) in Number(query.cls)" :key="'cm'+index">{{num}}</div>
								</div>
							</van-tab>
							<van-tab title="目录" v-if="Number(query.price)<1">
								<ul>
									<li class="cls_item" v-for="(v,i) in list" :key="'ci'+i">{{v}}</li>
								</ul>
							</van-tab>
						</van-tabs>
					</div>
				 </div>	
				<van-submit-bar
					:price="Number(query.price+'00')"
					button-text="提交订单"
					@submit="onSubmit(query)"
				></van-submit-bar>
		</div>
		<div class="seller_foot">
			<van-dialog
				v-model="show"
				title="支付"
				show-cancel-button
			>
			<router-view class="paypage"></router-view>
			</van-dialog>
		</div>
  </div>
</template>

<script>

export default {
  name: "seller",
  data() {
    return {
		show: false,
		list:["1","2","3","4","5"],
		active: 0,
		price:this.$route.query.price,
		checked:false,
    msg: "seller",
    params:this.$route.params,
    query:this.$route.query,
    }
	},
	methods: {
		onSubmit(obj){
				console.log("submit seller")
				console.log("seller obj:",obj)
				// obj.timer = new Date().getTime();
				this.axios.post('/addPostObj',obj).then(res=>{
					console.log("res 0000000:",res)
					if(res.data.success===1){
						this.$toast("课程表中已经存在!");
						this.$router.push({name:"pay",params:obj,query:{btn:true}})
						// this.$router.push("/listens")
					}else if(res.data.success===0){
						this.show = true;
						this.$toast("成功加入课程表!");
						this.$router.push({name:"pay",params:obj})
					}
				})
				let carData = [];
				if(localStorage.shopData){
					carData = JSON.parse(localStorage.shopData)
				}
				carData.find(ele=>{
					return ele.id === obj.id? carData.push(obj):carData
				})

				localStorage.shopData = JSON.stringify(carData);
		},
		goBack() {
				console.log('go back');
			  this.$router.back(-1)
      }
	},
 mounted () {
   console.log("00000000this:",this)
    // let wrapper = document.querySelector('.question-bank-wrap')
    // let scroll = new BScroll(wrapper)
  },
  components: {
  }
};

</script>

<style scoped>
.seller{
	/* height: 100%; */
	/* overflow: hidden; */
	padding-bottom: .8rem;
	font-size: .16rem;
}
.seller_des{
	padding: .1rem;
}
.seller_person{
	font-size: .12rem;
	padding: 0 .2rem .2rem;
	color: gray;
}
.seller_price{
	padding: 0 .2rem .1rem;
}
.price_now{
	color: red;
}
.price_old{
	color: gray;
	text-decoration: line-through;
	font-size: .12rem;
}
.seller_time{
	display: inline-block;
	margin-left: .2rem;
	border: solid 1px red;
	color: red;
	padding: .06rem;
	font-size: .12rem;
}
.seller_img img{
  width: 100%;
}
.seller_moreinfo{
	padding: 0 .1rem;
}
.seller_moreinfo>img{
  width: 100%;
}
.van-submit-bar{
	/* position: sticky;
	bottom: 0; */
}
.seller_tech{
	display: flex;
	justify-content: space-between;
	padding: .1rem;
	align-items: center;
}
.tech_user>img{
	width: .26rem;
	height: .26rem;
	margin-right: .16rem;
	border-radius: 50%;
	vertical-align: middle;
}
.lis_info{
	color: gray;
	font-size: .12rem;
}
.lis_info_cls{
	display: inline-block;
	width: .5rem;
}
.cls_module{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

}
.every_module{
	width: 40%;
	height: .8rem;
	margin: .16rem 4%;
	border: solid 1px gray;
}
</style>