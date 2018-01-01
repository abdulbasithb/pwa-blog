<template>
  <div class="home">
    <section class="hero is-light is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Medium title
          </h1>
          <h2 class="subtitle">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
    <div id="blog">
      <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-size-4">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-size-4">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-size-4">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#blog {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

