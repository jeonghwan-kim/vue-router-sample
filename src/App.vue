<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/NotFound">Not found</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
