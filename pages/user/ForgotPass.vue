<template>
  <div>
    <b-container>
      <b-jumbotron
        border-variant="white"
        bg-variant="white"
      >
        <template v-slot:header>
          <h3 class="text-center text-muted">Forgot password?</h3>
        </template>

        <b-card class="mt-3">
          <b-form-group>
            <b-row role="group">
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
              <b-col
                cols="12"
                class="mt-3"
              >
                <b-btn
                  size="lg"
                  variant="primary"
                  block
                >
                  Request new password
                </b-btn>
              </b-col>
            </b-row>
          </b-form-group>
        </b-card>
        <!-- back to login account  -->
        <div class="mt-3">
          <b-link to="/user/signin">Back to sign in</b-link>
        </div>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: 'signin',
  data () {
    return {
      email: ''
    };
  },
  computed: {
    emailState () {
      return this.email.length > 2;
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
