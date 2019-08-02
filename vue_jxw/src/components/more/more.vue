<template>
  <div class="more">
		<mt-header sticky title="试听课">
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header>
    <!-- {{msg}}
    {{query}} -->
		 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class="more_main"
		 v-infinite-scroll="loadMore"
     infinite-scroll-disabled="loading"
     infinite-scroll-distance="8"
		>
			<div class="more_item" v-for="item in arr" :key="item.id" @click="toseller(item)">
				 <!-- {{item}} -->
				 <div class="more_item_img" v-if="item.id">
					 <img :src="'http://127.0.0.1:81/img/'+item.imgSrc" alt="">
				 </div>
				 <div class="more_item_con"  v-if="item.id">
					 <div class="more_item_des">
						 {{item.des}}
					 </div>
					 <div class="more_item_info"  v-if="item.id">
						 <span><i class="el-icon-user-solid"></i>{{item.person}}</span>
						 <span class="price">&yen;{{item.price}}</span>
					 </div>
				 </div>
			</div>
		</div>
		</van-pull-refresh>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
import BScroll from 'better-scroll'
var arr = [
    {"id":"ca01","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca02","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca03","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca04","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca05","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca06","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca07","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca08","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca09","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca10","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca11","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca12","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca13","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca14","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"},
    {"id":"ca15","imgSrc":"szdw.jpg","des":"【限时0.1元抢购】食在端午","person":"25","price":"0.10","cls":""},
    {"id":"ca16","imgSrc":"hdhc.jpg","des":"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕","person":"1178","price":"0.10","cls":"1"}
]
export default {
  name: "more",
  data() {
    return {
		isLoading: false,
		loading: false,
    msg: "more",
		query:this.$route.query,
		arr:arr
    }
  },
 mounted () {
   console.log("00000000this:",this)
    // let wrapper = document.querySelector('.question-bank-wrap')
    // let scroll = new BScroll(wrapper)
	},
	methods: {
		toseller(obj){
      //  this.$router.push({name:"seller",params:obj})
       this.$router.push({name:"seller",query:obj})
    },
		onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        // this.count++;
      }, 500);
		},
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				let last = this.arr[this.arr.length - 1];
				for (let i = 1; i <= 1; i++) {
					// this.arr.push({des:"我是有底线的-----"});
					this.$toast({
						 message: '已经到底了!',
  					 position: 'bottom',
             duration: 1000
					})
				}
				this.loading = false;
			}, 2500);
		}
	},
  components: {
  }
};

</script>

<style scoped>
.more{
	height: 100%;
	overflow: auto;
	font-size: .16rem;
}
.more_main{
	/* overflow: scroll; */
	height: 100%;
}
.more_item{
	display: flex;
	justify-content: space-between;
}
.more_item_img{
	width: 30%;
	padding: .1rem;
}
.more_item_img>img{
	width: 1.2rem;
}
.more_item_con{
	width: 70%;
	padding:.1rem;
	display: flex;
	flex-direction: column;
	justify-content:space-between;
}
.price{
	color: red;
	float: right;
}

</style>