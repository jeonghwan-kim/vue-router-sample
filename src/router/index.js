import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>Home</div>'}
const NotFound = { template: '<div>Not Found</div>'}

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  },{
    path: '*',
    component: NotFound
  }]
})

export default router