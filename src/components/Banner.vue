<template>
  <section class="hero">
    <div class="container">
      <h1 class="title">The Brewdog World</h1>
      <h2 class="subtitle">Find out more about your favorite beers!</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default {}
</script>

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
  padding: 10px 10px 0 10px;
  margin-top: 140px;
  line-height: 1.2;
}
.subtitle {
  font-family: 'Petit Formal Script', cursive, 'Gill Sans', 'Gill Sans MT',
    Calibri, 'Trebuchet MS', sans-serif;
  padding: 0 10px 10px 10px;
  line-height: 1.5;
}
h3 {
  font-size: 12px;
}
.hero::before {
  background: url('../assets/brewdog.jpg');
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
@media only screen and (max-width: 620px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background-color: rgb(228, 228, 228);
    max-width: 75%;
    max-height: 50%;
  }
  .title {
    font-size: 45px;
    text-align: center;
    padding: 10px 10px 0 10px;
    margin-top: 20px;
  }
  .subtitle {
    margin: 0;
    font-size: 16px;
  }
}
@media only screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background-color: rgb(228, 228, 228);
    max-width: 75%;
    max-height: 50%;
  }
  .title {
    font-size: 45px;
    text-align: center;
    padding: 10px 10px 0 10px;
    margin-top: 20px;
  }
  .subtitle {
    margin: 0;
    font-size: 16px;
  }
}
</style>
