<template>
  <div>
    <section class="wrap">
      <div class="searchIpt clearFix">
        <div class="clearFix">
          <input
            type="text"
            class="keyWord"
            :value="val"
            @click="selectShow = !selectShow"
          />
          <!-- <input type="button" :value="btn" /> -->
          <!-- <span></span> -->
        </div>
        <DownListComponent
          v-show="selectShow"
          :list="list"
          v-on:value1="selectValueHandle"
        ></DownListComponent>
      </div>
    </section>
  </div>
</template>
<script>
import DownListComponent from "@/components/downList.vue";
export default {
  name: "DropDownComponent",
  components: {
    DownListComponent,
  },
  props: ["btn", "list"],
  data() {
    return {
      selectShow: false,
      val: "",
    };
  },
  methods: {
    selectValueHandle(value) {
      console.log("value", value);
      this.val = value.toString();
    },
  },
};
</script>
<style scoped>
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
input {
  outline: 0;
  cursor: pointer;
}
.wrap {
  width: 3.48rem;
  padding: 1rem 0.7rem 0.5rem;
  margin: 0.5rem;
  box-shadow: 2px 2px 10px #6789ad;
}
.clearFix {
  text-align: center;
}
.searchIpt {
  position: relative;
  width: 3.36rem;
  border: 1px solid #3736ae;
  padding: 0.05rem;
  border-radius: 0.24rem;
  background: #e4e4fe;
}
.searchIpt input {
  line-height: 34px;
  border-radius: 18px;
}
.searchIpt input:nth-of-type(1) {
  width: 2.28rem;
  padding-left: 40px;
  border: 1px solid #c9c9d5;
  background: #d9d9e2;
}
.searchIpt input:nth-of-type(1):focus {
  background: #fff;
  border-color: #fd635e;
}
.list {
  margin-top: 9px;
  font-size: 0.2rem;
}
.list li {
  margin: 3px 0;
  color: #333;
  line-height: 30px;
  padding-left: 16px;
  width: 270px;
  box-sizing: border-box;
  border-radius: 14px;
}
.list li.active,
.list li:hover {
  color: #fff;
  background: #fd635e;
  cursor: pointer;
}
</style>