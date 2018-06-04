<template>
  <div>
    <h1>{{title}}</h1>
    <div class="tree_con">
        {{options}}
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
        title:'vue-resource',
        options: ''
      }
    },
    mounted: function() {
      // GET /someUrl
      // this.$http.get('https://api.douban.com/v2/book/1220562').then(response => {
      //     response.setHeader("Access-Control-Allow-Origin", "*");
      //      console.log(response.data);
      //     // get body data
      //     this.options = response.data;
      // }, response => {
      //     console.log("error");
      // });
      //跨域请求
      this.$http.jsonp('https://api.douban.com/v2/book/1220562', {
        name: "abc"
      }).then(function(res) {
        console.log(res.body);
        this.options = res['body']['summary'];
      }, function(res) {
        console.log(res)
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Three {
    margin: 10px;
  }
  .tree_con {
    padding:20px 10px;
    background: #eee;
  }
</style>
