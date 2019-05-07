<template class="beer-details">
  <div class="selected-beer" v-if="selectedBeer">
    <div class="beer-image" v-if="selectedBeer.image_url !== null">
      <img :src="selectedBeer.image_url">
    </div>
    <div class="selected-beer--basics">
      <div class="selected-beer--name">
        <div class="beer-name">{{ selectedBeer.name }}</div>
      </div>
      <div class="beer-basics">
        <div class="beer-tagline">{{ selectedBeer.tagline }}</div>
        <div class="beer-basics--content">
          <div class="beer-basics--title">Description</div>
          <div class="beer-description">{{ selectedBeer.description }}</div>
          <div class="beer-basics--title">Details</div>
          <div class="beer-basics--items">
            <div class="beer-basics--details">
              <div class="beer-characteristic top">ABV: {{ selectedBeer.abv }}%</div>
              <div class="beer-characteristic">IBU: {{ selectedBeer.ibu }}</div>
              <div class="beer-characteristic">ID: {{ selectedBeer.id }}</div>
            </div>
            <div class="beer-basics--details">
              <div class="beer-characteristic">EBC: {{ selectedBeer.ebc }}</div>
              <div class="beer-characteristic">SRM: {{ selectedBeer.srm }}</div>
              <div class="beer-characteristic">PH: {{ selectedBeer.ph }}</div>
            </div>
            <div class="beer-basics--details">
              <div class="beer-characteristic">Target FG: {{ selectedBeer.target_fg }}</div>
              <div class="beer-characteristic">Target OG: {{ selectedBeer.target_og }}</div>
              <div class="beer-characteristic">Attenuation: {{ selectedBeer.attenuation_level }}</div>
            </div>
          </div>
        </div>
        <div class="beer-basics-food">
          <div class="beer-basics--title">Food paring</div>
          <div v-for="food in selectedBeer.food_pairing" class="beer-characteristic">{{ food }}</div>
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
    ...mapGetters(['selectedBeer', 'getIngredients'])
  },
  created() {
    if (this.id === 'random') {
      this.fetchRandom()
    } else {
      this.fetchBeerById(this.id)
    }
  }
}
</script>
<style lang="scss">
.selected-beer {
  display: flex;
  margin: 50px 120px;
  img {
    padding: 40px 60px;
    max-height: 600px;
    width: 150px;
  }
  .selected-beer--basics {
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    .beer-name {
      padding-top: 24px;
      text-align: left;
      font-size: 35px;
      color: #b26624;
      font-family: 'Noto Sans JP', sans-serif;
      text-transform: uppercase;
    }
    .beer-tagline {
      color: #2d0242;
      font-family: 'Pathway Gothic One', sans-serif;
      text-align: justify;
      margin: 20px 0 50px 0;
      font-size: 30px;
    }
    .beer-basics--items {
      display: flex;
      justify-content: space-between;
    }
    .beer-basics--title {
      margin: 20px 0;
      font-size: 22px;
      text-align: left;
      font-weight: 500;
      border-bottom: 1px solid darkgrey;
    }
  }
}

.beer-description {
  color: #2c3e50;
  text-align: justify;
  margin: 20px 0 40px 0;
  font-size: 20px;
}
.beer-characteristic {
  color: #b26624;
  margin: 10px 10px 10px 0;
  font-size: 18px;
  text-align: left;
  padding: 0 20px 15px 0;
  font-weight: 500;
  border-bottom: 0.5px solid rgb(235, 232, 232);
}

.characteristics {
  padding: 10px;
}
@media only screen and (max-width: 620px) {
  .selected-beer {
    display: flex;
    flex-direction: column;
    margin: 30px 50px;
    img {
      // padding: 40px;
      max-height: 400px;
      max-width: 100px;
    }
    .selected-beer--basics {
      padding: 0;
      .beer-name {
        padding-top: 15px;
        text-align: center;
        font-size: 35px;
        color: #b26624;
        font-family: 'Noto Sans JP', sans-serif;
        text-transform: uppercase;
      }
      .beer-tagline {
        text-align: center;
      }
      .beer-characteristic {
        margin: 10px 10px 0 0;
        font-size: 16px;
        text-align: left;
        padding-right: 10px;
        font-weight: 500;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .selected-beer {
    display: flex;
    flex-direction: column;
    margin: 30px 50px;
    img {
      // padding: 40px;
      max-height: 400px;
      max-width: 100px;
    }
    .selected-beer--basics {
      padding: 0;
      .beer-name {
        padding-top: 15px;
        text-align: center;
        font-size: 35px;
        color: #b26624;
        font-family: 'Noto Sans JP', sans-serif;
        text-transform: uppercase;
      }
      .beer-tagline {
        text-align: center;
      }
      .beer-characteristic {
        margin: 10px 10px 0 0;
        font-size: 16px;
        text-align: left;
        padding-right: 10px;
        font-weight: 500;
      }
    }
  }
}
</style>
