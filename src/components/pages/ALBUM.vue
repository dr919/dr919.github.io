<template>
  <div class="project">
    <!-- <h1>{{title}}</h1> -->
    <div class="project_con">
       <div class="list_main" v-for="(item,index) in projectDatas">
         <p class="time">{{item.time}}</p>
         <span class="img_box"><img :src="item.img" alt=""></span>
        <h3 class="name">{{item.name}}</h3>
        <p class="describe">{{item.describe}}</p>
        <button class="more">LEARN MORE</button>
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
        title:'PROEJCT',
        options: '',
        projectDatas:[
          {time:"2017/06 - 2017/10",name:"签到管理",
          img:require("../../assets/img01.jpg"),
          describe:"该系统是专门为解决会议签到常见问题的管理系统，简单稳定操作、智能身份识别、复杂权限分配，让主办方会议现场签到效率更高、轻松解决排队体验差、现场混乱问题，更能实时查看签到情况，不签漏、快签到，具有统计数据等功能，让签到变得更快、更灵活、更稳定、更专业。"},
          {time:"2017/03 - 2017/06",name:"问卷调查",
          img:require("../../assets/img02.jpg"),
          describe:"问卷调查是一款针对调查类界面而制定的生成工具，以所见即所得的形式，只需通过简单的拖拽业务组件、简单设置即可生成兼容web端、移动端等多平台的问卷页面，其中具有丰富的业务组件和主题模板，灵活的配置让问卷调查变得简单、高效、美观。"},
          {time:"2016/05 - 2016/07",name:"微邀请",
          img:require("../../assets/img03.jpg"),
          describe:"微邀请是款免费移动场景自营销制作工具，可用来制作各类手机h5营销类应用，另外这款软件具备多种模板、主题风格，多种主题图标任意选择，像使用word一样简单高效的生成想要的移动页面，无须发布即可预览。另外，允许用户通过客户端内置的分享功能，将手机页面分享到社交网络。"},
          ]
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .project {
    margin: 10px;
  }
  .project_con {
    display: flex;
  }
  @media screen and (max-width: 600px) {
  .project_con {
    display: block;
  }
}
  .project_con .list_main {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    padding: 0rem .35rem;
  }
  .list_main .time {
    font-size: 14px;
    margin: .1rem 0 .2rem;
  }
  .list_main .img_box{
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50% 50%;
    overflow: hidden;
    cursor: pointer
  }
  .img_box img {
    width: 100%;
    height: 100%;
    border-radius: 50% 50%;
    transition: all .4s;
  }
  .img_box:hover img {
    transform: scale(1.2);
  }
  .name {
    font-size: 18px;
    margin: .15rem 0 .2rem;
    ;
  }
  .describe {
    font-size: .14rem;
    margin-bottom: .3rem;
    text-align:justify;
  }
  .more {
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    background: #000;
    color: #fff;
    transition: all 1s;
    cursor: pointer;
    margin-bottom: .2rem;
  }
  @media screen and (min-width: 500px) {
   .more:hover {
    transform:rotateY(360deg);
  }
}

</style>
