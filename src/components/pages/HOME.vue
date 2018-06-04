<template>
  <div class="home" :style="{backgroundImage:'url('+appbg+')'}">
    <!-- <h1>{{title}}</h1> -->
    <div class="tree_con" >
        <!-- <img class="headerimg" src="./../../assets/dr.jpg" alt=""> -->
        {{options}}
        <h2 ><span class="title1">D</span>  <span class="title2">R</span></h2>

       <!-- <p class="name">I'm Dong Rui </p> -->
       <!-- <p>A Web Developer, From Universe.</p> -->
       <!-- <p>A designer from the universe.</p> -->
       <h3 class="welcome">{{title}}</h3>
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
        title:"Welcome To Dong Rui's Personal Website",
        options: '',
        appbg: require("../../assets/main.jpg"),
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
  min-height: 6rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  }
  .headerimg {
    width: 1.50rem;
    height: 1.50rem;
    border-radius: 50% 50%;
    margin: .6rem 0 .4rem;
  }
  .tree_con h2 span {
    font-size: 1rem;
    margin-bottom: .2rem;
    position: absolute;
  }
  .title1 {
    top:1.5rem;
    left:0;
    right: 0;
    margin: auto;
  }
   .title2 {
    top:4.5rem;
    left:0;
    right: 0;
    margin: auto;
  }
  .name {
    font-size: .24rem;
    margin-bottom: .1rem;
  }
  .welcome {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 30px;
  margin: auto;
  font-size: .3rem;

}

@media screen and (min-width: 1024px) {
 .welcome {
    top: -30%;
  }
}
</style>
