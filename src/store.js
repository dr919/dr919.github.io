import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//管理属性值
var state={
    is_show: true, //默认显示，点击的时候再隐藏
    text1:'测试111'
}


//管理方法函数
var mutations={
    show_1(state) {
    state.is_show =!state.is_show;
},
    show_2(state,id){
       console.log('测试maputations---'+id);
    }

}

//这个相当于是 state的计算属性 的意思  跟computed差不多  获取状态值
var getters = {
    id1:function(state,getters){
        return state.text1;
    }

}


// 异步的mutations ，Action 通过 store.dispatch 方法触发  store.dispatch('increment')
var actions={
    yibu_1(store,id) {
       // console.log(id);
        store.commit('show_2',id.id); //然后再提交到mutations  id传过来的是个对象
    }

}


const store = new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions
})

export default store
