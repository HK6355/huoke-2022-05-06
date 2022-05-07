<template>
  <div class="main">
    <div>{{ getData }}</div>
    <div class="hr-solid"></div>
    <div>{{ postData }}</div>
  </div>
</template>
<script>
import Ajax from "@/utils/js/ajax";
export default {
  name: "Tag3View",
  data() {
    return {
      baseUrl:
        "https://www.fastmock.site/mock/5bc311088c61f7a1ccc6f5d09802f6cd/vini_pc",
      getData: "",
      postData: "",
    };
  },
  methods: {
    AjaxTest() {
      console.log("111");
      let _this = this;
      Ajax.get(_this.baseUrl + "/api/getData", "", function (res) {
        console.log(res);
        _this.getData = res;
      });
      Ajax.post(_this.baseUrl + "/api/testData", "", function (res) {
        console.log(res);
        _this.postData = res;
      });
    },
  },
  mounted() {
    this.AjaxTest();
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  overflow: hidden;
  font-size: 0.5rem;
}
.hr-solid {
  border: 0;
  border-top: 1px solid #d0d0d5;
}
</style>