<template>
  <div class="one" v-if="this.grad">
    <div class="two" v-for="beer in allBeers" :key="beer.id" @click="goToBeer">
      <div class="beer-image">
        <img :src="beer.image_url">
      </div>
      <div class="beer">
        <div class="beer-content">
          <div class="beer-content--name">{{beer.name}}</div>
          <div class="beer-content--abv">abv: {{ beer.abv }}%</div>
          <div class="beer-content--ibu">ibu: {{ beer.ibu }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="one" v-else>
    <div class="two" v-for="beer in allBeers" :key="beer.id" @click="goToBeer">
      <div class="beer-image">
        <img :src="beer.image_url">
      </div>
      <div class="beer">
        <div class="beer-content">
          <div class="beer-content--name">{{ beer.name }}</div>
          <div class="beer-content--abv">abv: {{ beer.abv }}%</div>
          <div class="beer-content--ibu">ibu: {{ beer.ibu }}</div>
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
  props: ['grad', 'min', 'max', 'id'],
  methods: {
    ...mapActions(['fetchBeers']),
    goToBeer() {}
  },

  computed: {
    ...mapGetters(['allBeers'])
    // ...mapState(['allBeers'])
  },

  created() {
    this.fetchBeers({
      grad: this.grad,
      min: this.min,
      max: this.max,
      id: this.id
    })
  },
  mounted() {
    this.fetchBeers({
      grad: this.grad,
      min: this.min,
      max: this.max,
      id: this.id
    })
  }
}
</script>

<style lang="scss" scoped>
.beerList {
  display: flex;

  .beer-grad {
    display: flex;
  }
}
.one {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  flex-direction: row;
  height: 100%;
  width: 100%;
  // margin: 0 50px;
  padding: 0 50px;
  overflow-x: hidden;
  .two {
    border: 1px solid lightgrey;
    border-radius: 2%;
    margin: 15px;
    padding: 25px;
    width: 200px;
    height: 250px;
    .beer {
      display: flex;
      flex-direction: row;
      justify-content: center;

      // padding-left: 10px;
    }
  }
}
.beer-image {
  margin: 10px;
  border-bottom: 1px solid black;
  img {
    padding-bottom: 5px;
    height: 120px;
    max-width: 120px;
  }
}
.beer-content {
  .beer-content--name {
    padding: 5px 0;
    font-weight: 500;
    font-size: 18px;
  }
  // .beer-content--abv,
  // .beer-content--ibu {
  //   text-align: left;
  // }
}
</style>

