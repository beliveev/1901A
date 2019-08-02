<template>
  <div class="jxwfooter">
    <!-- {{msg}} -->
    <div class="modulefooter">
      <div class="modulefooter-main">
        <p class="telephone">
          联系电话：
          <span>4001618511</span>
        </p>
        <!--页尾设置结束-->
        <div class="modulefooter-copyright">
          <p>Copyright@ 2014-2019北京简学教育科技有限公司</p>
          <p>版权所有京ICP备18000154号-1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from "mint-ui";
// Vue.component(Header.name, Header);

export default {
  name: "jxwfooter",
  data() {
    return {
      msg: "jxwfooter"
    };
  },
  methods: {
    Menulist() {
      console.log("click menu");
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.jxwfooter {
  font-size: .12rem;
  text-align: center;
}
.jxwfooter p{
  margin: .05rem;
  color: #808080;
}
</style>