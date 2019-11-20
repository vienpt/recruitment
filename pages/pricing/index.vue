<template>
  <div>
    <!-- herosearch -->
    <HeroPage
      :header="title"
      :image="require('assets/imgs/heropricing.png')"
    />
    <blockquote class="blockquote text-center">
      <p class="mb-0 h4">Base on expected level of candidate</p>
      <p class="mb-0 lead">Manager and up: 2 credits</p>
      <p class="mb-0 lead">Below Manager: 1 credit</p>
    </blockquote>
    <!-- plans -->
    <b-container>
      <div class="d-flex flex-xl-row flex-lg-column flex-md-column flex-sm-column justify-content-around">
        <!-- standard pricing -->
        <b-card class="c-standard shadow m-2 border-top-0 border-bottom-0 border-left-0 border-right-0">
          <header>
            <h5><b-badge variant="info text-capitalize">standard</b-badge></h5>
            <p class="h2 font-weight-bold mb-3">$99
              <small class="text-muted">/month</small>
            </p>
            <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </header>
          <ul class="list-unstyled">
            <li>Paragraphs</li>
            <li>Words</li>
            <li>Bytes</li>
            <li>List</li>
          </ul>
          <footer class="pt-3">
            <p>
              <b-btn variant="info shadow font-weight-bold" block>Get standard</b-btn>
            </p>
          </footer>
        </b-card>
        <!-- pro pricing -->
        <b-card class="c-pro shadow m-2 border-top-0 border-bottom-0 border-left-0 border-right-0">
          <!-- info pricing -->
          <header>
            <!-- plan name -->
            <h5><b-badge variant="primary text-capitalize">pro</b-badge></h5>
            <!-- plan price -->
            <p class="h2 font-weight-bold mb-3">$199
              <small class="text-muted">/month</small>
            </p>
            <!-- description plan -->
            <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </header>
          <!-- specifications -->
          <ul class="list-unstyled">
            <li>Paragraphs</li>
            <li>Words</li>
            <li>Bytes</li>
            <li>List</li>
          </ul>
          <!-- footer button -->
          <footer class="pt-3">
            <p>
              <b-btn variant="primary shadow font-weight-bold" block>Get pro</b-btn>
            </p>
          </footer>
        </b-card>
        <!-- business pricing -->
        <b-card class="c-business shadow m-2 border-top-0 border-bottom-0 border-left-0 border-right-0">
          <header>
            <h5><b-badge variant="business text-capitalize">business</b-badge></h5>
            <p class="h2 font-weight-bold mb-3">$299
              <small class="text-muted">/month</small>
            </p>
            <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </header>
          <ul class="ul-business list-unstyled">
            <li>Paragraphs</li>
            <li>Words</li>
            <li>Bytes</li>
            <li>List</li>
          </ul>
          <footer class="pt-3">
            <p>
              <b-btn variant="business shadow font-weight-bold" block>Contact sales</b-btn>
            </p>
          </footer>
        </b-card>
      </div>
    </b-container>
    <p class="display-4 text-center p-5">Plan details</p>
    <!-- plan details -->
    <b-container>
      <table class="table border">
        <thead>
          <tr class="text-center">
            <th scope="col">
              <span class="sr-only">Features</span>
            </th>
            <th scope="col">
              <b-badge variant="info text-capitalize">standard</b-badge>
            </th>
            <th scope="col">
              <b-badge variant="primary text-capitalize">pro</b-badge>
            </th>
            <th scope="col">
              <b-badge variant="business text-capitalize">business</b-badge>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="rowgroup" colspan="4">Feature 1</th>
          </tr>
          <tr class="text-center">
            <th scope="row" class="text-left text-muted font-weight-normal">Feature 1.1</th>
            <td>
              <span>$15/user/month</span>
            </td>
            <td>
              <span>$30/user/month</span>
            </td>
            <td>
              <span>$45/user/month</span>
            </td>
          </tr>
          <tr class="text-center">
            <th scope="row" class="text-left text-muted font-weight-normal">Feature 1.2</th>
            <td>
              <span>$15/user/month</span>
            </td>
            <td>
              <span>$30/user/month</span>
            </td>
            <td>
              <span>$45/user/month</span>
            </td>
          </tr>
          <tr>
            <th scope="rowgroup" colspan="4">Feature 2</th>
          </tr>
          <tr class="text-center">
            <th scope="row" class="text-left text-muted font-weight-normal">Feature 2.1</th>
            <td>
              <span>$15/user/month</span>
            </td>
            <td>
              <span>$30/user/month</span>
            </td>
            <td>
              <span>$45/user/month</span>
            </td>
          </tr>
          <tr class="text-center">
            <th scope="row" class="text-left text-muted font-weight-normal">Feature 2.1</th>
            <td>
              <span>$15/user/month</span>
            </td>
            <td>
              <span>$30/user/month</span>
            </td>
            <td>
              <span>$45/user/month</span>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
import HeroPage from '@/components/HeroPage';

export default {
  components: {
    HeroPage
  },
  data () {
    return {
      title: 'Pricing plans'
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .flex-sm-column {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      flex-direction: column !important;
  }
}

.card li::before {
  content: "✓";
  border-radius: 50%;
  background-color: black;
  color: #fff;
  left: 0;
  margin-right: 10px;
  display: inline-block;
  font-size: .618em;
  font-weight: 900;
  height: 1.618em;
  line-height: 1.75;
  position: relative;
  text-align: center;
  width: 1.618em;
}

.badge-business, .btn-business {
  background-color: $orange;
  color: $white;
}

.c-standard li::before {
  background-color: $info;
}
.c-pro li::before {
  background-color: $primary;
}
.c-business li::before {
  background-color: $orange;
}
</style>
