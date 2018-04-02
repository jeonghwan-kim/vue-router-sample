<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/logout">Logout</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/posts/new">New Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.router-link-active {
  color: green;
}
.router-link-exact-active  {
  color: red;
}

</style>
