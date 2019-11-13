<template>
  <div>
    <!-- herosearch -->
    <HeroPage
      :header="heroInfo.title"
      :image="require('assets/imgs/herosearch.png')"
    />
    <b-container fluid>
      <!-- panel search job -->
      <div class="panel-searchjob mt-5">
        <!-- component searchjob -->
        <SearchJob :lg="lg" />
        <div class="pt-3">
          <b-alert show dismissible fade variant="info">
            <b-badge>filter</b-badge>
          </b-alert>
        </div>
      </div>
      <b-row class="mt-3">
        <!-- header show filter search -->
        <b-col lg="4" md="12" class="mb-5">
          <b-card class="text-left">
            <b-row class="card-body pb-3">
              <b-col xl="9" lg="8" md="8" sm="12">
                <h4>Filter your search</h4>
              </b-col>
            </b-row>
            <div role="tablist mt-5">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button v-b-toggle.accordion-1 block>Condition 1</b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-form-group>
                      <b-form-checkbox-group
                        v-model="filter.selected"
                        :options="filter.options"
                        name="flavour-2a"
                        stacked
                      ></b-form-checkbox-group>
                    </b-form-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
            <div role="tablist mt-5">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button v-b-toggle.accordion-2 block>Condition 2</b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-form-group>
                      <b-form-checkbox-group
                        v-model="filter.selected"
                        :options="filter.options"
                        name="flavour-2a"
                        stacked
                      ></b-form-checkbox-group>
                    </b-form-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
            <div role="tablist mt-5">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button v-b-toggle.accordion-3 block>Condition 3</b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-form-group>
                      <b-form-checkbox-group
                        v-model="filter.selected"
                        :options="filter.options"
                        name="flavour-2a"
                        stacked
                      ></b-form-checkbox-group>
                    </b-form-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-card>
        </b-col>
        <!-- header show info result search and sort -->
        <b-col lg="8" md="12">
          <b-card class="text-left">
            <b-row class="card-body pb-3">
              <b-col xl="9" lg="8" md="8" sm="12">
                <h4>Showing 1 - 20 of 1000 jobs</h4>
              </b-col>
              <b-col xl="3" lg="4" md="4" sm="12">
                <b-form-select
                  v-model="sortby.selected"
                  :options="sortby.options"
                  value-field="value"
                  text-field="text"
                ></b-form-select>
              </b-col>
            </b-row>
          </b-card>
          <!-- show result job search -->
          <b-card
            v-for="job in jobs"
            id="my-table"
            :key="job.id"
            :items="job"
            :per-page="perPage"
            :current-page="currentPage"
            class="show-search-job pt-3"
          >
            <b-card-body>
              <!-- name job -->
              <b-card-title>
                <b-link to="/search/job"> {{ job.name }}</b-link>
              </b-card-title>
              <!-- info job | tab job | date job -->
              <b-card-sub-title class="mb-2"
                >{{ job.address }} | {{ job.type }} |
                {{ job.date }}</b-card-sub-title
              >
              <!-- description -->
              <b-card-text>
                {{ job.des }}
              </b-card-text>
            </b-card-body>
          </b-card>
          <div class="overflow-auto pt-3 float-right">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage';
import SearchJob from '@/components/SearchJob';

export default {
  components: {
    HeroPage,
    SearchJob
  },
  data () {
    return {
      heroInfo: {
        title: 'Your Search'
      },
      lg: 12,
      perPage: 3,
      currentPage: 1,
      filter: {
        selected: [],
        options: [
          { value: 'c', text: 'Most relevant' },
          { value: 'a', text: 'Most recent' },
          { value: 'b', text: 'Most popular' }
        ]
      },
      sortby: {
        selected: 'c',
        options: [
          { value: 'c', text: 'Most relevant' },
          { value: 'a', text: 'Most recent' },
          { value: 'b', text: 'Most popular' }
        ]
      },
      jobs: [
        {
          id: 1,
          name: 'Web developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 2,
          name: 'Mobile developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 3,
          name: 'Cloud',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 4,
          name: 'Web developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 5,
          name: 'Mobile developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 6,
          name: 'Cloud',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 7,
          name: 'Web developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 8,
          name: 'Mobile developer',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
          id: 9,
          name: 'Cloud',
          address: 'Ho Chi Minh',
          type: 'Tester',
          date: '30 Jun 2019',
          des:
            'Some quick example text to build on the card title and make up the bulk of the cards content.'
        }
      ]
    };
  },
  computed: {
    rows () {
      return this.jobs.length;
    }
  }
};
</script>

<style scoped>
@media (max-width: 992px) {
  .container-fluid {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
}

.container-fluid {
  padding-right: 100px;
  padding-left: 100px;
}

.panel-searchjob {
  background-color: whitesmoke;
  width: 100%;
  padding: 30px 30px 30px 30px;
}
.panel-title {
  padding: 0 25px 0 25px;
}

.sort-span {
  display: inline;
  vertical-align: -webkit-baseline-middle;
}

.show-search-job {
  border-top: 0.5px dashed;
}

.alert {
  max-width: 150px;
}
</style>
