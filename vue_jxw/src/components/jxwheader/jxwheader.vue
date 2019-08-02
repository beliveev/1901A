<template>
  <div class="jxwheader">
    <mt-header title="简学网">
      <router-link to="/" slot="left">
        <mt-button>
          <!-- <van-icon name="wap-home" size="20"/> -->
          <i class="el-icon-s-home"></i>
        </mt-button>
      </router-link>
      <mt-button slot="right" v-if="!user" @click="tologin">
        <!-- <van-icon name="contact" size="20"/> -->
          <i class="el-icon-user"></i>
        </mt-button>
      <mt-button slot="right" v-if="user" @click="touser">
        <span class="head_user" @click="showPopup" >{{user}}</span>
        <span class="head_out" @click="toOut">退出</span>
        </mt-button>
      <!-- <mt-button slot="right" v-if="user" @click="toback">退出</mt-button> -->
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
  </div>
</template>

<script>
import { Header } from "mint-ui";
import { MessageBox } from 'mint-ui';
export default {
  name: "jxwheader",
  data() {
    return {
      show:false,
      msg: "jxwheader",
      user:null,
      tokencontain:false
    };
  },
  mounted () {
    if(sessionStorage.token){
      this.tokencontain = true;
      this.user = sessionStorage.username;
    }else{
      this.tokencontain = false;
    }
    // this.axios.post("/login", data).then(res => {
    //       if (res.status == 200) {
    //         console.log("res.data:",res.data);
    //         sessionStorage.token = res.data.token;
    //         if(res.data.success===0){
    //           this.$router.push('/');
    //         }
    //       }
    //   });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    toOut(){
      console.log("del username")
        this.show = false;
      MessageBox.confirm('确定是否退出用户登录?').then(action => {
        sessionStorage.removeItem("username");
        this.$router.push('/')
        this.user = null;
      },err=>{return});
    },
    touser(){
      console.log("click touser");
    },
    tologin() {
      console.log("click tologin");
      this.$router.push('/login')
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.jxwheader {
  position: relative;
  font-size: .16rem;
  background-color: aqua;
  color: #fff;
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
.el-icon-s-home,
.el-icon-user{
  font-size: .2rem;
}
.head_out{
  color: gray;
  font-size: .12rem;
}
.jxwheader_title {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: .22rem;
}
.loginbtn {
  position: absolute;
  top: .16rem;
  right: .2rem;
  font-size: .16rem;
}
</style>