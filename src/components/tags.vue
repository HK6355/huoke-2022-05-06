<template>
  <div class="flex tags">
    <div
      class="tag"
      v-for="(item, index) in tags"
      :key="index"
      @click="chooseTag(index)"
    >
      <div :class="{ active: item.active }">任务{{ index + 3 }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TagsComponent",
  data() {
    return {
      tags: [
        {
          active: true,
        },
        {
          active: false,
        },
        {
          active: false,
        },
        {
          active: false,
        },
        {
          active: false,
        },
        {
          active: false,
        },
      ],
    };
  },
  methods: {
    chooseTag(index) {
      let _this = this;
      for (let item of _this.tags) {
        item.active = false;
      }
      _this.tags[index].active = true;
      this.$router.push("/tag" + (index + 3));
    },
  },
};
</script>
<style scoped>
.tags {
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
.tag {
  font-size: 0.5rem;
  width: 33%;
  height: 0.75rem;
  line-height: 0.75rem;
}
.active {
  color: red;
}
</style>