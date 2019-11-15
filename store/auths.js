export const state = () => ({
  auth: null,
  cookie: ''
});

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth;
  },

  encrytCookie (state, cookie) {
    // state.cookie = document.cookie.replace(/(?:(?:^|.*;\s*)\s*\s*([^;]*).*$)|^.*$/);
  }
};

export const getters = {};

export const actions = {};
