<template>
  <div class="banner">
    <b-navbar
      toggleable="sm"
      variant="faded"
      type="light"
    >
      <b-navbar-brand
        to="/"
        tag="h1"
        class="mb-0"
      >Recruiment</b-navbar-brand>
      <div>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      </div>

      <b-collapse
        id="nav-text-collapse"
        is-nav
      >
        <b-navbar-nav class="flex-start">
          <NLink
            to="/search"
            class="btn btn-md active btn-click1 btn-banner"
            role="button"
            aria-pressed="true"
          >Search jobs</NLink>
          <NLink
            to="/pricing"
            class="btn btn-md active btn-click1 btn-banner"
            role="button"
            aria-pressed="true"
          >Pricing</NLink>
          <NLink
            to="/alert"
            class="btn btn-md active btn-click1 btn-banner"
            role="button"
            aria-pressed="true"
          >Alert</NLink>
        </b-navbar-nav>
        <!-- user profile has authenticated -->
        <b-navbar-nav class="ml-auto">
          <b-link
            v-if="!$store.state.auths.auth"
            to="/user/signin"
            class="btn btn-md active btn-banner bg-light text-dark"
            role="button"
            aria-pressed="true"
          >
            Sign in
          </b-link>
          <b-nav-item-dropdown
            v-if="$store.state.auths.auth"
            right
          >
            <template v-slot:button-content>
              <b-img-lazy
                src="https://picsum.photos/35/35/?image=58"
                class="d-inline-block align-top"
                rounded="circle"
              ></b-img-lazy>
            </template>
            <b-dropdown-group header="Account">
              <b-dropdown-item>Setting & Privacy</b-dropdown-item>
              <b-dropdown-item>Languages</b-dropdown-item>
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group header="Manage">
              <b-dropdown-item to="/user/profile">Profile</b-dropdown-item>
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="logout">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  beforeMount () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll () {
      const divBanner = document.querySelector('.banner');
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        divBanner.classList.add('scrolled');
      } else {
        divBanner.classList.remove('scrolled');
      }
    },
    logout () {
      this.$store.commit('auths/setAuth', null);
      this.$router.push({ path: '/user/signin' });
    }
  }
};
</script>

<style scoped>
/* responsiveness */
@media (min-width: 576px) {
  .banner:not(.scrolled) {
    background: transparent;
  }
}
@media (max-width: 576px) {
  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9) !important;
  }
  .navbar-light .btn-banner {
    color: rgba(0, 0, 0, 0.9) !important;
  }
}

/* banner */
.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
}
.banner .navbar {
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.banner:not(.scrolled) .navbar {
  box-shadow: none;
}
/* .banner:not(.scrolled) .navbar-brand {
  color: white;
}
.banner:not(.scrolled) .btn-banner {
  color: white;
} */

/* nav */
.navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: transparent;
  outline: transparent;
}
.navbar-light:hover .navbar-toggler:hover {
  color: rgba(26, 94, 94, 0.5);
  outline: 1px dashed -webkit-focus-ring-color;
}
.navbar-light:focus .navbar-toggler:focus {
  outline: 1px dashed -webkit-focus-ring-color;
  border: 1px dashed;
}

/* menu button */
.btn-banner:focus {
  box-shadow: 0 0 0 0;
}
</style>
