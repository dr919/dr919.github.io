<template>
  <div class="hello">
    <img :class="{bgc:bgc}" :src="allData.img">
    <h1 :class="{bgc:bgc}">{{ allData.msg }}</h1>
    <h2 :class="{bgc:bgc}">{{ allData.title }}</h2>
    <ul>
      <li :class="{bgc:bgc}" v-for="(item,index) in allData.items">
        <a :href="item.href" target="_blank" :key="index">
              {{item.name}}
            </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'HelloWorld',
    props:['bgc'],
    data() {
      return {
        allData: []
      }
    },
    mounted() {
      // 直接赋值
      var allData = {
        title: 'Welcome to Your Vue.js App',
        img: require('../assets/logo.png'),
        init: false,
        items: [{
            name: 'vue-router',
            href: "http://router.vuejs.org/"
          },
          {
            name: 'vue-loader',
            href: "http://vue-loader.vuejs.org/"
          },
          {
            name: 'awesome-vue',
            href: "https://github.com/vuejs/awesome-vue"
          }
        ],
      }
      //  这里模拟数据请求
      setTimeout(() => {
        // this.init = true
        this.allData = allData;
        // this.bgc = false;
      }, 100)
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    background: #ccc;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
 
</style>
