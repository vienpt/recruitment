<template>
  <div class="banner">
    <b-navbar toggleable="sm" variant="faded" type="light">
      <b-navbar-brand to="/" tag="h1" class="mb-0">Recruiment</b-navbar-brand>
      <div>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      </div>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <a
            href="#"
            class="btn btn-md active btn-click1 btn-banner"
            role="button"
            aria-pressed="true"
            >Click1</a
          >
          <a
            href="#"
            class="btn btn-md active btn-click2 btn-banner"
            role="button"
            aria-pressed="true"
            >Click2</a
          >
          <a
            href="#"
            class="btn btn-md active btn-click3 btn-banner"
            role="button"
            aria-pressed="true"
            >Click3</a
          >
          <a
            href="#"
            class="btn btn-md active btn-click4 btn-banner"
            role="button"
            aria-pressed="true"
            >Click4</a
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeMount() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const divBanner = document.querySelector('.banner')
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        divBanner.classList.add('scrolled')
      } else {
        divBanner.classList.remove('scrolled')
      }
    }
  }
}
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
