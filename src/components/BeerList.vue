<template>
  <div class="beerList">
    <div
      v-for="beer in allBeers"
      :key="beer.id"
      class="eachBeer"
    >{{ beer.name }} {{beer.abv}} {{beer.ibu}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'

// @Component
// export default class BeerList extends Vue {
//   @Prop() private msg!: string
// }
export default {
  name: 'BeerList',
  props: ['grad', 'min', 'max'],
  methods: {
    ...mapActions(['fetchBeers'])
  },
  computed: mapGetters(['allBeers']),
  created() {
    this.fetchBeers({ grad: this.grad, min: this.min, max: this.max })
  }
}
</script>

<style lang="scss" scoped>
</style>