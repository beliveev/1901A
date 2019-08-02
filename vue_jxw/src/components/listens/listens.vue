<template>
  <div class="listens">
	  <div class="listens_conte" v-if="loginfo">
		  <mt-header sticky title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <van-icon name="manager" @click="showPopup"/>
      </mt-button>
      </mt-header>
      <van-popup
      v-model="show"
      position="right"
      round
      :style="{ height: '70%',width:'40%',background:'cyan',paddingTop:'.3rem' }"
    >
    <router-link to="/" tag="div" class="usermenu">
      个人信息
    </router-link>
    <router-link to="/" tag="div" class="usermenu">
      APP首页
    </router-link>
    <router-link to="/tiku" tag="div" class="usermenu">
      智能题库
    </router-link>
    <router-link to="/jxmarket" tag="div" class="usermenu">
      简学商城
    </router-link>
    <router-link to="/listens" tag="div" class="usermenu">
      我的订单
    </router-link>
    <router-link to="/" tag="div" class="usermenu">
      用户安全
    </router-link>
    <router-link to="/inline" tag="div" class="usermenu">
      在线客服
    </router-link>
    <div class="usermenu">
      关于我们
    </div>
    <div class="usermenu" @click="toOut">
      退出
    </div>
    </van-popup>
      <div class="listens_main_container">
          <div class="listens_main">
            <div class="listens_main_text" v-if="context.length===0">
                  亲,您还没有选择如何课程哟!
            </div>
            <div class="listens_main_text" v-if="context.length>0">
              <!-- 内容{{context}} -->
            <div class="listen_shop_item" v-for="s in context" :key="'sh'+s.id">
              <h4 class="shop_head">
                <span @click="canterEvent(s.statu,s.id)">订单号:{{s.timer}}</span>
                <span class="shop_head_status" style="color:red;" v-if="s.statu===0">
                  待付款
                </span>
                <span class="shop_head_status" style="color:red;" v-else-if="s.statu===1">
                  已付款
                </span>
                <span class="shop_head_status" v-else>
                  已关闭
                </span>

              </h4>
              <div class="shop_context">
                <div class="shop_con_info clearfix">
                  <div class="shop_des">
                    课程:{{s.des}}
                  </div>
                  <div>
                  <span class="shop_cls">课时:{{s.cls?s.cls:"--"}}</span>
                  <span class="shop_jd">阶段:{{s.jieduan?s.jieduan:"1"}}</span>
                  </div>
                  <div>
                    费用:<font>&yen;</font><span class="shop_price">{{s.price}}</span>
                  </div>
                </div>
                <div class="shop_total" v-if="s.statu===0">
                  应付总额:<span><font>&yen;</font>{{Number(s.price).toFixed(2)}}</span>
                </div>
                <div class="shop_opera" v-if="s.statu===0">
                  <!-- <span class="topay" v-if="!s.statu">取消订单</span> -->
                  <span class="topay" @click="otpay(s)">立即付款</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import { Header,MessageBox } from "mint-ui";
import BScroll from "better-scroll";
// let username = sessionStorage.username;
export default {
  name: "listens",
  data() {
    return {
      show:false,
      canter:true,
      msg: "listens",
      loginfo:"",
      context:[]
    };
  },
  methods: {
    toOut(){
      console.log("del username")
      this.show = false;
      MessageBox.confirm('确定是否退出用户登录?').then(action => {
        sessionStorage.removeItem("username");
        this.$router.push('/')
        this.user = null;
      },err=>{return});
    },
    showPopup(){
      this.show = true;
    },
    otpay(obj){
      this.$router.push({name:"pay",params:obj})
    },
    goBack(){
       this.$router.back(-1);
    },
    Morelistpage(){
      console.log("more context")
    },
    tologin(){
      this.$router.push("/login")
    },
    toregis(){
      this.$router.push("/register")
    },
    canterEvent(sta,id){
      if(sta===0){
        this.$dialog.confirm({
          message: '请确认是否取消本次订单'
        }).then(() => {
          this.axios.post("/canterpay",{id:id}).then(res=>{
            // console.log("canter res:",res)
            if(res.data.success===0){
              this.axios.get("/getData").then(res=>{
              // console.log("lis getData:",res)
              this.context=[...res.data]
              // console.log("111111this.context:",this.context)
              })
            }
          })
        }).catch(() => {
          return;
        });
      }else if(sta===2){
        this.$dialog.confirm({
          message: '请确认是否删除订单'
        }).then(() => {
          this.axios.post("/delObj",{id:id}).then(res=>{
            // console.log("canter res:",res)
            if(res.data.success===0){
              this.axios.get("/getData").then(res=>{
              // console.log("lis getData:",res)
              this.context=[...res.data]
              // console.log("111111this.context:",this.context)
              })
            }
          })
        }).catch(() => {
          return;
        });
      }
    }
  },
  beforeMount () {
    this.loginfo = sessionStorage.username,
    this.axios.get("/getData").then(res=>{
      console.log("lis getData:",res)
      this.context=[...res.data]
      console.log("111111this.context:",this.context)
    })
  },
  mounted () {
    this.$nextTick(()=>{
      console.log("111111this.context:",this.context)
    })
    let wrapper = document.querySelector('.listens_main_container')
    let scroll = new BScroll(wrapper,{click:true})
  },
  components: {}
};
</script>

<style scoped>
.clearfix::after{
  display: block;
  height: 0;
  content: "";
  visibility: hidden;
  clear: both;
}
.listens{
  font-size: .16rem;
}
.usermenu{
  font-size: .2rem;
  background-color: cyan;
  opacity: 0.8;
  padding: .05rem .2rem;
  margin: .1rem 0;
  color: #000;
  white-space: nowrap;
}
.usermenu:hover{
  opacity: 1;
  text-decoration: underline;
}
.listens_box{
  text-align: center;
  margin-top: 60%;
}
.listen_log{
  color: gray;
  padding: .2rem 0 .1rem
}
.listen_login,.listen_regis{
  padding: 0 .3rem;
  margin: 0 .2rem;
}
.listens_main_container{
  height: 6.4rem;
  overflow: scroll;
}
.listens_main{
  height: 120%;
  padding: .1rem 0;
  /* background: cyan; */
}
.listen_shop_item{
  background-color: #f5f5f5;
  padding:0 .12rem;
  margin:0 0 .1rem ;
}
.shop_head{
  font-size: .14rem;
  font-weight: normal;
  margin: 0;
  padding: .1rem .05rem;
  border-bottom: solid 1px #e3e3e3;
}
.shop_head_status{
  float: right;
  color: gray;
}
.shop_con_info{
  /* background: gold; */
  padding: .08rem .16rem;
  font-size: .14rem;
}
.shop_con_info>div{
  padding: .05rem 0;
}
.shop_jd{
  float: right;
}
.shop_price{
  color: red;
}
.shop_total{
  border-top: solid 1px #e3e3e3;
  /* border-bottom: solid 1px #e3e3e3; */
  padding: .1rem 0;
  font-size: .18rem;
  text-align: right;
  /* background: cyan; */
}
.shop_total>span{
  margin-left: .2rem;
  color: red;
}
font{
  font-size: .14rem;
  margin-right: .03rem;
}
.shop_opera{
  text-align: right;
}
.topay{
  display: inline-block;
  padding: .08rem .3rem;
  margin: .04rem 0  .1rem;
  border-radius: .05rem;
  color: red;
  border: solid 1px red;
}
</style>