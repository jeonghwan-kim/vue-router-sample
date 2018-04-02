import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>Home</div>'}
const Login = { template: '<div>Login</div>'}
const Logout = { template: '<div>Logout</div>'}
const Post = { template: '<div><router-view></router-view></div>'}
const PostList = { template: '<div>PostList</div>'}
const PostView = { template: '<div>PostView</div>'}
const PostNew = { template: '<div>PostNew</div>'}
const PostRemove = { template: '<div>PostRemove</div>'}
const NotFound = { template: '<div>Not Found</div>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/posts', component: Post, 
      children: [
        { path: '', component: PostList },
        { path: 'view/:id', component: PostView },
        { path: 'new', component: PostNew },
        { path: 'remove/:id', component: PostRemove },
      ]
   },
    { path: '*', component: NotFound }
  ]
})

export default router