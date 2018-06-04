<template>
  <div class="other" :style="{backgroundImage:'url('+hbgimg+')'}">
    <div class="other_con">
      <h2>{{title}}</h2>
      <div class="other_main">
        <div class="otherList" v-for="(otherData,index) in otherDatas">
          <h3 class="tit"><span>{{otherData.title}}</span></h3>
          <p class="list_p" v-html="otherData.text"></p>
        </div>
      </div>
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
        title:'拥有一个网站，或者仅是尝试一下新的想法！',
        text: '拥有一个网站，或者仅是尝试一下新的想法！',
        hbgimg:require("../../assets/hbg.jpg"),
        otherDatas:[
          {
            title:"爱好",
            name:"hobby",
            text:"旅游、摄影、设计、音乐、画画"
          },
          {
            title:"音乐",
            name:"music",
            text:" You're Somebody Else <br/> So:Lo <br/> Nice Body <br/> Without U <br/>The Way I Am <br/> If YOU <br/> You Owe Me <br/>  Shape of You <br/> If I Die Young <br/>  "
          },
          {
            title:"联系方式",
            name:"contact",
            text:"QQ : 852120782 <br/> 微信 ：dr852120782 <br/>"
          },
        ]
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .other {
    width: 100%;
    height: 100%;
    /* background: url(/static/img/hbg.jpg) no-repeat center; */
    background-size: cover;
    min-height: 3rem;
    transition: all .3s;
  }

  h2 {
    font-size: .3rem;
    line-height: .8rem;
  }
  .otherList{
      margin-bottom: .15rem;
  }
  .otherList .tit span {
    display: inline-block;
    border: 2px solid #fff;
    padding: .02rem 10px;
    margin: .1rem 0 .10rem;
    font-size: .18rem;
    font-weight: 400;
    border-radius: 5px;
    transition: all .3s;
  }
  .otherList .tit span:hover {
     transform: scale(1.15);
  }
  .list_p {
    font-size: 14px;
  }
</style>
