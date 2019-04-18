<template class="IPA">
  <!-- <div v-for="beer in oneBeer" :key="beer.id" class="eachBeer">{{ beer.name }}</div> -->

  <div class="ipa section">
    <div class="ipa-type columns">
      <!-- <div class="ipa-type-content column">
        <img src="../assets/storm_ipa.jpg" alt="Brewdog logo" width="150" height="250">
      </div>-->
      <div class="ipa-type-content column">
        <div
          v-for="beer in oneBeer"
          :key="beer.id"
          class="ipa-name has-text-weight-bold"
        >{{ beer.name }}</div>
        <div class="ipa-tagline">Islay Whisky Aged IPA</div>
        <div class="ipa-description has-text-justified">
          Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base,
          we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.
        </div>
      </div>
      <div class="ipa-type-content characteristics column has-text-left">
        <div
          v-for="beer in oneBeer"
          :key="beer.id"
          class="ipa-characteristic top"
        >abv: {{ beer.abv }}</div>
        <div v-for="beer in oneBeer" :key="beer.id" class="ipa-characteristic">id: {{ beer.id }}</div>
        <div v-for="beer in oneBeer" :key="beer.id" class="ipa-characteristic">ibu: {{ beer.ibu }}</div>
        <div class="ipa-characteristic">Malts</div>
        <div class="ipa-characteristic">Hops</div>
        <div class="ipa-characteristic">Food paring: oysters, hickory smoked ham, rocky road</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'BeerDetails',

  methods: {
    ...mapActions(['fetchRandom'])
  },

  computed: {
    ...mapState(['randomBeer']),
    ...mapGetters(['oneBeer'])
  },
  created() {
    this.fetchRandom()
  }
}
</script>
<style>
.ipa {
  background-color: #b26624;
}
.ipa-type {
  background-color: #454140;
  /* margin: 0 10px */
}
.ipa-type-content {
  height: 100%;
}
.ipa-name {
  margin-top: 50px;
  font-size: 30px;
  color: #b26624;
}
.ipa-tagline {
  color: #b26624;
  font-size: 20px;
}
.ipa-description {
  color: black;
  margin: 40px;
  font-size: 20px;
}
.ipa-characteristic {
  color: #b26624;
  margin: 10px;
  font-size: 20px;
}
.top {
  margin-top: 130px;
}
.characteristics {
  padding: 10px;
}
</style>
