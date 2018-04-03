import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import NewPost from '../components/NewPost.vue'
import {Auth} from '../api'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  if (Auth.loggedIn()) return next()
  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
}

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/posts' },
    { path: '/login', component: Login },
    { path: '/logout', 
      beforeEnter(to, from, next) {
        Auth.logout()
        next('/')
      } 
    },
    { path: '/posts', component: Posts, 
      children: [
        { name: 'new_post', path: 'new', component: NewPost, beforeEnter: requireAuth },
        { name: 'post', path: ':id', component: Post },
      ]
    },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})
