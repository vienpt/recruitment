<template>
  <div class="d-flex flex-row mt-2">
    <ul class="list-inline text-lowercase">
      <span class="span-suggested text-capitalize text-sm-left">Suggested:</span>
      <li class="list-inline-item badge badge-info">
        <b-link
          href="#"
          to="/search"
          class="text-white text-decoration-none"
        >DevOps</b-link>
      </li>
      <li class="list-inline-item badge badge-info">
        <b-link
          href="#"
          to="/search"
          class="text-white text-decoration-none"
        >Web</b-link>
      </li>
      <li class="list-inline-item badge badge-info">
        <b-link
          href="#"
          to="/search"
          class="text-white text-decoration-none"
        >IOT</b-link>
      </li>
      <li class="list-inline-item badge badge-info">
        <b-link
          href="#"
          to="/search"
          class="text-white text-decoration-none"
        >Cloud</b-link>
      </li>
      <li class="list-inline-item badge badge-info">
        <b-link
          href="#"
          to="/search"
          class="text-white text-decoration-none"
        >Mobile</b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .span-suggested {
    display: none;
  }
}
</style>
