<template>
  <div class="hero hero--bg d-flex flex-column justify-content-center">
    <b-container>
      <b-row class="hero-title" align-h="start">
        <b-col cols="12" lg="6" class="md-auto">
          <h1 variant="faded" class="text-black display-4">Do what you love</h1>
          <h3 variant="faded" class="text-black display-5">
            Create the future you want
          </h3>
        </b-col>
      </b-row>
      <!-- component SearchJob -->
      <SearchJob />
      <!-- job suggested / trending -->
      <Suggested />
      <!-- or can use autocomplete search -->
      <!-- <Autocomplete /> -->
    </b-container>
  </div>
</template>

<script>
import SearchJob from '@/components/SearchJob'
import Suggested from '@/components/Suggested'
// import Autocomplete from '~/components/Autocomplete'

export default {
  components: {
    SearchJob,
    Suggested
  }
}
</script>

<style scoped>
@media (max-width: 992px) {
  .hero-title {
    text-align: center;
  }
}

.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-height: 500px;
  min-height: 555px;
  padding-top: 50px;
  background-image: url('~assets/imgs/find-job2.png');
}
</style>
