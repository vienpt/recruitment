<template>
  <b-jumbotron
    class="flex-column text-center justify-content-center"
    :header="header"
    :style="{ backgroundImage: `url(${image})` }"
  >
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@media (max-width: 992px) {
}

.jumbotron {
  max-height: 500px;
  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

h1 {
  padding-top: 55px;
}
</style>
