<template>
  <div class="home">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <Banner msg="The Brewdog Beer World" class="cd-fixed-bg cd-fixed-bg--1"/>
    <div class="more-content">
      <div class="cd-scrolling-bg cd-scrolling-bg--color-0">
        <div class="ingredient cd-scrolling-bg__content">
          <p>What do you need to make the perfect beer?</p>
        </div>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--2">
        <h1>WATER</h1>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--3 column">
        <h1>HOPS</h1>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--4 column">
        <h1>HOPS</h1>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--5 column">
        <h1>HOPS</h1>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--6 column">
        <h1>HOPS</h1>
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
.cd-fixed-bg {
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
}

.cd-fixed-bg.cd-fixed-bg--1 {
  background-image: url('../assets/brewdog.jpg');
}

.cd-fixed-bg.cd-fixed-bg--2 {
  background-image: url('../assets/water2.jpg');
  background-size: 50%;
  background-position-x: left;
  /* max-width: 50%; */
  height: 200px;
}
.cd-fixed-bg.cd-fixed-bg--3 {
  background-image: url('../assets/hops2.jpg');
  background-size: 50%;
  max-width: 100%;
  background-position-x: right;
}

.cd-scrolling-bg {
  min-height: 100%;
}
</style>
