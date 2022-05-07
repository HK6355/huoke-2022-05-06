<template>
  <div class="content">
    <div class="head">
      <div class="white"></div>
      <div class="flex tagsBox">
        <div class="left"></div>
        <div class="flex tags">
          <div class="tag" v-for="(tag, index) in tags" :key="index">
            <div :class="{ active: tag.active }">
              {{ tag.name }}
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="logoBox">
        <img src="@/assets/resources/logo.png" alt="" class="logo" />
        <img src="@/assets/resources/list.png" alt="" class="list" />
      </div>
    </div>
    <div class="flex title">
      <div class="titleInner">
        <div class="whiteLine"></div>
        <div class="titleName">HOME</div>
      </div>
    </div>
    <div class="mainBody">
      <div class="flex roles">
        <div class="role" v-for="role in roles" :key="role.id">
          <div
            class="roleImgBox"
            v-for="(roleImg, index) in role.img"
            :key="index"
            :class="{
              smallImg: role.img.length > 1,
            }"
          >
            <img src="@/assets/resources/img-1.jpg" alt="" class="roleImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tag6View",
  data() {
    return {
      tags: [
        { name: "HOME", link: "link1", active: true },
        { name: "NEWS", link: "link2", active: false },
        { name: "WEAPONS", link: "link3", active: false },
        { name: "MAP", link: "link4", active: false },
        { name: "CHARACTERS", link: "link5", active: false },
        { name: "WALLPAPER", link: "link6", active: false },
      ],
      roles: [
        {
          id: 1,
          img: ["src"],
        },
        {
          id: 2,
          img: ["src"],
        },
        {
          id: 3,
          img: ["src"],
        },
        {
          id: 4,
          img: ["src"],
        },
        {
          id: 5,
          img: ["src"],
        },
        {
          id: 6,
          img: ["src", "src", "src", "src"],
        },
      ],
    };
  },
  methods: {
    getNavData() {
      let _this = this;
      this.$api.nav
        .getNavTags()
        .then((res) => {
          if (res.code == 200) {
            _this.tags = res.data.tags;
            _this.getNavDetail(res.data.tags[0].tagId);
          } else {
            console.log(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNavDetail(id) {
      let _this = this;
      let params = {
        tagId: id,
      };
      this.$api.nav
        .getNavDetail(params)
        .then((res) => {
          if (res.code == 200) {
            _this.roles = res.data;
          } else {
            console.log(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getToDetail(id) {
      this.$router.push("/detail?id=" + id);
    },
  },
  mounted() {
    this.getNavData();
  },
};
</script>
<style scoped>
@media screen and (min-width: 1000px) {
  .content {
    width: 100%;
    overflow: hidden;
    background: black;
  }
  .head {
    width: 100%;
    height: 2rem;
    background: url("@/assets/resources/bg.png") no-repeat;
    background-size: 100% 100%;
    font-size: 0.1rem;
    color: white;
  }
  .active {
    color: orange;
  }
  .white {
    width: 100%;
    height: 0.2rem;
  }
  .tagsBox {
    line-height: 0.1rem;
    width: 94%;
    box-shadow: 0px 0px 10px white;
    border-radius: 10px;
    text-align: center;
    margin: 0 3%;
  }
  .tags {
    width: 100%;
    padding: 0.2rem 0;
  }
  .tag {
    padding: 0 0.1rem;
  }
  .left {
    width: 0.1rem;
    background: orange;
    border-radius: 10px 0 0 10px;
    padding: 0.2rem 0;
  }
  .right {
    width: 0.1rem;
    background: orange;
    border-radius: 0 10px 10px 0;
    padding: 0.2rem 0;
  }
  .logoBox {
    display: flex;
    height: 1.3rem;
    align-items: center;
    padding-left: 20%;
  }
  .logo {
    height: 0.5rem;
  }
  .list {
    display: none;
  }
  .title {
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 0.5rem;
    padding: 0.2rem 0;
  }
  .titleInner {
    width: 100%;
    height: 0.5rem;
    position: relative;
  }
  .whiteLine {
    width: 100%;
    height: 0.01rem;
    background: white;
    position: absolute;
    top: 50%;
    transform: translate(0, -0.005rem);
  }
  .titleName {
    margin: 0.1rem auto;
    font-size: 0.1rem;
    color: white;
    text-align: center;
    width: 1.5rem;
    padding: 0.1rem;
    background: url("@/assets/resources/titleBg.png") no-repeat;
    background-size: 100% 100%;
  }
  .mainBody {
    background: black;
  }
  .roles {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.2rem;
  }
  .role {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.2rem;
    width: 25%;
  }
  .roleImgBox {
    width: 100%;
  }
  .roleImg {
    width: 100%;
  }
  .smallImg {
    width: 45%;
  }
  .leftImg {
    margin-right: 2%;
  }
  .rightImg {
    margin-left: 2%;
  }
}

@media screen and (min-width: 640px) and (max-width: 1000px) {
  .content {
    width: 100%;
    background: black;
    overflow: hidden;
  }
  .head {
  }
  .white {
    display: none;
  }
  .tagsBox {
    display: none;
  }
  .logoBox {
    height: 0.5rem;
    display: flex;
    border-left: 10px orange solid;
    border-radius: 10px 0 0 10px;
    justify-content: space-between;
  }
  .logo {
    height: 100%;
    margin-left: 0.1rem;
  }
  .list {
  }
  .title {
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 0.5rem;
    padding: 0.2rem 0;
  }
  .titleInner {
    width: 100%;
    height: 0.5rem;
    position: relative;
  }
  .whiteLine {
    width: 100%;
    height: 0.01rem;
    background: white;
    position: absolute;
    top: 50%;
    transform: translate(0, -0.005rem);
  }
  .titleName {
    margin: 0.1rem auto;
    font-size: 0.1rem;
    color: white;
    text-align: center;
    width: 1.5rem;
    padding: 0.1rem;
    background: url("@/assets/resources/titleBg.png") no-repeat;
    background-size: 100% 100%;
  }
  .roles {
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.1rem;
  }
  .role {
    display: flex;
    width: 40%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .roleImgBox {
    width: 100%;
  }
  .roleImg {
    width: 100%;
  }
  .smallImg {
    width: 45%;
  }
}
/*适应移动端 宽度小于640*/

@media screen and (max-width: 639px) {
  .content {
    width: 100%;
    background: black;
    overflow: hidden;
  }
  .head {
  }
  .white {
    display: none;
  }
  .tagsBox {
    display: none;
  }
  .logoBox {
    height: 0.5rem;
    display: flex;
    border-left: 10px orange solid;
    border-radius: 10px 0 0 10px;
    justify-content: space-between;
  }
  .logo {
    height: 100%;
    margin-left: 0.1rem;
  }
  .list {
  }
  .title {
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 0.5rem;
    padding: 0.2rem 0;
  }
  .titleInner {
    width: 100%;
    height: 0.5rem;
    position: relative;
  }
  .whiteLine {
    display: none;
  }
  .titleName {
    margin: 0.1rem auto;
    font-size: 0.1rem;
    color: white;
    text-align: center;
    width: 1.5rem;
    padding: 0.1rem;
    background: url("@/assets/resources/titleBg.png") no-repeat;
    background-size: 100% 100%;
  }
  .mainBody {
    padding: 1rem 0 1.5rem 0;
  }
  .roles {
    flex-wrap: wrap;
    justify-content: center;
  }
  .role {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .roleImgBox {
    width: 100%;
  }
  .roleImg {
    width: 100%;
  }
  .smallImg {
    width: 45%;
  }
}
</style>