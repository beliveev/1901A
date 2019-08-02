<template>
  <div class="jxmarket">
    <!-- {{msg}} -->
    <mt-header fixed title="科学商城">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">
        <van-icon name="manager" v-if="username" @click="showPopup"/>
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
    <div class="market_main">
      <!-- <div class="market_tabs"> -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :title="'全部商品'" @opened="toselectcls"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
      </van-dropdown-menu>

      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="market_main_context">
          <div class="listeninfo">
            <div class="lisitems" v-for="lis in arrlis" :key="lis.id" @click="toseller(lis)">
              <div class="lisimg">
                <img :src="'http://127.0.0.1:81/img/'+lis.imgSrc" :alt="lis.id">
              </div>
              <div class="lisname">{{lis.des}}</div>
              <div class="lisinfo">
                <img src="./person.png" alt="person">
                <span class="lis_person">{{lis.person}}</span>
                <span class="lis_mod">
                  模块{{lis.mod}}
                  |
                  课程{{lis.cls}}
                </span>
                <span class="lis_price">&yen;{{lis.price}}</span>
              </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem,MessageBox } from "mint-ui";
import sort from "./sort";
export default {
  name: "jxmarket",
  data() {
    return {
      username:sessionStorage.username,
      show:false,
      isLoading: false,
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [
        { text: "排序方式", value: "a" },
        { text: "按热度", value: "b" },
        { text: "降价排序", value: "c" },
        { text: "升价排序", value: "d" }
      ],
      active: "tab-container1",
      msg: "jxmarket",
      selected: "",
      sortkey: [
        { id: "a1", name: "综合" },
        { id: "a2", name: "按热度" },
        { id: "a3", name: "价格升序" },
        { id: "a4", name: "价格降序" }
      ],
      arrlis: [
        {
          id: "mk01",
          imgSrc: "3dznbz.jpg",
          des: "2019【3D智能保障班】",
          person: "5380",
          mod: "3",
          cls: "14",
          price: "9980"
        },
        {
          id: "mk02",
          imgSrc: "account.jpg",
          des: "【博雅通识】初级会计资格证",
          person: "3567",
          mod: "0",
          cls: "1",
          price: "108"
        },
        {
          id: "mk03",
          imgSrc: "yjxfgcs.jpg",
          des: "2019【无忧精品直通班】",
          person: "2308",
          mod: "3",
          cls: "10",
          price: "5980"
        },
        {
          id: "mk04",
          imgSrc: "dszn.jpg",
          des: "2019【大师智能集训班】",
          person: "2068",
          mod: "4",
          cls: "17",
          price: "23800"
        },
        {
          id: "mk05",
          imgSrc: "msbr.png",
          des: "20190802【名师百日通关班】",
          person: "1363",
          mod: "3",
          cls: "10",
          price: "11800"
        },
        {
          id: "mk06",
          imgSrc: "vrznqzb.jpg",
          des: "【ACI心理咨询师】VR智能取证班",
          person: "1359",
          mod: "3",
          cls: "14",
          price: "5980"
        },
        {
          id: "mk07",
          imgSrc: "hyywx.jpg",
          des: "【汉语言文学专科】公益班",
          person: "1291",
          mod: "2",
          cls: "14",
          price: "2980"
        },
        {
          id: "mk08",
          imgSrc: "xzgl.jpg",
          des: "【行政管理专科】公益班",
          person: "1226",
          mod: "2",
          cls: "15",
          price: "2980"
        },
        {
          id: "mk09",
          imgSrc: "xfxl3d.jpg",
          des: "2019【消防学历3D双证班】",
          person: "1149",
          mod: "3",
          cls: "14",
          price: "9980"
        },
        {
          id: "mk10",
          imgSrc: "rlzy.png",
          des: "【人力资源管理专科】公益班",
          person: "1142",
          mod: "2",
          cls: "11",
          price: "2980"
        },
        {
          id: "mk11",
          imgSrc: "vipqy.jpg",
          des: "【二级建造师-建筑】VIP签约双证班",
          person: "1098",
          mod: "3",
          cls: "15",
          price: "7980"
        }
      ]
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
    showPopup() {
      this.show = true;
    },
    toseller(obj) {
      this.$router.push({ name: "seller", query: obj });
    },
    toselectcls() {
      // e.preventDefault();
      console.log("toselectcls");
      this.$router.push("/selectcls");
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  components: {
    TabContainer,
    TabContainerItem
  }
};
</script>

<style scoped>
.jxmarket {
  padding-top: .4rem;
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
.market_tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e3e3e3;
}
.market_tabs > div {
  padding: .12rem 0;
  font-size: .14rem;
}
.market_main_context {
  position: relative;
}
.market_main_context .sort {
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 1.2rem;
  border: solid 1px red;
  background-color: rgba(255, 255, 255, 0.7);
}

.market_main_context .listeninfo {
  padding: 0 .1rem;
}
.market_main_context .listeninfo .lisitems {
  text-align: center;
  padding: 0 0 .12rem;
  margin: .12rem 0;
  border: solid 1px #e3e3e3;
  background-color: #f5f5f5;
  border-radius: .05rem;
}
.market_main_context .listeninfo .lisitems .lisname {
  padding: .06rem 0;
  font-size: .14rem;
}
.market_main_context .listeninfo .lisitems .lisinfo {
  font-size: .14rem;
  color: gray;
}
.market_main_context .listeninfo .lisitems .lisinfo span {
  margin-right: .16rem;
}
.lis_price {
  color: red;
}
.market_main_context .lisimg img {
  width: 100%;
  border-radius: .05rem;
}
</style>