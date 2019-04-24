<template>
  <footer class="footer">
    <div class="footer-content">
      <div>Brewdog Recipes IPA.</div>
      <div></div>
      <div>A website by Clara Brandt.</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  // @Prop() private msg!: string
}
</script>



<style lang="scss" scoped>
.footer {
  background-color: lightgrey;
  .footer-content {
    text-align: left;
    padding: 10px;
  }
}
</style>