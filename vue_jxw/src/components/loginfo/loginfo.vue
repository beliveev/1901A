<template>
  <div class="loginfo">
	    <div class="loginfo_login">
      <mt-header fixed title="登录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header>
       <div class="loginfo_login_con">
            <div class="loginfo_ctrlheight">
                <div class="loginfo_box">
                    <img src="./sjpic_22.png" alt="" width="150" height="150">
                    <p class="loginfo_log">亲，您还没有登录呢！</p>
                    <p>登录后在这里可以和大家一起学习，一起进步</p>
                    <div class="button">
                        <!-- <button class="listen_login">登录</button> -->
                        <van-button @click="tologin" class="loginfo_login" plain hairline type="primary">登录</van-button>
                        <!-- <button class="listen_regis">注册</button> -->
                        <van-button @click="toregis" class="loginfo_regis" plain hairline type="primary">注册</van-button>
                        
                    </div>
                </div>
            </div>
       </div>
    </div>
  </div>
</template>

<script>
import { Header } from "mint-ui";
// import BScroll from "better-scroll";
// let username = sessionStorage.username;
export default {
  name: "listens",
  data() {
    return {
      msg: "loginfo",
      // loginfo:"",
      context:[]
    };
  },
  methods: {
    Morelistpage(){
      console.log("more context")
    },
    tologin(){
      this.$router.push("/login")
    },
    toregis(){
      this.$router.push("/register")
    },
  },
  mounted () {
    this.loginfo = sessionStorage.username
  },
  components: {}
};
</script>

<style scoped>
.loginfo{
  /* padding: 20px; */
  /* background: cyan; */
}
.loginfo_ctrlheight{
  width: 100%;
  background: #fff;
}
.loginfo_login_con{
  width: 100%;
  font-size: .12rem;
}
.loginfo_box{
  text-align: center;
  margin-top: 60%;
}
.loginfo_log{
  color: gray;
  padding: .2rem 0 0;
  
}
.loginfo_login,.loginfo_regis{
  height: .32rem;
  line-height: .32rem;
  padding: 0 .24rem;
  margin: .2rem .16rem;
}
.loginfo_regis{
  border-color: gray;
  color: gray; 
}
</style>