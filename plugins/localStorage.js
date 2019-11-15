import createPersistedState from 'vuex-persistedstate';

export default ({ store, req, isDev }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'my-key',
      paths: ['counts'], // set specific path 'counts'
      storage: window.sessionStorage // get sessionStorage
    })(store);
  });
};
