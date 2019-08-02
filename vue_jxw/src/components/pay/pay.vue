<template>
  <div class="pay">
    <!-- {{params}} -->
    <mt-header sticky title="简学支付">
      <router-link to="/listens" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="pay_main">
      <div class="pay_total">
        <label>订单金额</label>
        <span class="pay_price">
          <font>&yen;</font>
          {{params.price}}
        </span>
      </div>
      <div class="user_store">
        <label>现金帐户</label>
        <span class="user_money">
					<font>&yen;</font>
					{{storeMoney.toFixed(2)}}
				</span>
      </div>
      <div class="topay_money">
        <div class="pay_money">
          <label>还需支付</label>
          <span class="has_money">
						<font>&yen;</font>
						{{params.price-storeMoney}}
					</span>
        </div>
        <div class="pay_methods">
          <!-- <p>付款方式</p> -->
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell clickable @click="radio = '1'">
                <span class="payway">
                  <img src="./g9.png" alt> 微信支付
                </span>
                <van-radio slot="right-icon" name="1"/>
              </van-cell>
              <van-cell clickable @click="radio = '2'">
                <span class="payway">
                  <img src="./g11.png" alt> 支付宝
                </span>
                <van-radio slot="right-icon" name="2"/>
              </van-cell>
              <van-cell clickable @click="radio = '3'">
                <span class="payway">
                  <img src="./g3.png" alt>梅花支付
                </span>
                <van-radio slot="right-icon" name="3"/>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <!-- <mt-radio
							title="单选框列表"
							v-model="value"
							:options="['A', '选项B', '选项C']">
          </mt-radio>-->
					<div class="confilmbtn">

						<van-button type="primary" :disabled="btn" class="topaybtn" size="large" @click.stop="show = true">确认支付</van-button>
					</div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '60%'}">
				<!-- <van-field
					readonly
					clickable
					input-align="center"
					border
					:value="value"
					@touchstart.native.stop="show = true"
				/> -->

				<van-password-input
					:value="value"
					:length="6"
					:gutter="16"
					info="密码为6位数字"
					@focus="showKeyboard = true"
				/>

				<van-number-keyboard
					v-model="value"
					:show="show"
					theme="custom"
					:maxlength="6"
					extra-key="."
					close-button-text="确认"
					@close="completeEvent"
					@blur="show = false"
					@input="onInput"
					@delete="onDelete"
				/>
		</van-popup>

  </div>
</template>

<script>
// import { Header } from "mint-ui";
// import BScroll from "better-scroll";

export default {
  name: "pay",
  data() {
    return {
			show: false,
      value: '',
      radio: "1",
      storeMoney: 0,
      msg: "pay",
			params: JSON.parse(localStorage.payparams),
			btn:false
    };
  },
  methods: {
		completeEvent(){
			this.axios.post("/paysuccess",{id:this.params.id}).then(res=>{
				console.log("pay res:",res)
				if(res.data.success===0){
					this.$router.push({name:"listens",params:{id:"yes"}})
				}
			})
      this.value = ""
		},
		onInput(key) {
			// this.$toast(value);
			this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    goBack() {
      console.log("go back");
      this.$router.back(-1);
    }
  },
  created () {
		// let vh = document.getElementById("app").style.height
		// console.log("00000000000",vh)
		// document.querySelector(".pay").style.height = document.getElementById("app").style.height;
    // console.log("00000000this:", this);
    //  console.log("00000000this:",Object.keys(obj).length)
		let obj = this.$route.params;
		this.btn = this.$route.query.btn;
    if (Object.keys(obj).length > 0) {
			localStorage.payparams = JSON.stringify(this.$route.params);
			this.params = JSON.parse(localStorage.payparams)
    }
    // let wrapper = document.querySelector('.question-bank-wrap')
    // let scroll = new BScroll(wrapper)
	},
	mounted () {
		let paybtn = document.querySelector('.topaybtn')
		// paybtn.setAttribute("disabled",true)
		console.log("paybtn.disabled",paybtn.disabled)
	},
  components: {}
};
</script>

<style scoped>
.pay {
	background: #f5f5f5;
	/* height: 100%; */
  position: relative;
  font-size: .16rem;
	/* overflow: hidden; */
}
.van-cell {
  margin: .05rem 0;
  border-top: solid 1px #f5f5f5;
  border-bottom: solid 1px #f5f5f5;
}
.pay_total,
.user_store{
	background-color: #fff;
	margin: .16rem 0;
	padding: .16rem;
  font-size: .18rem;
	display: flex;
	justify-content: space-between;
}
.user_store{
	color: #808080;
}
.pay_price,
.has_money{
	color: red;
}
.pay_money{
	padding: .08rem .16rem;
  font-size: .18rem;
	display: flex;
	justify-content: space-between;
}
font{
	font-size: .12rem;
}
.pay_methods>p{
  padding:  0 .06rem;
	font-size: .18rem;
	color: #808080;
}
.payway {
  display: inline-block;
  height: .5rem;
  font-weight: 600;
}
.payway > img {
  height: 100%;
  vertical-align: middle;
}
.payway > i {
  margin-right: .26rem;
}
.confilmbtn{
	background-color: #fff;
	padding: 0 5%;
}
.van-password-input{
	margin: .6rem .6rem 0;
	/* background-color: red; */
}
.van-password-input li{
	background-color: #f5f5f5;
}
</style>