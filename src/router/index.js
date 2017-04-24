import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import home from '@/view/home'
import search from '@/view/search'
import commoditys from '@/view/commoditys'
import user from '@/view/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path: '/search',
    	name: 'search',
    	component: search,
    	children: [{
    		path: ':id',
    		component: search
    	}]
    },
    {
    	path: '/commodity/:id',
    	component: commoditys
    },
    {
    	path: '/user',
    	component: user
    }
  ]
})
