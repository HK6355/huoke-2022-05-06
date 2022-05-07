<template>
  <div>
    <DropDownComponent :list="list1"></DropDownComponent>
  </div>
</template>
<script>
import DropDownComponent from "@/components/dropDown.vue";
export default {
  name: "Tag7View",
  components: {
    DropDownComponent,
  },
  data() {
    return {
      list1: ["北京", "上海", "深圳", "郑州", "南阳"],
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.hr-solid {
  border: 0;

  border-top: 1px solid #d0d0d5;
}
</style>