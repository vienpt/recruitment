<template>
  <div>
    <b-container>
      <b-jumbotron
        border-variant="white"
        bg-variant="white"
      >
        <template v-slot:header>
          <h3 class="text-center text-muted pb-3">Register</h3>
        </template>
        <!-- have an account  -->
        <div class="mt-3">
          <span>Already have an account?</span>
          <b-link to="/user/signin">Login</b-link>
        </div>
        <b-card class="mt-3">
          <b-form-group>
            <!-- login by another social -->
            <div class="my-3 text-center">
              <b-btn
                to="#"
                size="lg"
                variant="outline-primary"
                outlined
                block
              >Sign up with other Social</b-btn>
            </div>
            <div class="link-seperator d-flex justify-content-center my-3">
              <span>or</span>
            </div>
            <!-- First name, last name  -->
            <div role="group">
              <b-row>
                <b-col cols="6">
                  <label
                    class="text-muted"
                    for="input-firstname"
                  >Firstname</label>
                  <b-form-input
                    id="input-firstname"
                    v-model="firstname"
                    aria-describedby="input-live-help input-live-feedback"
                    size="lg"
                    type="text"
                    trim
                  ></b-form-input>
                  <!-- This will only be shown if the preceding input has an invalid state -->
                  <b-form-invalid-feedback id="input-live-feedback">
                    Enter at least 3 letters
                  </b-form-invalid-feedback>
                </b-col>
                <b-col cols="6">
                  <label
                    class="text-muted"
                    for="input-lastname"
                  >Lastname</label>
                  <b-form-input
                    id="input-lastname"
                    v-model="lastname"
                    aria-describedby="input-live-help input-live-feedback"
                    size="lg"
                    type="text"
                    trim
                  ></b-form-input>
                  <!-- This will only be shown if the preceding input has an invalid state -->
                  <b-form-invalid-feedback id="input-live-feedback">
                    Enter at least 3 letters
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </div>
            <!-- email group -->
            <div role="group" class="mt-3">
              <label
                class="text-muted"
                for="input-email"
              >Email</label>
              <b-form-input
                id="input-email"
                v-model="email"
                required
                :state="null"
                aria-describedby="input-live-help input-live-feedback"
                size="lg"
                type="email"
                trim
              ></b-form-input>
              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">
                Enter at least 3 letters
              </b-form-invalid-feedback>
            </div>
            <!-- password group -->
            <div role="group" class="mt-3">
              <label
                class="text-muted"
                for="input-password"
              >Password</label>
              <b-form-input
                size="lg"
                type="password"
              ></b-form-input>
            </div>
            <!-- agree with the term and conditions -->
            <div role="group" class="mt-3">
              <b-form-checkbox
                id="checkbox-term"
                v-model="termcondition"
                name="checkbox-term"
                value="accepted"
                unchecked-value="not_accepted"
                size="md"
                class="float-left"
              >
                I agree to the
                <b-link to="#">Terms & Conditions</b-link>
              </b-form-checkbox>
            </div>
            <!-- button login group -->
            <b-row role="group">
              <b-col class="mt-3">
                <b-btn
                  size="lg"
                  variant="primary"
                  block
                >
                  Join now
                </b-btn>
              </b-col>
            </b-row>
          </b-form-group>
        </b-card>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'signin',
  data () {
    return {
      email: '',
      termcondition: 'not_accepted',
      firstname: '',
      lastname: ''
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
