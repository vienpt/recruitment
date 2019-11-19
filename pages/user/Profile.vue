<template>
  <div>
    <!-- hero info -->
    <b-jumbotron
      class="d-flex align-self-center text-center justify-content-center bg-dark text-white"
      header="Hi, Vien!"
      header-level="4"
      :lead="heroInfo.name + ', ' + heroInfo.title"
      fluid
    >
      <b-media class="pt-3">
        <!-- image profile -->
        <template v-slot:aside>
          <b-img-lazy
            src="https://picsum.photos/64/64/?image=58"
            class="d-inline-block align-top"
            rounded="circle"
          ></b-img-lazy>
        </template>
        <!-- show info profile here -->
        <h5 class="text-capitalize text-left">Vien Pham</h5>
        <p class="text-capitalize text-left">
          Software developer
        </p>
      </b-media>
    </b-jumbotron>

    <!-- section tabs -->
    <b-container>
      <div>
        <b-tabs
          v-model="tabIndex"
          class="py-3"
          content-class="mt-3"
          fill
          :no-nav-style="true"
        >
          <!-- example account tab -->
          <b-tab :title-link-class="linkClass(0)" title="Account">
            <!-- separate title name -->
            <h3 class="px-3">Login info</h3>
            <!-- list group item -->
            <b-list-group>
              <!-- line separate -->
              <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
              <!-- collapse Email -->
              <b-list-group-item
                v-b-toggle.collapse-email
                href="#"
                class="flex-column align-items-start border-left-0 border-right-0 border-top-0 border-bottom-0"
              >
                <div>
                  <h5 class="display-5">Email address</h5>
                  <p class="lead">Add or edit your email account</p>
                </div>
              </b-list-group-item>
              <!-- content email -->
              <b-collapse id="collapse-email">
                <b-card class="ml-5 border-left-0 border-right-0 border-top-0 border-bottom-0">
                  <p class="mb-1">
                    Your email address: <span class="badge badge-dark">phamthevien@archway.co.jp</span>
                  </p>

                  <b-btn
                    class="mt-3"
                    variant="primary"
                    squared
                  >Add new email address</b-btn>
                </b-card>
              </b-collapse>
              <!-- line separate -->
              <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
              <!-- collapse Password -->
              <b-list-group-item
                v-b-toggle.collapse-password
                href="#"
                class="flex-column align-items-start border-left-0 border-right-0 border-top-0 border-bottom-0"
              >
                <div>
                  <h5 class="display-5">Change password</h5>
                  <p class="lead">Choose a unique password for protect your account</p>
                </div>
              </b-list-group-item>
              <!-- content password -->
              <b-collapse id="collapse-password">
                <b-card class="ml-5 border-left-0 border-right-0 border-top-0 border-bottom-0">
                  <b-form-group>
                    <b-row
                      role="group"
                      class="d-flex flex-column"
                    >
                    <!-- Current password  -->
                      <b-col
                        cols="12"
                        lg="6"
                        md="6"
                      >
                        <label
                          class="text-muted"
                          for="input-current-password"
                        >Enter your current password</label>
                        <b-form-input
                          id="input-current-password"
                          type="text"
                          trim
                        ></b-form-input>
                      </b-col>
                      <!-- new password  -->
                      <b-col
                        cols="12"
                        lg="6"
                        md="6"
                        class="mt-3"
                      >
                        <label
                          class="text-muted"
                          for="input-new-password"
                        >Enter your new password</label>
                        <b-form-input
                          id="input-new-password"
                          type="email"
                          trim
                        ></b-form-input>
                      </b-col>
                      <!-- Confirm password  -->
                      <b-col
                        cols="12"
                        lg="6"
                        md="6"
                        class="mt-3"
                      >
                        <label
                          class="text-muted"
                          for="input-confirm-password"
                        >Confirm your new password</label>
                        <b-form-input type="password"></b-form-input>
                      </b-col>
                      <b-col
                        cols="12"
                        class="mt-3"
                      >
                        <b-btn
                          variant="primary"
                          squared
                        >
                          Join now
                        </b-btn>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-card>
              </b-collapse>
              <!-- line separate -->
              <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">
            </b-list-group>
          </b-tab>
          <!-- example Manage job tab -->
          <b-tab :title-link-class="linkClass(1)" title="Manage jobs">
            <!-- put content here .... -->
            <p>I'm the second tab</p>
          </b-tab>
          <!-- example setting tab -->
          <b-tab :title-link-class="linkClass(2)" title="Setting">
            <!-- put content here .... -->
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  middleware: 'authenticated',
  layout: 'profile',
  data () {
    return {
      heroInfo: {
        name: 'Vien',
        title: 'you are the boss of your account. 😉'
      },
      tabIndex: 0
    };
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return [
          'border-bottom',
          'border-primary',
          'text-primary',
          'font-weight-bold',
          'h5'
        ];
      } else {
        return [
          'border-bottom',
          'bg-transparent',
          'text-dark',
          'font-weight-bold',
          'h5'
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.jumbotron {
  margin-bottom: 0rem;
}
</style>
