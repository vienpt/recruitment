// import createPersistedState from 'vuex-persistedstate';

export const state = () => ({
  count: 0
});

export const mutations = {
  increment (state) {
    state.count++;
  },

  decrement (state) {
    state.count--;
  }
};

export const getters = {
  get (state) {
    return state.count;
  }
};

export const actions = {

};

// export const plugins = [
//   createPersistedState({
//     key: 'counts',
//     storage: window.sessionStorage
//   })
// ];

