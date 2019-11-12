<template>
  <b-row class="search-suggested" align-h="start">
    <b-col cols="12" lg="7" class="md-auto mt-2">
      <span>Suggested:</span>
      <ul class="ul_trending ul_custom">
        <li class="li_trending_items">
          <b-link href="#" to="/search">DevOps</b-link>
        </li>

        <li class="li_trending_items">
          <b-link href="#" to="/search">Web</b-link>
        </li>
        <li class="li_trending_items">
          <b-link href="#" to="/search">IOT</b-link>
        </li>
        <li class="li_trending_items">
          <b-link href="#" to="/search">Cloud</b-link>
        </li>
        <li class="li_trending_items">
          <b-link href="#" to="/search">Mobile</b-link>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {}
</script>

<style scoped>
.ul_trending {
  display: inline;
}
.ul_custom {
  padding-left: 0;
  list-style: none;
}

.li_trending_items {
  background-color: #dee2e6;
  border-radius: 5px;
  padding: 0.25rem;
  font-size: 0.9rem;
  display: inline;
  text-transform: lowercase;
}

a {
  color: gray;
  text-decoration: none;
}
</style>
