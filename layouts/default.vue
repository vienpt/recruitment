<template>
  <div id="app" class="wrapper">
    <Banner />
    <nuxt class="mb-5" />
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner';

export default {
  components: {
    Banner
  }
};
</script>

<style lang="scss">
html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}

.form-control:focus {
  box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25);
}
.btn:focus, button:focus {
  outline: transparent;
  box-shadow: none !important;
}
</style>
