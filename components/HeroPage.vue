<template>
  <b-jumbotron
    class="d-flex flex-column align-items-center text-center justify-content-center"
    :style="{ backgroundImage: `url(${image})` }"
    fluid
  >
    <h1 class="display-4">{{ header }}</h1>
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
};
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
</style>
