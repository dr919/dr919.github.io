<template>
  <div id="app">
    <div class="top">
      <div class="nav">
        <router-link :class="[bar, {bgc:bgc}]" to="/">HOME</router-link>
        <router-link :class="[bar, {bgc:bgc}]" to="skill">skill</router-link>
        <router-link :class="[bar, {bgc:bgc}]" to="project">project</router-link>
        <router-link :class="[bar, {bgc:bgc}]" to="others">others</router-link>
      </div>
      <transition name="popsi_nav">
        <ul class="boxs_icon " :class="{cur_active:popshow}" @click="activeClick">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </transition>
    </div>
    <div class="content">
      <router-view :bgc="bgc" />
    </div>
    <transition name="popsi">
      <index-pop  :cur_navlist="popshow" @my-event="getpophide"></index-pop>
    </transition>


  </div>
</template>

<script>
// dr三石 - 个人博客 -创建于2018/06/01
import mainSkeleton from "./main.skeleton.vue";
import IndexPop from "./components/pages/IndexPop.vue";
export default {
  name: "App",
  data() {
    return {
      init: false,
      bgc: false,
      bar: "bar",
      cur_active: false,
      popshow: false,
      cur_navlist: false
    };
  },
  // computed:{
  //   cur_navlist(){
  //     return this.cur_navlist;
  //   }
  // },
  methods: {
    activeClick: function() {
      // this.cur_active = !this.cur_active;
      this.popshow = !this.popshow;
      console.log(this.cur_navlist);
    },
    getpophide: function(){
      console.log(222)
      console.log(this.popshow);
      this.popshow= !this.popshow
    }
  },
  components: {
    mainSkeleton,
    IndexPop
  },
  template: "<mainSkeleton/>"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0;
  text-decoration: none;
}
hmtl {
  width: 100%;
  height: 100%;
  font-size: 100px;
  min-width: 3.8rem;
}
body {
  width: 100%;
  height: 100%;
  background: #000;
  min-width: 3.8rem;
  /* min-height: 7.5rem; */
}
#app {
  width: 100%;
  min-width: 3.8rem;
  min-height: 5rem;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 0.16rem;
  line-height: 24px;
}
h1 {
  font-size: 0.22rem;
  margin-top: 20px;
}
#app .bar {
  padding: 10px 0.2rem;
  margin: 0px 10px -50px;
  color: #fff;
  text-decoration: none;
  font-size: 0.14rem;
  text-transform: uppercase;
}
.nav a:hover {
  border-bottom: 2px solid #fff;
}
.top {
  height: 55px;
}
.bgc {
  background: #ccc;
}
.nav {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.14rem;
    bottom: 0;
}


.boxs_icon {
  width: 18px;
  height: 30px;
  position: absolute;
  top: .20rem;
  left: .24rem;
  transition: all 0.2s;
  z-index: 999;
}
.boxs_icon li {
  transition: all 0.2s;
  float: left;
  width: 4px;
  height: 4px;
  background: #fff;
  /* flex: 1; */
  margin: 1px;
}

.boxs_icon li:nth-child(1) {
  transform: translate(-3px, -3px);
}
.boxs_icon li:nth-child(2) {
  transform: translate(0, -3px);
}
.boxs_icon li:nth-child(3) {
  transform: translate(3px, -3px);
}
.boxs_icon li:nth-child(4) {
  transform: translate(-3px, 0);
}
/* .boxs_icon li:nth-child(5) {
           transform: translate(-3px,-3px)
         } */
.boxs_icon li:nth-child(6) {
  transform: translate(3px, 0);
}
.boxs_icon li:nth-child(7) {
  transform: translate(-3px, 3px);
}
.boxs_icon li:nth-child(8) {
  transform: translate(0, 3px);
}
.boxs_icon li:nth-child(9) {
  transform: translate(3px, 3px);
}
.cur_active {
  width: 18px;
}
.cur_active li {
  background: #715699;
  transform: translate(0, 0) !important;
}

.popsi-enter-active,
.popsi-leave-active {
  transition: all 1s;
}
.popsi-enter,
.popsi-leave-active {
  /* display: none; */
  opacity: 0;
}
.content {
  position: relative;
  height: 100%;
}

@media screen and (max-width: 375px) {
  .nav {
    display: none;
  }
  .boxs_icon {
    top: 20px;
  }
}
@media screen and (min-width: 375px) and (max-width: 450px) {
  .nav {
    float: right;
  }
  #app .bar {
    font-size: 14px;
  }
}
</style>
