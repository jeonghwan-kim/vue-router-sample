<template>
  <div>
    <h2>New Post</h2>
    <form @submit.prevent="onSubmit">
      <textarea cols="30" rows="10" v-model="inputTxt" :disabled="disabled"></textarea>
      <input type="submit" :value="btnTxt" :disabled="disabled"/>
    </form>  
  </div>
</template>

<script>
import { Post } from '../api'

export default {
  data() {
    return {
      isSaving: false,
      inputTxt: '',
    }
  },
  computed: {
    btnTxt() {
      return this.isSaving ? 'Saving...' : 'Save'
    },
    disabled() {
      return this.isSaving
    }
  },
  methods: {
    onSubmit() {
      this.isSaving = true
      Post.create(this.inputTxt).then(() => {
        this.isSaving = false
        this.inputTxt = ''
        this.$router.push('/posts')
      })
    }
  }
}
</script>
