<template>
  <div>
    <!-- herosearch -->
    <b-jumbotron
      :header="heroInfo.name + ', you are the boss of your account'"
      header-level="4"
      lead="Bootstrap v4 Components for Vue.js 2"
      fluid
    >
      <p>For more information visit website</p>
      <b-button
        variant="primary"
        href="#"
      >More Info</b-button>
    </b-jumbotron>

    <!-- section background photo -->
    <b-container>
      <section>
        <b-card>
          <b-card-body>
            djasldjka
          </b-card-body>
        </b-card>
      </section>
    </b-container>
  </div>
</template>

<script>
// import HeroPage from '@/components/HeroPage';

export default {
  middleware: 'authenticated',
  layout: 'profile',
  data () {
    return {
      heroInfo: {
        name: 'Vien',
        title: 'Your Search'
      },
    };
  }
};
</script>

<style>
</style>
