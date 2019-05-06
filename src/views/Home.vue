<template>
  <div class="home">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <Banner msg="The Brewdog Beer World" class="cd-fixed-bg cd-fixed-bg--1"/>
    <div class="more-content">
      <div class="cd-scrolling-bg cd-scrolling-bg--color-0">
        <div class="ingredient cd-scrolling-bg__content">
          <div class="text-title">WHAT MAKES A PERFECT BEER?</div>
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
        <div class="text-subtitle">What transforms the cereal into beer!</div>
      </div>
      <div class="s">
        <div class="cd-fixed-bg cd-fixed-bg--5"></div>
        <div class="text">AND THE PERFECT BREWDOG RECIPE!</div>
        <div class="text-subtitle">Choose the perfect one for you!</div>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--6">
        <div class="text-click" to="/beers">
          <div @click="goToBeersList">Click here to find out more!</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue' // @ is an alias to /src

export default {
  name: 'Home',
   components: {
      Banner
  },

  methods: {
    goToBeersList(){
      window.location.href = '/beers'
    }
  }
}

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
  height: 100px;
}
.columns {
  height: 300px;
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
  margin-top: 20px;
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
.cd-fixed-bg.cd-fixed-bg--6 {
  background-image: url('../assets/diydogbooks_.jpg');
  max-width: 100%;
}

.cd-scrolling-bg {
  min-height: 100%;
}
.text-click {
  color: black;
  font-size: 26px;
  padding-top: 150px;
  font-weight: 600;
  font-family: 'Pathway Gothic One';
  cursor: pointer;
}
@media only screen and (max-width: 620px) {
  .text-title {
    font-size: 40px;
  }
  .text {
   font-size: 40px;
  }
  .text-subtitle {
    font-size: 24px;
  }
}
@media only screen and (max-width: 1024px) {
  .text-title {
    font-size: 40px;
  }
  .text {
  font-size: 40px;
  }
  .text-subtitle {
    font-size: 24px;
  }
}
</style>
