<template>
  <div class="home">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <Banner msg="The Brewdog Beer World" class="cd-fixed-bg cd-fixed-bg--1"/>
    <div class="more-content">
      <div class="cd-scrolling-bg cd-scrolling-bg--color-0">
        <div class="ingredient cd-scrolling-bg__content">
          <div class="text-title">What do you need to make the perfect beer?</div>
        </div>
      </div>
      <div class="text">PURE WATER</div>
      <div class="text-subtitle">No contaminants in our beer!</div>
      <div class>
        <div class="cd-fixed-bg cd-fixed-bg--2"></div>
        <div class="text">THE BEST HOPS</div>
        <div class="text-subtitle">To give the beer the perfect aroma and bitterness</div>
      </div>
      <div class>
        <div class="cd-fixed-bg cd-fixed-bg--3"></div>
        <div class="text">MALT</div>
        <div class="text-subtitle">
          Responsible for its taste, color and aroma,
          it is considered the soul of the beer!
        </div>
      </div>

      <div class="s">
        <div class="cd-fixed-bg cd-fixed-bg--4"></div>
        <div class="text">YEST</div>
        <div class="text-subtitle">What transforms our cereal into beer!</div>
      </div>
      <div class="s">
        <div class="cd-fixed-bg cd-fixed-bg--5"></div>
        <div class="text">AND THE PERFECT BREWDOG RECIPE!</div>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--6">
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
  display: flex;
  flex-direction: column;
}

.ingredient {
  background-color: bisque;
}

.text-title {
  padding: 150px 0;
  font-size: 3rem;
  font-weight: 600;
  height: 200px;
  margin-bottom: 50px;
  text-align: center;
}
.columns {
  height: 300px;
  /* width: 400px; */
}
.column {
  width: 50%;
}
.cd-fixed-bg {
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
}
.text {
  background-color: white;
  font-size: 3rem;
  font-weight: 600;
  /* color: white; */
}
.text-subtitle {
  font-size: 2rem;
  font-family: cursive, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
    sans-serif;
  padding: 10px;
}

.cd-fixed-bg.cd-fixed-bg--1 {
  background-image: url('../assets/brewdog.jpg');
}

.cd-fixed-bg.cd-fixed-bg--2 {
  background-image: url('../assets/water.jpg');
}
.cd-fixed-bg.cd-fixed-bg--3 {
  background-image: url('../assets/hops2.jpg');
  max-width: 100%;
}
.cd-fixed-bg.cd-fixed-bg--4 {
  background-image: url('../assets/malt.jpg');
  max-width: 100%;
}
.cd-fixed-bg.cd-fixed-bg--5 {
  background-image: url('../assets/beeryeast.jpg');
  max-width: 100%;
}

.cd-scrolling-bg {
  min-height: 100%;
}
</style>
