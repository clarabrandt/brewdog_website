<template class="IPA">
  <div class='ipa section'>
    <div class='ipa-type columns'>
      <div class='ipa-type-content column'>
        <img></img>
      </div>
      <div class='ipa-type-content column'>
        <div>NAME</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div class='ipa-type-content column'>
        <div>Tagline</div>
        <div>ABV</div>
        <div>IBU</div>
        <div>Malts</div>
        <div>Hops</div>
        <div>Food paring</div>
      </div>
     </div> 
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class IPA extends Vue {
  @Prop() private msg!: string
}
</script>