<template>
  <div class="blog">
    <h1 class="title has-text-centered">Blog</h1>
    <div class="container">
      <div class="columns" v-for="faq of faqs">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-size-4">
                {{ faq.body }}
              </p>
              <p class="subtitle">
                {{ faq.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      faqs: [],
      errors: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/')
      .then(response => {
        this.faqs = response.data.slice(0, 5)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style lang="scss" scoped>
.blog {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

