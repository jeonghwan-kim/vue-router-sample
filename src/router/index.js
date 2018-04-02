import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = { template: '<div>Login</div>'}
const Logout = { template: '<div>Logout</div>'}

import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import NewPost from '../components/NewPost.vue'
const PostRemove = { template: '<div>PostRemove</div>'}

const NotFound = { template: '<div>Not Found</div>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/posts' },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/posts', component: Posts, 
      children: [
        { name: 'new_post', path: 'new', component: NewPost },
        { name: 'post', path: ':id', component: Post },
        { name: 'post_remove', path: ':id/remove', component: PostRemove },
      ]
   },
    { path: '*', component: NotFound }
  ]
})

export default router