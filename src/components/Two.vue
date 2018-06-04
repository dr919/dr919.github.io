<template>
  <div class="Two">
    <h1>{{ title }}</h1>
    <button @click="show=!show">点击</button>
    <!-- 动画 -->
    <transition name="fade">
      <div v-if="show" class="box">动画</div>
    </transition>
   
  </div>
</template>

<script>
  // Mixins一般有两种用途：
  // 1、在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
  // 2、很多地方都会用到的公用方法，用混入的方法可以减少代码
  // 定义一个混入对象
  var addLog = {
    updated: function() {
      console.log('数据发生了变化');
    }
  }
  export default {
    name: 'Two',
    data() {
      return {
        title: 'transition',
        show: true,
        num: 1,
        lists: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      add() {
        this.num++;
      },
      uptated() {
        console.log('构造器中的uptated方法')
      },
      push() {
        this.list.push(11);
        this.nextTick(function() {
          alert('数据已经更新')
        });
        this.$nextTick(function() {
          alert('v-for渲染已经完成')
        })
      }
    },
    mixins: [addLog],
    mounted() {
      // this.push()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s;
  }
  .fade-leave,
  .fade-leave-active {
    opacity: .5;
    transform: translateX(50px) rotate(7deg) scale(2, 1);
  }
  .box {
    width: 200px;
    background: red;
  }
</style>
