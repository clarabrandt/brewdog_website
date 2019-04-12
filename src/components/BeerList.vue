<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BeerList extends Vue {
  @Prop() private msg!: string
}
</script>

<style lang="scss" scoped>
</style>