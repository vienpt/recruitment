<template>
  <b-container fluid>
    <Hero />
    <b-jumbotron
      class="flex-column text-center justify-content-center"
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit our website</p>
      <b-btn variant="primary" href="https://bootstrap-vue.js.org/"
        >More Info</b-btn
      >
    </b-jumbotron>
  </b-container>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: {
    Hero
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style></style>
