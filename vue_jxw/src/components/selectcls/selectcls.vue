<template>
  <div class="selectcls">
    <mt-header fixed title="班级">
      <router-link to="/jxmarket" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @click-nav="onClickNav"
      @click-item="onClickItem"
    />
  </div>
</template>

<script>
export default {
  name: "selectcls",
  data() {
    return {
      msg: "selectcls",
      items: [
        {
          text: "显示所有",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            },
            {
              text: "杭州2",
              id: 3
            },
            {
              text: "杭州3",
              id: 4
            }
          ]
        },
        {
          // 导航名称
          text: "所有城市1",
          // 该导航下所有的可选项
          children: [

             {
              text: "杭州",
              id: 1
            },

          ]
        },
        {
          // 导航名称
          text: "所有城市2",
          // 该导航下所有的可选项
          children: [
            {
              text: "杭州2",
              id: 2
            },

          ]
        },
        {
          // 导航名称
          text: "所有城市3",
          // 该导航下所有的可选项
          children: [
            {
              text: "杭州2",
              id: 3
            },
          ]
        },
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: null
    };
  },
  methods: {
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
    }
  },
  components: {}
};
</script>

<style scoped>
.selectcls{
	padding-top: .4rem;
}
</style>