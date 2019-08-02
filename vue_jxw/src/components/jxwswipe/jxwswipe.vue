<template>
  <div class="jxwswipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(srcUrl,index) in imgArr" :key="'swipe'+index">
        <img :src="'http://127.0.0.1:81/img/'+srcUrl" :alt="index" class="swipeimg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: "jxwswipe",
  data() {
    return {
      msg: "jxwswipe",
      imgArr:["swipe1.jpg","swipe2.jpg","swipe3.jpg","swipe4.jpg","swipe5.jpg","swipe6.jpg","swipe7.jpg"]
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style>
.jxwswipe{
  height: 1rem;
  background-color: #e3e3e3;
}
.swipeimg{
  height: 100%;
  width: 100%;
}
.jxwswipe .mint-swipe-indicators{
  left:70%;
  -webkit-transform: translateX(-1%);
  transform: translateX(-1%);
}
.mint-swipe-indicator{
  background: #808080;
  opacity: 1;
  width: .06rem;
  height: .06rem;
}
.mint-swipe-indicator.is-active {
  width: .12rem;
  border-radius: .06rem;
  background: #ccc;
}

</style>