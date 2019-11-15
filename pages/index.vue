<template>
  <b-container fluid>
    <Hero />
    <b-jumbotron
      class="flex-column text-center justify-content-center"
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit our website</p>
      <b-btn
        variant="primary"
        href="https://bootstrap-vue.js.org/"
      >More Info</b-btn>
    </b-jumbotron>
    <!-- <p>count: <b>{{ count }}</b></p>
    <p>
      <b-btn @click="increment">+</b-btn>
      <b-btn @click="decrement">-</b-btn>
    </p> -->
  </b-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Hero from '@/components/Hero';

// const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  components: {
    Hero
  },
  data () {
    return {};
  },
  computed: {
    ...mapState({
      count: state => state.counts.count
    })
  },
  mounted () {
    /* eslint-disable */
    console.log('cookie', document.cookie.replace(/(?:(?:^|.*;\s*)\s*\=\s*([^;]*).*$)|^.*$/));
  },
  methods: {
    ...mapMutations({
      increment: 'counts/increment',
      decrement: 'counts/decrement'
    })
  }
};
</script>

<style></style>
