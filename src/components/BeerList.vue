<template>
  <div class="beerList" v-if="this.grad">
    <div class>
      <div class="media">
        <div class="media-left">
          <figure class="image">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
    </div>
  </div>
  <div class="one" v-else>
    <div class="two" v-for="beer in allBeers" :key="beer.id">
      <div class="beer">
        <div>
          <figure class="beer-image">
            <img :src="beer.image_url">
          </figure>
        </div>
        <div class="beer-content">
          <div class="name is-size-6 has-text-weight-bold">{{ beer.name }}</div>
          <div class="abv">abv: {{ beer.abv }}</div>
          <div class="ibu">ibu: {{ beer.ibu }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions, mapState } from 'vuex'

// @Component
// export default class BeerList extends Vue {
//   @Prop() private msg!: string
// }
export default {
  name: 'BeerList',
  props: ['grad', 'min', 'max'],
  methods: {
    ...mapActions(['fetchBeers', 'fetchRandom'])
  },

  computed: {
    ...mapGetters(['allBeers', 'oneBeer'])
    // ...mapState(['allBeers'])
  },

  created() {
    this.fetchBeers({ grad: this.grad, min: this.min, max: this.max }),
      this.fetchRandom()
  },
  mounted() {
    this.fetchBeers({ grad: this.grad, min: this.min, max: this.max })
  }
}
</script>

<style lang="scss" scoped>
.beerList {
  display: flex;
  flex-wrap: wrap;
}
.one {
  display: flex;
  border: 10px solid gold;
  min-height: 100vh;
  flex-direction: row;
  height: 100%;
  width: auto;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}
.two {
  // display: inline-block;
  padding: 25px;
  width: 200px;
  height: 200px;
}
.beer {
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
  // max-width: 200px;
  // max-height: auto;
  .beer-image {
    height: auto;
    max-width: 40px;
    // padding: 0 10px;
  }
}
.beer-content {
  padding: 0 0 0 25px;
  text-align: left;
  // display: flex;
  // flex-direction: column;
  .name {
    padding: 5px 0;
  }
}
</style>

