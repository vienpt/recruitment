<template>
  <div>
    <!-- herosearch -->
    <HeroPage
      :header="title"
      :image="require('assets/imgs/heropricing.png')"
    />
    <b-container>
      <Alert
        :toast="alert.toast"
        :toast-position="alert.position"
        :toast-title="alert.title"
        :variant="alert.variant"
        :content="alert.body"
      />
    </b-container>
    <b-button
      class="mb-2"
      variant="primary"
      @click="alert.toast= !alert.toast"
    >
      Show toast component
    </b-button>
    <b-button @click="toastObject">Show toast custom object</b-button>
    <div class="mt-5">
      <b-button variant="success" @click="toastSuccess">Show toast success</b-button>
      <b-button variant="danger" @click="toastError">Show toast error</b-button>
      <b-button variant="warning" @click="toastWarning">Show toast warning</b-button>
    </div>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage';
import Alert from '@/components/Alert';

export default {
  components: {
    HeroPage,
    Alert
  },
  data () {
    return {
      title: 'Alert',
      alert: {
        toast: false,
        // center, left, top, bottom, top-full, bottom-full, top (bottom)-left, top (bottom)-right
        position: 'b-toaster-top-center',
        // Success | Error | Info
        title: 'Success',
        // Color: info | primary | success | danger | warning
        variant: 'success',
        // content display
        body: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
      }
    };
  },
  head () {
    return {
      title: this.title
    };
  },
  methods: {
    toastObject () {
      this.$store.commit('alerts/setAlert', { vm: this, toast: this.alert });
    },
    toastSuccess () {
      this.$store.commit('alerts/alertSuccess', { vm: this, message: 'Save data ok' });
    },
    toastError () {
      this.$store.commit('alerts/alertError', { vm: this, message: 'Data error' });
    },
    toastWarning () {
      this.$store.commit('alerts/alertWarning', { vm: this, message: 'Warning data' });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
