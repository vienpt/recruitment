<template>
<div>
  <b-toast
      :visible="toast"
      :append-toast="true"
      :toaster="'b-toaster-top-left'"
      :title="toastTitle ? toastTitle : 'Message'"
      :variant="variant"
      :solid="true"
      auto-hide-delay="5000"
    >
      {{ content }}
    </b-toast>
</div>
</template>

<script>
export default {
  props: {
    toast: {
      type: Boolean,
      default: false
    },
    toastPosition: {
      type: String,
      default: 'b-toaster-top-left'
    },
    toastTitle: {
      type: String,
      default: 'Message'
    },
    variant: {
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: ''
    }
  }
};
</script>
