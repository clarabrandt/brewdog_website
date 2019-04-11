<template class="menu">
  <nav class="navbar is-fixed-top is-black">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/home">
        <img
          src="../assets/brewdog-logo.png"
          alt="Brewdog logo"
          width="35"
          height="50"
        >
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
            <a class="navbar-item">Blond/Lager/Pilser</a>
            <a class="navbar-item">IPA</a>
            <a class="navbar-item">Wheat</a>
            <a class="navbar-item">Dark/Porter</a>
            <a class="navbar-item">Scotch Ale</a>
            <a class="navbar-item">Red Ale</a>
            <a class="navbar-item">Season</a>
            <a class="navbar-item">No precise label</a>
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

