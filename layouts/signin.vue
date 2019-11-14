<template>
  <b-container>
    <div class="mb-5">
      <!-- As a heading -->
      <b-navbar
        variant="faded"
        type="light"
      >
        <b-navbar-brand
          tag="h1"
          class="mb-1"
          to="/"
        >Recruitment</b-navbar-brand>
      </b-navbar>
      <hr />
    </div>
    <nuxt />
  </b-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem 1rem 0rem 1rem;
  .navbar-brand {
    font-size: 2rem;
  }
}
</style>
