<template class="menu">
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io"></a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="dropdown is-active">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Beers</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">Punk IPA</div>
              <div class="dropdown-item">Dead Pony Club</div>
              <div class="dropdown-item is-active">Indie</div>
              <div class="dropdown-item">Lost Lager</div>
              <div class="dropdown-item">Clockwork Tangerine</div>
              <div class="dropdown-item">Jet Black Heart</div>
              <div class="dropdown-item">Quench Quake</div>
            </div>
          </div>
        </div>
        <span class="navbar-item">
          <router-link to="/home">Home</router-link>
        </span>
        <span class="navbar-item">
          <router-link to="/beers">Beers</router-link>
        </span>
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

