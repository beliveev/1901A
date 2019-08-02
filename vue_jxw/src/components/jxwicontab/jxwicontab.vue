<template>
  <div class="jxwicontab">
    <div class="contab_context">
      <div class="iconimg" v-for="(imgUrl,index) in imgArr" :key="'icon'+index"   @click="tocontab(imgUrl.id)">
        <img :src="'http://127.0.0.1:81/img/'+imgUrl.imgSrc" :alt="'icon'" >
        <div class="imgtitle">{{imgUrl.imgAlt}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "jxwswipe",
  data() {
    return {
      msg: "jxwicontab",
      imgArr:[
        {id:"01",imgSrc:"tiku.png",imgAlt:"智能题库"},
        {id:"02",imgSrc:"classtable.png",imgAlt:"课程表"},
        {id:"03",imgSrc:"kechengbao.png",imgAlt:"简学商城"},
        {id:"04",imgSrc:"inline.png",imgAlt:"教师在线"}]
    }
  },
  mounted () {
    
  },
  methods: {
    tocontab(id){
       console.log("click id:",id)
       let obj = {
         "01":"/tiku",
         "02":"/listens",
         "03":"/jxmarket",
         "04":"/inline",
       };
       this.$router.push(obj[id])
    }
  },
  components: {
    
  }
};
</script>

<style scoped>
.jxwicontab{
  font-size: .16rem;
}
.contab_context{
  height: .8rem;
  padding: .2rem .1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
}
.contab_context .iconimg{
  box-sizing: border-box;
  width: .8rem;
  height: .8rem;
  text-align: center;
  font-size: .12rem;
}
.contab_context .iconimg>img{
    width: .45rem;
    margin-bottom: .1rem;
 }

</style>