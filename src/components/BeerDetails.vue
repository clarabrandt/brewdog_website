<template class="beer-details">
  <div class="selected-beer" v-if="selectedBeer">
    <div class="selected-beer--name">
      <div class="beer-name">{{ selectedBeer.name }}</div>
    </div>
    <div class="selected-beer--basics">
      <div class="beer-image">
        <img :src="selectedBeer.image_url">
      </div>
      <div class="beer-basics">
        <div class="beer-description">{{ selectedBeer.tagline }}</div>
        <div class="beer-basics--content">
          <div class="beer-description">{{ selectedBeer.description }}</div>
          <div class="beer-basics--items">
            <div class="beer-characteristic top">ABV: {{ selectedBeer.abv }}%</div>
            <div class="beer-characteristic">IBU: {{ selectedBeer.ibu }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'BeerDetails',
  props: ['id'],

  methods: {
    ...mapActions(['fetchRandom', 'fetchBeerById'])
  },

  computed: {
    ...mapState(['selectedBeer']),
    ...mapGetters(['selectedBeer'])
  },
  created() {
    if (this.id === 'random') {
      console.log(this.fetchRandom())
    } else {
      this.fetchBeerById(this.id)
    }
  }
}
</script>
<style lang="scss">
.selected-beer {
  display: flex;
  flex-direction: column;
  margin: 0 120px;
  .selected-beer--basics {
    display: flex;
    img {
      padding: 40px 60px;
      max-height: 570px;
      width: 150px;
    }
  }
}
.beer {
  background-color: #b26624;
}
.beer-type {
  background-color: white;
  /* margin: 0 10px */
}
.beer-type-content {
  height: 100%;
}
.beer-name {
  margin-top: 30px;
  // padding-left: 150px;
  font-size: 30px;
  color: #b26624;
}
.beer-tagline {
  color: #b26624;
  font-size: 20px;
}
.beer-description {
  color: black;
  text-align: justify;
  margin: 20px 0 40px 0;
  padding: 0 150px;
  font-size: 20px;
}
.beer-characteristic {
  color: #b26624;
  margin: 10px;
  font-size: 20px;
  text-align: left;
  padding: 0 150px;
}

.characteristics {
  padding: 10px;
}
</style>
