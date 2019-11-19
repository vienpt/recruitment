<template>
  <b-container fluid>
    <div>
      <b-navbar
        type="dark"
        variant="dark"
        :sticky="true"
        fixed="top"
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            <font-awesome-icon icon="arrow-left" />
            <strong><u>Back to Recruitment</u></strong>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <nuxt class="mt-5" />
  </b-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
}
</style>
