<template>
  <div class="jxwcaption">
      <div class="jxwcaption_header">
        <mt-header>
          <mt-button slot="left" class="h3_item">推荐课程</mt-button>
          <mt-button slot="right" @click="Menulistcls">
            <!-- <van-icon name="bars" /> -->
            <span class="cap_more">更多 &gt;</span>
          </mt-button>
        </mt-header>
      </div>
      <div class="jxwcaption_main">
        <div class="caption_main_context">
          <div class="jxwcaption_content" v-for="(item,index) in imgArr" :key="'icon'+index">
            <div class="jxwcaption_content_item" @click="toseller(item)">
                <img :src="'http://localhost:81/img/'+item.imgSrc" alt="index">
                <div>
                  <div class="caption_des">{{item.des}}</div>
                  <div class="caption_info clearfix">
                      <span class="caption_info_actical">
                        <i><img src="./person.png" alt="person"></i>
                        {{item.actical}}
                      </span>
                      <span class="caption_info_price">
                        &yen;{{item.price}}
                      </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
import BScroll from 'better-scroll'
export default {
  name: "jxwcaption",
  data() {
    return {
      msg: "jxwcaption",
      imgArr:[
        {id:"ca01",imgSrc:"szdw.jpg",des:"【限时0.1元抢购】食在端午",person:"24",price:"0.1"},
        {id:"ca02",imgSrc:"hdhc.jpg",des:"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕",person:"1177",price:"0.1"},
        {id:"ca03",imgSrc:"szdw.jpg",des:"【限时0.1元抢购】食在端午",person:"24",price:"0.1"},
        {id:"ca04",imgSrc:"hdhc.jpg",des:"【限时0.1元抢购】【花茶篇】喝对花茶，百病不怕",person:"1177",price:"0.1"}
      ]
    }
  },
  methods: {
    toseller(obj){
      //  this.$router.push({name:"seller",params:obj})
       this.$router.push({name:"seller",query:obj})
    },
    Menulistcls(){
      console.log("Menulistcls")
      this.$router.push("/more")
      // this.$router.push({name:"more",query:this.imgArr})
    }
  },
  mounted () {
    let wrapper = document.querySelector('.jxwcaption_main')
    let scroll = new BScroll(wrapper,{scrollX:true,click:true})
  },
  components: {
    // Header
  }
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
.jxwcaption{
  background-color: #fff;
  font-size: .16rem;
}
.jxwcaption_header .mint-header{
  padding:0.2rem 0.1rem 0.1rem;
  background-color: #fff;
  color: #000;
}
.cap_more{
  font-size: 12px;
  color: gray;
}
.jxwcaption_main{
  width: 100%;
  overflow: hidden;
}
.caption_main_context{
  width: 200%;
  display: flex;
  justify-content: flex-start;
  padding: 0.05rem;
}
.jxwcaption_content{
  width: 1.65rem;
  margin: 0 0.08rem;
  text-align: center;
}
.jxwcaption_content_item{
  width: 100%;
  font-size: 0.12rem;
}
.caption_des{
  width: 100%;
  padding: 0.06rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}

.jxwcaption_content_item>img{
  width: 100%;
  border-radius: 0.08rem;
}
.caption_info_actical{
  float: left;
}
.caption_info_price{
  color: #f00;
  float: right;
}
</style>