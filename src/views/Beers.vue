<template>
  <div class="beers section">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->

    <p>Get to know our styles {{ $route.params.grad }}: {{ $route.params.min }} - {{ $route.params.max }}</p>
    <div class="container is-fluid">
      <BeerList
        v-bind:grad="$route.params.grad"
        v-bind:min="$route.params.min"
        v-bind:max="$route.params.max"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BeerList from '@/components/BeerList.vue' // @ is an alias to /src
import Footer from '@/components/Footer.vue' // @ is an alias to /src

@Component({
  components: {
    BeerList
  }
})
export default class Beers extends Vue {}
</script>

<style>
.beers.section {
  height: 100%;
}
p {
  margin-top: 100px;
  font-size: 40px;
  font-weight: 600;
}
</style>
