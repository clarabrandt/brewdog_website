<template class="menu">
  <nav class="navbar is-fixed-top is-black">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/home">
        <img src="../assets/brewdog-logo.png" alt="Brewdog logo" width="35" height="50">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <span class="navbar-link is-arrowless">
            <router-link to="/home">
              <div class="menu-title">Home</div>
            </router-link>
          </span>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            <router-link to="/beers">
              <div class="menu-title">Beers</div>
            </router-link>
          </span>
          <div class="navbar-dropdown is-boxed">
            <div class="columns">
              <div class="column">
                <div class="navbar-item has-text-weight-bold is-size-5">ABV</div>
                <hr class="navbar-divider">
                <a class="navbar-item has-text-weight-bold is-size-6">0 - 3%</a>
                <a class="navbar-item has-text-weight-bold is-size-6">3.1 - 5.5%</a>
                <a class="navbar-item has-text-weight-bold is-size-6">5.5 - 8%</a>
                <a class="navbar-item has-text-weight-bold is-size-6">8 - 12%</a>
                <a class="navbar-item has-text-weight-bold is-size-6">12 - 15%</a>
                <a class="navbar-item has-text-weight-bold is-size-6">> 15%</a>
              </div>
              <div class="column">
                <div class="navbar-item has-text-weight-bold is-size-5">IBU</div>
                <hr class="navbar-divider">
                <a class="navbar-item has-text-weight-bold is-size-6">0 - 20</a>
                <a class="navbar-item has-text-weight-bold is-size-6">20 - 40</a>
                <a class="navbar-item has-text-weight-bold is-size-6">40 - 60</a>
                <a class="navbar-item has-text-weight-bold is-size-6">60 - 80</a>
                <a class="navbar-item has-text-weight-bold is-size-6">80 - 100</a>
                <a class="navbar-item has-text-weight-bold is-size-6">> 100</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item menu-title">Random</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  // @Prop() private msg!: string
}
</script>

<style>
.menu-title {
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-right: 15px;
}
.navbar {
  height: 5.5rem;
}
.navbar-brand {
  height: 100%;
}
</style>

