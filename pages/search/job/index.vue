<template>
  <div>
    <HeroPage :header="title" :image="require('assets/imgs/herojob.png')" />
    <b-container fluid>
      <div>
        <p>Web Application: Vuejs, Reactjs</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage'

export default {
  components: {
    HeroPage
  },
  data() {
    return {
      title: 'Apply Job'
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
  .container-fluid {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
}

.container-fluid {
  padding-right: 100px;
  padding-left: 100px;
}
</style>
