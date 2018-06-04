<template>
  <div class="indexPop" :class="{no_pop:!cur_navlist}">
    <div class="f_nav">
      <transition-group class="navlist" :class="{cur_navlist:cur_navlist}" tag="div" v-for="(popdata,index) in popdatas">
        <div class="icon_box" :key="index+'a'" @click="pophide">
          <a :href="popdata.url" v-if="!popdata.urlShow">
            <span class="indexIcons" :style="{backgroundImage:'url('+img+')'}"></span>
          </a>
          <router-link :to="popdata.url" v-if="popdata.urlShow">
            <span class="indexIcons" :style="{backgroundImage:'url('+img+')'}"></span>
          </router-link>
        </div>
        <div class="text_box" :key="index" @click="pophide">
          <a :href="popdata.url" v-if="!popdata.urlShow">
            <div class="wrap">
              <div class="title">{{popdata.name}}</div>
              <span class="text">{{popdata.text}}</span>
            </div>
          </a>
          <router-link :to="popdata.url" v-if="popdata.urlShow">
            <div class="wrap">
              <div class="title">{{popdata.name}}</div>
              <span class="text">{{popdata.text}}</span>
            </div>
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  // import DemoApp from './DemoApp'
  export default {
    components: {
      // DemoApp
    },
    props: ["cur_navlist"],
    data() {
      return {
        title: "HOME",
        options: " ",
        img: require("../../assets/icon2.png"),
        popdatas: [{
            cname: "个人简介",
            name: "home",
            text: "VIEW",
            icon: "",
            url: "home",
            urlShow: true, //路由时为true
          },
          {
            cname: "自我评价",
            name: "evaluation",
            text: "VIEW",
            icon: "",
            url: "home",
            urlShow: true,
          },
          {
            cname: "专业技能",
            name: "skill",
            text: "VIEW",
            icon: "",
            url: "skill",
            urlShow: true,
          },
          {
            cname: "工作经历",
            name: "job ",
            text: "VIEW",
            icon: "",
            url: "project",
            urlShow: true,
          },
          {
            cname: "项目经验",
            name: "project",
            text: "VIEW",
            icon: "",
            url: "project",
            urlShow: true,
          },
          {
            cname: "github",
            name: "github ",
            text: "VIEW",
            icon: "",
            // url:"https://github.com/dr919",
            // urlShow:false,
            url: "project",
            urlShow: true,
          },
          {
            cname: "爱好",
            name: "hobby",
            text: "VIEW",
            icon: "",
            url: "others",
            urlShow: true,
          },
          {
            cname: "音乐",
            name: "music",
            text: "VIEW",
            icon: "",
            url: "others",
            urlShow: true,
          },
          {
            cname: "联系方式",
            name: "contact",
            text: "VIEW",
            icon: "",
            url: "others",
            urlShow: true,
          }
        ]
      };
    },
    methods: {
      pophide: function() {
        this.$emit('my-event')
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .indexPop {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    transition: all 0.3s;
    z-index: 88;
  }
  .no_pop {
    opacity: 0;
    z-index: -1;
  }
  .f_nav {
    width: 5rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .f_nav .navlist {
    width: 1.55rem;
    height: 1.55rem;
    float: left;
    margin: 0.05rem;
    box-sizing: border-box;
    border: 0.5px solid #fff;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    opacity: 0;
    transition: all 0.3s;
  }
  .navlist .icon_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    opacity: 1;
  }
  .icon_box {
    background: none;
  }
  .icon_box span {
    position: absolute;
    margin: auto;
    height: 0.5rem;
    width: 0.5rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .navlist .text_box {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(113, 86, 153, 0.5);
    opacity: 0;
    transition: all 0.3s;
  }
.text_box a,.icon_box a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
}
  .text_box .wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 55px;
  }
  .navlist:hover .text_box {
    top: 0;
    opacity: 1;
  }
  .navlist:hover .icon_box {
    top: -100%;
    opacity: 0;
  }
  .navlist .text {
    padding: 0.02rem 0.2rem;
    background: #715699;
    line-height: 0.26rem;
    font-size: 0.12rem;
    color: #fff;
  }
  .f_nav .navlist:nth-child(1) {
    transform: translate(-60px, -60px);
  }
  .f_nav .navlist:nth-child(2) {
    transform: translate(0, -60px);
  }
  .f_nav .navlist:nth-child(3) {
    transform: translate(60px, -60px);
  }
  .f_nav .navlist:nth-child(4) {
    transform: translate(-60px, 0);
  }
  /* .boxs_icon li:nth-child(5) {
                 transform: translate(-60px,-60px)
               } */
  .f_nav .navlist:nth-child(6) {
    transform: translate(60px, 0);
  }
  .f_nav .navlist:nth-child(7) {
    transform: translate(-60px, 60px);
  }
  .f_nav .navlist:nth-child(8) {
    transform: translate(0, 60px);
  }
  .f_nav .navlist:nth-child(9) {
    transform: translate(60px, 60px);
  }
  .f_nav .cur_navlist {
    transform: translate(0, 0) !important;
    opacity: 1;
  }
  .indexIcons {
    background-repeat: no-repeat;
    background-size: 1.5rem 1.5rem;
  }
  .navlist:nth-child(1) .indexIcons {
    background-position: -0rem -.5rem;
  }
  .navlist:nth-child(2) .indexIcons {
    background-position: -1rem -0rem;
  }
  .navlist:nth-child(3) .indexIcons {
    background-position: -1rem -.5rem;
  }
  .navlist:nth-child(4) .indexIcons {
    background-position: -.5rem -.5rem;
  }
  .navlist:nth-child(5) .indexIcons {
    background-position: -.5rem -1rem;
  }
  .navlist:nth-child(6) .indexIcons {
    background-position: -.5rem -0rem;
  }
  .navlist:nth-child(7) .indexIcons {
    background-position: -1rem -1rem;
  }
  .navlist:nth-child(8) .indexIcons {
    background-position: -0rem -1rem;
  }
</style>
