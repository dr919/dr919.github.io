<template>
  <div class="vuex">
    <h1>{{title}} </h1>
    <p>这是从store中获取的数据：{{count}}</p>
    <!-- <div>
      <button @click="$store.commit('add',1)">增加</button>
      <button @click="$store.commit('reduce')">减少</button>
    </div> -->
    <div>
      <button @click="addAction">Action增加</button>
      <button @click="reduceAction">Action减少</button>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from 'vuex'
  import store from '../store/store.js'
  export default {
    name: 'vuex',
    store,
    data() {
      return {
        title:'vuex'
      }
    },
    computed: {
      // 1、通过mapState的数组来赋值,可以直接在模板中使用state中的数据count
      ...mapState(["count"]),
      
      //3、 用mapGetters简化模板写法getters
      ...mapGetters(["count"]),
      // count(){
      //     return this.$store.getters.count;
      // }

    },
    methods:{
      //2、mapMutations 简化模板Mutations
        ...mapMutations([  
            'add','reduce'
        ]),
         // 4、mapActions简化模板Actions
      ...mapActions(['addAction', 'reduceAction'])
    },
  }
</script>

<style scoped>
  button {
    padding: 10px 20px;
    margin: 10px;
    background: #ccc;
    border-radius: 5px;
  }
</style>