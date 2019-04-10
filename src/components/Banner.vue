<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Brewdog Beer World</h1>
        <h2 class="subtitle">Find out more about your favorite beers!</h2>
      </div>
    </div>
  </section>
  <!-- <div class="banner"> -->
  <!-- <img alt="Brewdog" src="../assets/Brewdog_masthead_1.png"> -->
  <!-- <p>{{ msg }}</p> -->
  <!-- <h3>{{ msg }}</h3> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Banner extends Vue {
  @Prop() private msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: rgb(228, 228, 228);
  max-width: 25%;
  margin-left: 50px;
}
.title {
  font-size: 70px;

  color: black;

  font-weight: 600;
  /* margin: 0; */
  /* margin-left: 10px; */
  padding: 10px 10px 10px 10px;
  margin-top: 120px;

  line-height: 1.2;
}
.subtitle {
  font-family: cursive, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
    sans-serif;
  padding-bottom: 10px;
}
h3 {
  font-size: 12px;
}
.hero::before {
  /* background-image: url('../assets/Brewdog_masthead_1.png'); */
  background: 
  /* linear-gradient(
      to right,
      rgba(238, 234, 234, 0.45),
      rgba(17, 17, 17, 0.616)
    ), */ url('../assets/brewdog.jpg');

  background-size: cover;
  content: '';
  display: block;
  position: absolute;
  top: 130px;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: -2;
  opacity: 0.8;
}
img {
  opacity: 0.5;
}
</style>
