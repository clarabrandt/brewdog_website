<template class="menu">
  <nav class="navbar is-black">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/home">
        <img
          src="../assets/brewdog-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
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
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            <router-link to="/beers">
              <div class="menu-title">Beers</div>
            </router-link>
          </span>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item">Punk IPA</a>
            <a class="navbar-item">Dead Pony Club</a>
            <a class="navbar-item">Indie</a>
            <a class="navbar-item">Lost Lager</a>
            <a class="navbar-item">Clockwork Tangerine</a>
            <a class="navbar-item">Jet Black Heart</a>
            <a class="navbar-item">Quench Quake</a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/components/breadcrumb/"
            >Components</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">oi</div>
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
}
.navbar {
  height: 5.5rem;
}
.navbar-brand {
  height: 100%;
}
</style>

