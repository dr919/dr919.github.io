import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//管理属性值
// const state={
//     count : 1
// }


// 访问state中数据： $store.state.count
// 使用mutations中方法： $store.commit('add')


const store = new Vuex.Store({
    //管理属性值
    state:{
        count : 1
    },
    //管理状态函数
    mutations:{
        add(state,n){ //可以传值，例如n
            state.count+=n;
        },
        reduce(state){
            state.count-=1;
        }
    },
    // 计算过滤操作
    getters:{
        count(state){
            return state.count +=2;
        }
    },
    // 异步修改状态，和mutations功能一样,actions是可以调用mutations里的方法的
    actions:{
        // 我们都用commit调用了Mutations里边的方法
        // 这两个方法传递的参数也不一样。
        // ontext：上下文对象，这里你可以理解称store本身。
        // {commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
        addAction(context){
            context.commit('add',1);

            // setTimeout(()=>{context.commit(reduce)},3000);
            console.log('我比reduce提前执行');
        },
        reduceAction({commit}){
            commit('reduce');
            
            
        }
    }

    
})

export default store
