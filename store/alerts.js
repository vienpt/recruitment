export const mutations = {
  // custom common for define object in component
  setAlert (state, { vm, toast }) {
    vm.$bvToast.toast(toast.body, {
      autoHideDelay: 5000,
      appendToast: true,
      solid: true,
      title: toast.title,
      toaster: toast.position,
      variant: toast.variant
    });
  },

  // custom for each options
  // Success
  alertSuccess (state, { vm, message }) {
    vm.$bvToast.toast(message, {
      autoHideDelay: 5000,
      appendToast: true,
      solid: true,
      title: 'Success',
      toaster: 'b-toaster-bottom-right',
      variant: 'success'
    });
  },
  // Error
  alertError (state, { vm, message }) {
    vm.$bvToast.toast(message, {
      autoHideDelay: 5000,
      appendToast: true,
      solid: true,
      title: 'Error',
      toaster: 'b-toaster-bottom-right',
      variant: 'danger'
    });
  },
  // Warning
  alertWarning (state, { vm, message }) {
    vm.$bvToast.toast(message, {
      autoHideDelay: 5000,
      appendToast: true,
      solid: true,
      title: 'Warning',
      toaster: 'b-toaster-bottom-right',
      variant: 'warning'
    });
  }
};
