<template>
  <!-- 登录注册 组件 -->
  <div class="apps">
    <mt-header :title="showbtn?'登录':'注册'">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" v-if="showbtn">注册</mt-button>
      <mt-button slot="right" v-if="!showbtn" @click="tologin">登录</mt-button>
    </mt-header>
    <div class="login" >
      <div class="welcome">
        <img src="../../../static/images/welcome.png">
      </div>
      <div class="login-form">
        <div class="login-inp">
          <label>用户名</label>
          <input
            type="text"
            placeholder="请输入用户名"
            v-model="username"
            @change="rules(username,'user')"
          >
        </div>
        <div class="login-inp">
          <label>密码</label>
          <input
            type="password"
            placeholder="请输入密码"
            v-model="password"
            @change="rules(password,'pass')"
          >
        </div>
        <div class="login-inp">
          <a href="#" @click.prevent="submit(username,password)">{{btnName}}</a>
        </div>
      </div>
      <div class="login-txt">
        <a href="#" @click.prevent="redirects('/register')">立即注册</a>|
        <a href="#" @click.prevent="tip()">忘记密码？</a>
      </div>
    </div>
    <div style="text-align:center;"></div>
  </div>
</template>

<script>
// import { mapState, mapActions, mapGetters } from "vuex";
import { Header,Toast,MessageBox } from "mint-ui";

export default {
  inject:['reload'],
  name: "login",
  components: {},
  data() {
    return {
      username: null,
      password: null,
      btnName: "立即登录",
      title:"登录",
      showbtn:true
    };
  },
  computed: {
    // ...mapState({
    //   src: state => state.home.lunbo.src,
    //   activeTitle: state => state.active.home.activeTitle,
    //   days: state => state.active.home.days,
    //   broadcast: state => state.home.broadcast,
    //   shop_info: state => state.home.shop_info,
    //   my_info: state => state.home.my_info,
    //   show: state => state.home.show
    // }),
    // ...mapGetters(["bc_notshow", "search_show"])
  },
  methods: {
    tologin(){
      this.btnName = "立即登录";
      this.$router.push('/login');
      this.showbtn=!this.showbtn;
      console.log("click tologin")
    },
    // ...mapActions(["searchA", "infoAction"]),
    //用户名和密码验证
    rules(v, choose) {
      if (choose == "user") {
        let username = v.trim();
        let uPattern = /^[a-zA-Z0-9_]{4,12}$/g;

        if (username.split("").length > 12) {
          return false;
        }

        // if (!uPattern.test(username)) {
        //   Toast("请输入4到16位(字母,数字,下划线)");
        // }
        console.log(username, v.trim());
      } else if (choose == "pass") {
        let password = v.trim();
        //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        // let pPattern = /^.*(?=.{6,})*$/;
        if (!pPattern.test(password)) {
          Toast("密码强度较弱o(╥﹏╥)o");
        } else {
          Toast("密码强度 安全^_^");
        }
      }
    },
    submit(username, password) {
      let data = {
        username,
        password
      };

      if (data.username == null || data.password == null) {
        Toast("用户名和密码不能为空 o(╥﹏╥)o");
      } else {
        this.axios.post("/login", data).then(res => {
          if (res.status == 200) {
            console.log("res.data:",res.data);
            if(res.data.success===0){
              sessionStorage.token = res.data.token;
              sessionStorage.username = res.data.username;
              this.$router.push('/');
            }
            if(res.data.success===2){
              this.reload()
              Toast("用户名和密码输入错误");
            }
          }
        });
      }

      if (
        this.$route.name == "login" &&
        data.username !== null &&
        data.password !== null
      ) {
        this.btnName = "立即登录";
        this.showbtn = true;
        this.redirects("/");
        Toast("登录成功");
      } else if (this.$route.name == "register") {
        this.btnName = "立即注册";
        this.showbtn = false;
        this.redirects("/login");
      }
      console.log(username, password);
    },
    redirects(url) {
      this.$router.push(url);
      if (this.$route.name == "login") {
        this.btnName = "立即登录";
        this.showbtn = true;
      } else if (this.$route.name == "register") {
        this.btnName = "立即注册";
        this.showbtn = false;
      }
    },
    tip() {
      // Toast("该功能正在维护 o(╥﹏╥)o");
      MessageBox.prompt('请输入您的用户名').then(({ value, action }) => {
        if(action==="confirm"){
          console.log("value:",value,"action:",action)
          this.axios.post("/getPwd",{username:value}).then(res=>{
            console.log("getPwd res:",res)
          })
        }
      }).catch(err=>{return});
    }
  },
  watch: {},
  directives: {},
  beforeCreate() {},
  created() {}
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/login.less");
</style>

