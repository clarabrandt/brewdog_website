<template>
  <footer class="footer">
    <div class="footer-content">
      <div>Brewdog Recipes API website.</div>
      <div></div>
      <div>A website by Clara Brandt.</div>
    </div>
    <router-link to="/sitemap"class='footer-sitemap'>Site map</router-link>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default {}
</script>



<style lang="scss" scoped>
.footer {
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  .footer-content {
    text-align: left;
    padding: 10px;
  }
  .footer-sitemap{
    text-align: right;
    padding: 10px 30px;
  }
}
</style>