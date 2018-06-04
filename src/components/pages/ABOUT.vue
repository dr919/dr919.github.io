<template>
  <div id="skill">
    <div class="skill_con">
      <div class="skill_l">
        <!-- <p class="list">
          1. 熟练HTML/CSS页面架构和布局，能够编写符合W3C标准、兼容多种主流浏览器的代码； <br>
          2. 熟练HTML5和CSS3技术开发移动端应用和响应式页面，并可以制作炫酷的页面特效；<br>
          3. 熟练原生JavaScript编程，可以脱离类库，编写常见的网页特效，实现代码优化，编写高质量代码；<br>
          4. 熟练jQuery UI.js、jQuery.js、zepto.js、Bootstrap、echarts.js进行快速开发；<br>
          5. 熟练Ajax，能够实现前后端的数据交互，实现页面数据的异步加载；<br>
          6. 熟练svn、git、webpack对代码进行管理和构建，npm、bower等依赖管理工具；<br>
          7. 熟悉AngularJs、React.js、Vue.js熟悉MVC/MVVM框架模式，理解并掌握模块化开发思想；<br>
          8. 了解PHP、Node.js等服务端开发语言；<br>
          9. 熟练sublime、WebStrom、Dreamweaver、Photoshop、Illustrator 、Fireworks 等常用网页制作软件和图形设计；
      </p> -->
       <p class="list">
          1. 不乱于心，不困于情，不畏将来，不念过去，如此，安好。 <br>
          2. 一个人至少拥有一个梦想，有一个理由去坚强，心若没有栖息的地方，到哪里都是在流浪<br>
          3. 你所浪费的今天，是昨天死去的人奢望的明天；你所厌恶的现在，是未来的回不去的曾经。 <br>
          4. 那里会有人喜欢孤单，不过是不喜欢失望罢了。<br>
          5. 喜欢就放肆，但爱就是克制。<br>
          6. 不要高度两年内的自己，不要低估十年后的自己。<br>
      </p>
      </div>
      <div class="skill_r">
        <span><img :src="imgicon" alt=""></span>
      </div>
        <!-- {{options}} -->
    </div>
  </div>
</template>

<script>
// import DemoApp from './DemoApp'
export default {
  components: {
    // DemoApp
  },
  data() {
    return {
      title: "",
      imgicon:require("../../assets/dr.jpg"),
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill_con {
   width: 60%;
   margin:.25rem auto;
   box-sizing : border-box;
}

@media screen and (max-width: 850px) {
  .skill_con  {
    width: 100%;
    padding: .2rem;
    margin:0 auto;
  }
}
.skill_l {
  float: left;
  text-align: left;
  margin:.2rem;
  font-size: .14rem;
}
@media screen and (max-width: 420px) {
  .skill_l {
  font-size: 14px;
}
}
.skill_r span {
  display:inline-block;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50% 50%;
  margin:.1rem .2rem;
  border: 2px solid #fff;
  overflow: hidden;
  cursor: pointer;
}
.skill_r span img {
  width: 100%;
  height: 100%;
  border-radius: 50% 50%;
  transition: all 0.3s;
}
.skill_r span:hover img {
  transform: scale(1.2);
}
</style>
