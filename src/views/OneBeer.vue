<template class="content">
  <div>
    <p>{{ msg }}</p>
    <BeerDetails v-bind:id="$route.params.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BeerDetails from '@/components/BeerDetails.vue' // @ is an alias to /src

@Component({
  components: {
    BeerDetails
  }
})
export default class OneBeer extends Vue {
  @Prop() private msg!: string
}
</script>