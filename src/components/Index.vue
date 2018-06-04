<template>
  <div class="index">
    <div class="banner"><img v-for="banner in banners" :src="banner" alt=""></div>
    <ul class="f_nav">
      <li v-for="(listData,index) in listDatas" :key="index">
        <a href="#">
          <i class="incon1" :class="listData.iclass"></i>
          <p>{{listData.name}}</p>
        </a>
      </li>
    </ul>
    <div class="line"></div>
    <ul class="yilist_ul flex_box">
      <li v-for="(yjList,index) in yjLists" class="flex1" :key="index">
        <a href="#">
          <img :src="yjList.img" alt="">
          <p>{{yjList.name}}</p>
        </a>
      </li>
    </ul>
    <div class="line"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'index',
    props: [],
    data() {
      return {
        banners: [require('../assets/banner0.png'), require('../assets/banner1.png')],
        listDatas: [{
            name: '学习地图',
            iclass: 'listid0'
          },
          {
            name: '学习计划',
            iclass: 'lsitid1'
          },
          {
            name: '学习计划',
            iclass: 'lsitid2'
          },
          {
            name: '学习计划',
            iclass: 'lsitid3'
          }
        ],
        yjLists: [{
            name: '学习计划',
            img: require('../assets/yilist0.png')
          },
          {
            name: '学习计划',
            img: require('../assets/yilist1.png')
          },
          {
            name: '学习计划',
            img: require('../assets/yilist2.png')
          },
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @widtha: 100%;
  @colorRed: red;
  @colorBlue: #12ccfb;
  @colorCcc: #ccc;
  @colorEee: #eee;
  @colorEa: #eaeaea;
  @color333: #333;
  @length10: 10px;
  @radius:4px;
  @borderc:1px solid @colorEee;

  // common.js
  .flex_box {
    display: flex;
  }
  .flex1 {
    flex: 1;
  }
  .line {
    height: @length10;
    width: @widtha;
    background: @colorEa;
  }


  .banner {
    width: @widtha;
    height: 3.75rem;
  }
  .banner img {
    width: @widtha;
    position: absolute;
    top: 0;
    left: 0;
  }
  .f_nav {
    display: flex;
    border-bottom: @borderc;
    padding: @length10;
  }
  .f_nav li {
    flex: 1;
    text-align: center;
    border-right:@borderc;
  }
  .f_nav li:last-child {
    border: 0;
  }
  .incon1 {
    width: 30px;
    height: 35px;
    display: inline-block;
    background: url(/static/img/icon1.73fc6ce.png) no-repeat;
    background-position: -5px -5px;
    background-size: 160px 110px;
  } // .listid0 {
  //   // background-position: -40px -5px;
  // }
  .lsitid1 {
    background-position: -32px -5px;
  }
  .lsitid2 {
    background-position: -62px -5px;
  }
  .lsitid3 {
    background-position: -97px -5px;
  }


   .yilist_ul li {
     margin:@length10 5px;
   }
  .yilist_ul li img {
    width: @widtha;
    height: 60px;
    border-radius: @radius;
  }
</style>
