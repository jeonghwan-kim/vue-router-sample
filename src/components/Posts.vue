<template>
  <div>
    <h2>Posts</h2>
    <div v-if="loading">Loading...</div>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'post', params: { id: post.id } }">
        [ID: {{post.id}}] {{post.text | summary}}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Post } from '../api/index'

export default {
  data() {
    return {
      loading: false,
      posts: []
    }
  },
  created() {
    this.fetchData()
  },
  filters: {
    summary(val) {
      return val.substring(0, 20) + '...'
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      Post.list()
      .then(data => {
        this.posts = data
        this.loading = false
      }) 
    }
  }
}
</script>

