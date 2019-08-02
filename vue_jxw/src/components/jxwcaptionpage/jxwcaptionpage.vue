<template>
  <div class="jxwcaptionpage">
      <div class="jxwcaptionpage_header">
        <mt-header>
          <mt-button slot="left" class="h3_item">推荐课程包</mt-button>
          <mt-button slot="right" @click="Morelistpage">
            <!-- <van-icon name="bars" /> -->
            <span class="page_more">更多 &gt;</span>
          </mt-button>
        </mt-header>
      </div>
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
     <div class="jxwcaptionpage_main">
       <div class="captionpage_context" >
          <div class="captionpage_item" v-for="(item,i) in imgArr" :key="'page'+i"  @click="toseller(item)">
              <img :src="'http://localhost:81/img/'+item.imgSrc" alt="i" />
              <div class="captionpage_des">{{item.des}}</div>
              <div class="captionpage_info">
                <span class="captionpage_info_context">
                  阶段 {{item.jieduan}} 课程 {{item.cls}}&nbsp;{{item.person}}人已学习
                </span>
                <span class="captionpage_info_price">&yen;{{item.price}}</span>
              </div>
          </div>
       </div>
     </div>
       </van-pull-refresh>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import BScroll from 'better-scroll'

export default {
  name: "jxwcaptionpage",
  data() {
    return {
   
      isLoading: false,
      msg: "jxwcaptionpage",
      imgArr:[
        {id:"cp01",imgSrc:"vrsjzxk.jpg",des:"2019【VR企业委培班】",jieduan:"4",cls:"13",person:"579",price:"12800"},
        {id:"cp02",imgSrc:"zgcydx.jpg",des:"中国石油大学【本】（北京）",jieduan:"0",cls:"12",person:"1000",price:"18800"},
        {id:"cp03",imgSrc:"vrznqzb.jpg",des:"【ACI心理咨询师】VR智能取证班",jieduan:"3",cls:"20",person:"1346",price:"5980"},
        {id:"cp04",imgSrc:"yyscb.jpg",des:"【ACI营养师】营养速成班",jieduan:"3",cls:"7",person:"1058",price:"5980"}
      ]
    }
  },
  mounted () {
    let wrapper = document.querySelector('.jxwcaptionpage_main')
    let scroll = new BScroll(wrapper,{click:true})
  },
  methods: {
    toseller(obj){
      console.log("to seller in page")
       this.$router.push({name:"seller",query:obj})
    },
    Morelistpage(){
      console.log("Morelist")
      this.$router.push("/jxmarket")
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        // this.count++;
      }, 500);
    }
  
  },
  components: {
    Header
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
.jxwcaptionpage{
  background-color: #fff;
  font-size: .16rem;
}
.jxwcaptionpage_header .mint-header{
  padding:.2rem .1rem .1rem;
  background-color: #fff;
  color: #000;
}
.page_more{
  font-size: .12rem;
  color: gray;
}
.jxwcaptionpage_main{
  padding: .1rem;
  height: 9rem;
  overflow: hidden;
}
.captionpage_context{
  height: 9.60rem;
}
.captionpage_item{
  padding: .05rem;
  border-radius: .08rem;
}
.captionpage_item .captionpage_des{
  padding: .1rem;
  font-size: .15rem;
}
.captionpage_item .captionpage_info{
  font-size: .13rem;
}
.captionpage_item .captionpage_info .captionpage_info_context{
  color: #808080;
}
.captionpage_item .captionpage_info .captionpage_info_price{
  float: right;
  color: #f00;
}
.captionpage_item img{
  width: 100%;
  border-radius: .08rem;
}

</style>