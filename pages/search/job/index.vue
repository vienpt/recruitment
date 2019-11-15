<template>
  <div>
    <HeroPage
      :header="title"
      :image="require('assets/imgs/herojob.png')"
    />
    <b-container>
      <b-card class="px-4 py-4">
        <!-- show info job -->
        <b-row class="mb-5">
          <!-- show title job, address -->
          <b-col cols="12">
            <h1 class="display-5">Web Application: Vuejs, Reactjs</h1>
            <p class="text-muted">Ho Chi Minh</p>
          </b-col>
          <!-- button apply job and mark save  -->
          <b-col
            cols="12"
            lg="9"
            md="12"
            class="float-left py-2"
          >
            <b-button
              variant="primary"
              size="lg"
            >Apply now</b-button>
            <b-button
              variant="light"
              size="lg"
              class="btn-mark-save ml-4"
            >
              <font-awesome-icon :icon="['far', 'star']" />
              Save
            </b-button>
          </b-col>
          <!-- icon share job -->
          <b-col
            cols="12"
            lg="3"
            md="12"
            class="float-right py-2"
          >
            <b-button
              variant="light"
              class="btn-share-job"
            >
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </b-button>
            <b-button
              variant="light"
              class="btn-share-job ml-1"
            >
              <font-awesome-icon :icon="['far', 'envelope']" />
            </b-button>
            <b-button
              variant="light"
              class="btn-share-job ml-1"
            >
              <font-awesome-icon icon="link" />
            </b-button>
          </b-col>
        </b-row>
        <!-- job info -->
        <hr />
        <b-row class="py-3 row-job-info">
          <b-col
            v-for="(job, idx) in jobs.data"
            :key="idx"
            lg="6"
            sm="12"
            class="py-3"
          >
            <span class="label-info text-muted float-left">
              {{ job.label }}
            </span>
            <span class="label-text float-left">
              {{ job.value }}
            </span>
          </b-col>
        </b-row>
        <hr />
        <!-- about company -->
        <b-row class="pt-3 row-about-company">
          <b-col cols="12">
            <h3>Job Info</h3>
            <p class="pt-1 p-text">
              We’re currently in the process of building out our product
              features and you’ll be instrumental in the success of this
              initiative. You’ll be working with an agile cross-functional team
              with flexible working hours, and you’ll be responsible for the
              development, design and delivery of our high quality features. If
              you’re good at building high-quality software, work well in a
              team, and love learning, we should talk!
            </p>
          </b-col>
          <b-col
            cols="12"
            class="py-3"
          >
            <h5>About company</h5>
            <p class="pt-1 p-text">
              Founded in 2018, Otrafy is part of a new generation of startups,
              creating ripples within blockchain and supply chain industry. Even
              though we are an early stage startup, we are determined to
              establish ourselves and embark upon a solid growth trajectory to
              become a leading platform for supply chain. Otrafy delivers
              intuitive cloud-based solution to bring food transparency to our
              customer. We are working with selected food producers in US to
              increase their brand trust and showcase the procedure behind their
              product . As we are currently part of Techstar Accelerator cohort
              2019 and moving our head quarter to Minnesota, this is a time for
              us to expand our team and bring in new, creative and sustainable
              ideas.
            </p>
          </b-col>
        </b-row>
        <!-- detail job info -->
        <b-row class="pt-3 row-detail-job">
          <!-- responsibilities -->
          <b-col cols="12">
            <h3 class="pb-3">Responsibilities</h3>
            <ul
              v-for="(responsibility, idx) in jobs.responsibilities"
              :key="idx"
              class="pt-1"
            >
              <li>{{ responsibility.item }}</li>
            </ul>
          </b-col>
          <!-- qualifications -->
          <b-col
            cols="12"
            class="pt-3"
          >
            <h3 class="pb-3">Qualifications</h3>
            <ul
              v-for="(qualification, idx) in jobs.qualifications"
              :key="idx"
              class="pt-1"
            >
              <li>{{ qualification.item }}</li>
            </ul>
          </b-col>
          <!-- Your Skills and Experience -->
          <b-col
            cols="12"
            class="pt-3"
          >
            <h3 class="pb-3">Your Skills and Experience</h3>
            <p class="p-text pt-1">{{ jobs.skills.des }}</p>
            <ul
              v-for="(skill, idx) in jobs.skills.items"
              :key="idx"
              class="pt-1"
            >
              <li>{{ skill.text }}</li>
            </ul>
          </b-col>
        </b-row>
        <!-- apply now again -->
        <hr />
        <b-row class="mt-5">
          <!-- button apply job and mark save  -->
          <b-col
            cols="12"
            lg="9"
            md="12"
            class="float-left py-2"
          >
            <b-button
              variant="primary"
              size="lg"
            >Apply now</b-button>
            <b-button
              variant="light"
              size="lg"
              class="btn-mark-save ml-4"
            >
              <font-awesome-icon :icon="['far', 'star']" />
              Save
            </b-button>
          </b-col>
          <!-- icon share job -->
          <b-col
            cols="12"
            lg="3"
            md="12"
            class="float-right py-2"
          >
            <b-button
              variant="light"
              class="btn-share-job"
            >
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </b-button>
            <b-button
              variant="light"
              class="btn-share-job ml-1"
            >
              <font-awesome-icon :icon="['far', 'envelope']" />
            </b-button>
            <b-button
              variant="light"
              class="btn-share-job ml-1"
            >
              <font-awesome-icon icon="link" />
            </b-button>
          </b-col>
        </b-row>
      </b-card>
      <!-- similar job -->
      <div class="similar-job my-5">
        <h5 class="text-muted text-center pb-3">Similar jobs</h5>
        <ul class="similar-job-items">
          <li
            class="py-4 px-4"
            border-black
          >
            <b-link>
              <h5 class="text-muted">Web Cloud</h5>
              <div>
                <span class="text-muted">Ho Chi Minh | Cloud</span>
              </div>
            </b-link>
          </li>
        </ul>
      </div>
      <!-- back to job search -->
      <div class="my-5">
        <b-link class="btn-view-all-job text-muted" to="/search">View all jobs</b-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage';

export default {
  middleware: 'authenticated',
  components: {
    HeroPage
  },
  data () {
    return {
      title: 'Apply Job',
      jobs: {
        data: [
          { label: 'Job ID', value: '3242786' },
          { label: 'Date posted', value: '15 Jun 2019' },
          { label: 'Duration', value: '6 months ago' },
          { label: 'Profession', value: 'Web developer' },
          { label: 'Role type', value: 'Junior develop' },
          { label: 'Employment type', value: 'Full-Time' }
        ],
        responsibilities: [
          {
            item: 'Drive monthly and quarterly business processes.'
          },
          { item: 'Define performance-based business metrics.' },
          {
            item:
              'Coordinate financial support within or across subsidiaries or regions.'
          },
          {
            item:
              'Develop business investment and sales strategy recommendations.'
          },
          {
            item:
              'Create financial models for proposed market investments and sales programs.'
          }
        ],
        qualifications: [
          {
            item: 'MBA degree'
          },
          {
            item: 'FDB degree'
          },
          {
            item: 'LKDIO degree'
          }
        ],
        skills: {
          des:
            'In addition to being awesome, responsible, down to earth, having a great sense of humor, you have a strong desire to continually master your craft, you also bring:',
          items: [
            { text: '3+ years of experience relevant experience' },
            { text: 'C#, Non-relational database (CosmoDb)' },
            { text: 'Experience with ASP.Net (.Net core) and Visual studio' },
            { text: 'Experience with working in an Agile environment' },
            { text: 'Strong OO design and development experience' },
            { text: 'Component based front-end solutions' },
            { text: 'Comfortable with working remotely and be your own boss' }
          ]
        }
      }
    };
  },
  mounted () { },
  methods: {}
};
</script>

<style lang="scss" scoped>
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

.btn-mark-save {
  background-color: transparent;
  border: none;
}

.row-job-info {
  .label-info {
    width: 150px;
  }
  .label-text {
    width: calc(100% - 150px);
  }
}

.p-text {
  line-height: 1.8rem;
}

.similar-job-items {
  list-style: none;
  padding-left: 0px !important;

  li {
    background-color: whitesmoke;
  }
  li:hover {
    background-color: rgb(207, 207, 207);
  }
  a {
    text-decoration: none;
  }
}

.btn-view-all-job {
  text-decoration: underline;
}
</style>
