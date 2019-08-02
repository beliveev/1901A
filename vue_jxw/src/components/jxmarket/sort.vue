<template>
  <div class="sort">
    <div class="selectaera">
      <div>综合</div>
      <div>按热度</div>
      <div>价格升序</div>
      <div>价格降序</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "sort",
  data() {
    return {
      msg: "sort",
      imgArr:["swipe1.jpg","swipe2.jpg","swipe3.jpg","swipe4.jpg","swipe5.jpg","swipe6.jpg","swipe7.jpg"]
    }
  },
  components: {
    
  }
};
</script>

<style scoped>
.selectaera{
  background-color: rgba(255, 255, 255, .7);
}

</style>