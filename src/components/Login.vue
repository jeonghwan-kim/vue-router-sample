<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email"><br />
      <input type="password" v-model="password" placeholder="password">(hint: password123)<br />
      <button type="submit">Login</button>
      <p v-if="err">Bad login information</p>
    </form>
  </div>
  
</template>

<script>
import {Auth} from '../api'

export default {
  data() {
    return {
      email: 'test@test.com',
      password: '',
      err: false
    }
  },
  methods: {
    login() {
      Auth.login(this.email, this.password)
      .then(() => this.$router.replace(this.$route.query.redirect || '/'))
      .catch(() => this.err = true)
    }
  }
}
</script>
