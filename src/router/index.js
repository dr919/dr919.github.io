import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
// import One from '@/components/One'
// import Two from '@/components/Two'
// import Three from '@/components/Three'
// import VuexDemo from '@/components/VuexDemo'
import HOME from '@/components/pages/HOME'
import ABOUT from '@/components/pages/ABOUT'
import ALBUM from '@/components/pages/ALBUM'
import NEWS from '@/components/pages/NEWS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    },
     {
      path: '/home',
      redirect:"/",
      name: 'HOME',
      component: HOME
    },
    {
      path: '/skill',
      name: 'ABOUT',
      component: ABOUT
    },
    {
      path: '/project',
      name: 'ALBUM',
      component: ALBUM
    },
    {
      path: '/others',
      name: 'NEWS',
      component: NEWS
    },


    // {
    //   path: '/one',
    //   name: 'One',
    //   component: One
    // },
    // {
    //   path: '/two',
    //   name: 'Two',
    //   component: Two
    // },
    // {
    //   path: '/Three',
    //   name: 'Three',
    //   component: Three
    // },
    // {
    //   path: '/vuex',
    //   name: 'VuexDemo',
    //   component: VuexDemo
    // }
  ]
})
