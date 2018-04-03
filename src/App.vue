<template>
  <div>
    <router-link to="/" exact>Home</router-link>
    <router-link v-if="loggedIn" to="/logout">Logout</router-link>
    <router-link v-else to="/login" exact>Login</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/posts/new" exact>New Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {Auth} from './api'

export default {
  name: 'app',
  data() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },
  created() {
    Auth.onChange = loggedIn => {
      console.log('onchage', loggedIn)
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style>
.router-link-exact-active  {
  color: white;
  background-color: blue;
}

</style>
