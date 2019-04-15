<template>
  <div class="beers section">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <FilterByIBU/>
    <p>Get to know our styles {{ $route.params.grad }} - {{ $route.params.min }} - {{ $route.params.max }}</p>
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <BeerList
            v-bind:grad="$route.params.grad"
            v-bind:min="$route.params.min"
            v-bind:max="$route.params.max"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BeerList from '@/components/BeerList.vue' // @ is an alias to /src
import BeerABV from '@/components/BeerABV.vue' // @ is an alias to /src
import FilterByIBU from '@/components/FilterByIBU.vue' // @ is an alias to /src

@Component({
  components: {
    BeerList,
    FilterByIBU
  }
})
export default class Beers extends Vue {}
</script>

<style>
.beers {
  height: 100%;
}
p {
  margin-top: 50px;
  font-size: 40px;
  font-weight: 600;
}
.card {
  height: 400px;
}
.card-content {
  height: 100%;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 88%;
  border: 1px solid #f1f1f1;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  padding: 30px 0;
  background-color: gold;
  height: 100%;
  color: white;
  transform: rotateY(180deg);
}
.back-blond {
  background-color: gold;
}
.back-ipa {
  background-color: #b26624;
}
.beer-name {
  padding: 5px;
}
.blond {
  background-color: gold;
}
.red-ale {
  background-color: #6b0909;
}
.porter {
  background-color: #2c2323;
}
.ipa {
  background-color: #b26624;
}
.wheat {
  background-color: #c7c33d;
}
.scotch-ale {
  background-color: #2e150f;
}
.season {
  background-color: #f5720f;
}
.no-label {
  background-color: #4f0b76;
}
</style>
