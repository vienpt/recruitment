<template>
  <div
    class="hero hero--bg d-flex flex-column text-center justify-content-center"
  >
    <b-container>
      <b-row class="hero-title" align-h="center">
        <b-col cols="12" class="md-auto">
          <!-- change anytext you want -->
          <h1 variant="faded" class="text-black">Your search</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
@media (max-width: 992px) {
  .hero-title {
    text-align: center;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
}

.hero {
  padding-top: 50px;
  max-height: 500px;
  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: #e0e0e0;
  /* background-image: url('~assets/imgs/herosearch.png'); */
}
</style>
