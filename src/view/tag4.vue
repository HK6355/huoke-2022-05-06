<template>
  <div class="main" @click="showMask = !showMask">
    <div class="flex box" v-show="showMask">
      <div>
        <img src="@/assets/resources/scape.png" alt="img" class="img" />
      </div>
      <div class="tip">请旋转手机</div>
    </div>
    <div class="mask" v-show="showMask"></div>
  </div>
</template>
<script>
export default {
  name: "Tag4View",
  data() {
    return {
      showMask: true,
    };
  },
  mounted() {},
};
</script>
<style scoped>
.main {
  width: 100%;
  overflow: hidden;
}
.mask {
  width: 100%;
  height: 100vh;
  position: fixed;
  opacity: 0.5;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
}
.box {
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100%;
  animation: rotate 2s infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.tip {
  color: white;
  font-size: 0.5rem;
  padding-top: 0.5rem;
}
</style>