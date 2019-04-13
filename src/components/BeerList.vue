<template>
  <div class="beerList">
    <div v-for="beer in allBeers" :key="beer.id" class="eachBeer">{{ beer.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

// @Component
// export default class BeerList extends Vue {
//   @Prop() private msg!: string
// }
export default {
  name: 'BeerList',
  computed: mapGetters(['allBeers'])
}
</script>

<style lang="scss" scoped>
</style>