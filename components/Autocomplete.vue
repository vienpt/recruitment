<template>
  <div class="panel panel-default">
    <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input
          v-model="searchQuery"
          class="form-control"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="panel-body" style="max-height: 200px;overflow-y: scroll;">
      <table v-if="resources.length" class="table">
        <thead>
          <tr>
            <th>Professions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredResources" :key="item">
            <td>
              <a :href="item.uri" target="_blank">{{ item.title }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      resources: [
        {
          title: 'IT Hardware',
          uri: 'aaaa.com',
          category: 'a',
          icon: 'chalkboard'
        },
        { title: 'IT Software', uri: 'aaaa.com', category: 'a', icon: null },
        { title: 'Web', uri: 'aaaa.com', category: 'a', icon: null },
        { title: 'Mobile', uri: 'bbbb.com', category: 'b', icon: null },
        { title: 'IOT', uri: 'bbbb.com', category: 'b', icon: null },
        { title: 'Cloud', uri: 'bbbb.com', category: 'b', icon: null },
        { title: 'Infrastructure', uri: 'cccc.com', category: 'c', icon: null },
        { title: 'DevOps', uri: 'dddd.com', category: 'd', icon: null }
      ]
    };
  },
  computed: {
    filteredResources () {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return item.title.startsWith(this.searchQuery);
        });
      } else {
        return this.resources;
      }
    }
  }
};
</script>

<style></style>
