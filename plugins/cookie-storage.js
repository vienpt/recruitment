import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
// import cookie from 'cookie';


/*
**
https://stackoverflow.com/questions/44126493/i-want-to-use-window-localstorage-in-vuex-in-nuxt-js
https://nuxtjs.org/examples/auth-external-jwt
https://noumenon-th.net/programming/2019/08/24/nuxt-js-store/
https://github.com/nuxt/example-auth0/tree/master/pages/auth
**
*/

export default ({ store }) => {
  createPersistedState({
    key: 'my-key',
    paths: ['auths'],
    getState: (key) => Cookies.getJSON(key),
    setState: (key, state) => Cookies.set(key, state, { expires: 3600, secure: false }),
    removeState: (key) => Cookies.remove(key)
  })(store);
};
