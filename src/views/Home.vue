<template>
  <div class="home">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
    <Banner msg="The Brewdog Beer World"/>
    <div class="more-content">
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Banner from '@/components/Banner.vue' // @ is an alias to /src
import Content from '@/components/Content.vue' // @ is an alias to /src

@Component({
  components: {
    Banner,
    Content
  }
})
export default class Home extends Vue {}
</script>

<style>
.home {
  height: 100%;
}
.more-content{
  margin-top: 200px;
}
</style>
