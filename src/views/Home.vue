<template>
  <div class="home">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <Banner msg="The Brewdog Beer World"/>
    <div class="more-content">
      <div>What do you need to make the perfect beer?</div>
      <div class="columns is-2-desktop">
        <div class="column has-background-link">Water</div>
        <div class="column has-background-success">Hops</div>
        <div class="column has-background-dark">Malt</div>
        <div class="column has-background-warining">Yeast</div>
        <div class="column">The Perfect Brewdog Recipe!</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue' // @ is an alias to /src

@Component({
  components: {
    Banner
  }
})
export default class Home extends Vue {}
</script>

<style>
.home {
  height: 100%;
}
.more-content {
  margin-top: 200px;
}
.columns {
  height: 300px;
  /* width: 400px; */
}
</style>
