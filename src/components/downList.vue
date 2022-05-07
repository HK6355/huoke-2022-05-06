<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in newList" :key="index">
        <div class="flex listItem">
          <input
            type="checkbox"
            :name="item.data"
            v-model="checked"
            :value="item.data"
            @click="handleClick"
          />
          <div>{{ item.data }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DownListComponent",
  props: ["list"],
  data() {
    return {
      newList: [],
      checked: [],
      lastcheckval: [],
    };
  },
  methods: {
    searchValueHandle() {
      let list = this.newList;
      let res = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].checked == true) {
          res.push(list[i]);
        }
      }
      console.log(this.checked);
      this.$emit("value1", res);
    },
    handleClick: function (ev) {
      var that = this;
      setTimeout(function () {
        console.log(
          "this.hobby2",
          ev.target.checked,
          that.checked.length,
          that.checked
        );
        if (!ev.target.checked) {
          if (that.checked.length == 1) {
            that.lastcheckval = that.checked[0];
          }
          if (that.checked.length == 0) {
            that.checked.push(that.lastcheckval);
          }
        }
        that.$emit("value1", that.checked);
      }, 1);
    },
  },
  mounted() {
    this.newList = this.list.map((item) => {
      let obj = {
        data: item,
        checked: false,
      };
      return obj;
    });
  },
};
</script>
<style scoped>
.list {
  font-size: 0.2rem;
  list-style: none;
}
</style>