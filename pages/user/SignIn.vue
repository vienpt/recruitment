<template>
  <div>
    <b-container>
      <b-jumbotron
        border-variant="white"
        bg-variant="white"
      >
        <template v-slot:header>
          <h3 class="text-center text-muted">Log in</h3>
        </template>

        <b-card class="mt-3">
          <b-form-group>
            <!-- login by another social -->
            <b-row class="text-center">
              <b-col>
              <b-btn
                to="#"
                size="lg"
                variant="light"
                block
              >Log in with other Social</b-btn>
              </b-col>
            </b-row>
            <div class="link-seperator d-flex justify-content-center my-3">
              <span>or</span>
            </div>
            <!-- input group -->
            <b-row role="group">
              <!-- column email -->
              <b-col cols="12">
                <b-form-input
                  id="input-email"
                  v-model="email"
                  required
                  :state="null"
                  aria-describedby="input-live-help input-live-feedback"
                  size="lg"
                  type="email"
                  placeholder="Enter your email"
                  trim
                ></b-form-input>
                <!-- This will only be shown if the preceding input has an invalid state -->
                <b-form-invalid-feedback id="input-live-feedback">
                  Enter at least 3 letters
                </b-form-invalid-feedback>
              </b-col>
              <!-- column password  -->
              <b-col cols="12" class="mt-3">
                <b-form-input
                  v-model="password"
                  size="lg"
                  type="password"
                  placeholder="Enter your password"
                ></b-form-input>
              </b-col>
              <!-- forgot and remember group -->
              <b-col cols="12" class="mt-3">
                <b-form-checkbox
                  id="checkbox-rememberme"
                  v-model="rememberme"
                  name="checkbox-rememberme"
                  value="accepted"
                  unchecked-value="not_accepted"
                  size="lg"
                  class="float-left"
                >
                  Remember me
                </b-form-checkbox>
                <b-link
                  to="/user/forgotpass"
                  class="float-right"
                >Forgot password?</b-link>
              </b-col>
              <b-col cols="12" class="mt-3">
                <b-btn
                  size="lg"
                  variant="primary"
                  block
                  @click="postLogin"
                >
                  Login
                </b-btn>
              </b-col>
            </b-row>
          </b-form-group>
        </b-card>
        <!-- dont have account  -->
        <div class="my-3 text-center">
          <span>Dont have an account?</span>
          <b-link to="/user/signup">Join now</b-link>
        </div>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
// const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  middleware: 'notAuthenticated',
  layout: 'signin',
  data () {
    return {
      email: 'test@abc.com',
      password: 'password',
      rememberme: 'not_accepted'
    };
  },
  computed: {
    emailState () {
      return this.email.length > 2;
    }
  },
  methods: {
    postLogin () {
      setTimeout(() => {
        const auth = 'someStringGotFromApiServiceWithAxios';
        this.$store.commit('auths/setAuth', auth);
        this.$router.go(-1);
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 576px;
}

.link-seperator {
  position: relative !important;
}
.link-seperator:after {
  border: 1px solid #ccced0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 0;
}

.link-seperator > span {
  background-color: #fff;
  color: rgba(45, 48, 49, 0.5);
  padding: 0 20px;
  position: relative;
  z-index: 1;
}
</style>
