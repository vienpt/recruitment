<template>
  <b-row class="search-job-form" align-h="start">
    <b-col cols="12" :lg="lg" class="md-auto">
      <b-input-group class="mt-3">
        <template v-slot:append>
          <b-button-group>
            <!-- button search text -->
            <b-btn
              size="lg"
              class="search-job-form-button-text"
              variant="primary"
              @click="searchJob"
            >
              Find jobs
            </b-btn>
            <!-- button search icon -->
            <b-btn
              size="lg"
              class="search-job-form-button-icon"
              variant="primary"
              @click="searchJob"
            >
              <font-awesome-icon icon="search" />
            </b-btn>
          </b-button-group>
        </template>
        <!-- search job -->
        <b-form-input
          v-model="searchQuery"
          class="b-input-search"
          size="lg"
          placeholder="Search jobs"
          @focus="profession_flag = true"
          @blur="profession_flag = false"
        ></b-form-input>
      </b-input-group>
    </b-col>
    <!-- job suggested / trending -->
    <!-- job searchSuggestion -->
    <!-- <b-col v-if="profession_flag" cols="12" lg="8">
      <div class="searchSuggestion mt-2">
        <div class="d-flex justify-content-between">
          <h5 class="">
            Professions
          </h5>
          <button type="button" aria-label="Close" class="close">
            ×
          </button>
        </div>
        <ul v-for="item in filteredResources" :key="item">
          <li>
            <a class="" :href="item.uri" target="_blank">
              {{ item.title }}
              <font-awesome-icon :icon="item.icon" />
            </a>
          </li>
        </ul>
      </div>
    </b-col> -->
  </b-row>
</template>

<script>
export default {
  props: {
    lg: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      profession_flag: false,
      searchQuery: '',
      resources: [
        {
          title: 'Hardware',
          uri: '#',
          category: 'a',
          icon: 'chalkboard'
        },
        { title: 'Software', uri: '#', icon: 'warehouse' },
        { title: 'Web', uri: '#', icon: 'code' },
        { title: 'Mobile', uri: '#', icon: 'code' },
        { title: 'IOT', uri: '#', icon: 'cloud-download-alt' },
        { title: 'Cloud', uri: '#', category: 'b', icon: 'cloud' },
        {
          title: 'Infrastructure',
          uri: '#',
          category: 'c',
          icon: 'network-wired'
        },
        { title: 'DevOps', uri: '#', category: 'd', icon: 'code' }
      ]
    }
  },
  computed: {
    filteredResources() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return item.title.startsWith(this.searchQuery)
        })
      } else {
        return this.resources
      }
    }
  },
  methods: {
    searchJob() {
      this.$router.push({ path: '/search' })
    }
  }
}
</script>

<style scoped>
@media (max-width: 992px) {
  .search-job-form {
    align-items: center;
    align-self: center;
  }
  .search-job-form-button-text {
    display: none;
  }
}
@media (min-width: 992px) {
  .search-job-form-button-icon {
    display: none;
  }
  .searchSuggestion {
    max-width: 425px;
  }
}
.searchSuggestion {
  max-height: 230px;
  overflow-y: scroll;
  background-color: #f6f6f6;
}
</style>
