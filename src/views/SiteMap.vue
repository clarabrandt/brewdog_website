<template>
  <div class="sitemap">
    <h1>Sitemap</h1>
    <div class="urls">
      <a :href="'/home'">http://localhost:8080/home</a>
      <a :href="'/beers'">http://localhost:8080/beers</a>
      <a :href="'/beers/abv/0/3'">http://localhost:8080/beers/abv/0/3</a>
      <a :href="'/beersabv/3/6'">http://localhost:8380/beers/abv/3/6</a>
      <a :href="'/beersabv/6/9'">http://localhost:8380/beers/abv/6/9</a>
      <a :href="'/beersabv/9/15'">http://localhost:8380/beers/abv/9/15</a>
      <a :href="'/beersabv/15/35'">http://localhost:8380/beers/abv/15/35</a>
      <a :href="'/beersabv/35/60'">http://localhost:8380/beers/abv/35/60</a>
      <a :href="'/beers/ibu/0/20'">http://localhost:8080/beers/ibu/0/20</a>
      <a :href="'/beers/ibu/20/40'">http://localhost:8080/beers/ibu/20/40</a>
      <a :href="'/beers/ibu/40/60'">http://localhost:8080/beers/ibu/40/60</a>
      <a :href="'/beers/ibu/60/80'">http://localhost:8080/beers/ibu/60/80</a>
      <a :href="'/beers/ibu/80/100'">http://localhost:8080/beers/ibu/80/100</a>
      <a :href="'/beers/ibu/100/300'">http://localhost:8080/beers/ibu/100/300</a>
      <div class="urls_beers" v-for="index in 325" :key="index">
       <a :href="'/beers/' + index">http://localhost:8080/beers/{{index}}</a>
      </div>
      <a :href="'/sitemap'">http://localhost:8080/sitemap</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


export default {
  name: 'Sitemap'
}

</script>

<style>
.sitemap {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.urls{
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 30px;
}
  .urls_beers {
    display: flex;
  flex-direction: column;
  
  }

</style>
