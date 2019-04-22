<template class="menu">
  <!-- <div class="menu-items">
    <div class="menu-item">Home</div>
    <div class="menu-item menu-beers">
      <a href="#" v-on:click.prevent="showDropDown=!showDropDown">
      <div>Beers</div>
      <i :class="{ 'fa-caret-up':showDropDown, 'fa-caret-down': !showDropDown }" class="fa" aria-hidden="true"></i>
      </a>
    </div>
    <div class="menu-item">Random</div>
  </div>-->

  <div class="navbar">
    <div class="menu-items">
      <div class="menu-items--left">
        <div class="menu-item">
          <router-link class="navbar-item" to="/home">
            <img src="../assets/brewdog-logo.png" alt="Brewdog logo" width="50" height="50">
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/home">
            <div>Home</div>
          </router-link>
        </div>
        <div class="menu-item dropdown">
          <router-link to="/beers">
            <div @mouseover="toggleDropdown" @mouseout="toggleDropdown">Beers</div>
          </router-link>
          <div
            class="menu-item-dropdown"
            v-show="active"
            @mouseover="toggleDropdown"
            @mouseout="toggleDropdown"
          >
            <div>
              <router-link to="/beers/abv/0/3">item 1</router-link>
            </div>
            <div>item 2</div>
          </div>
        </div>
      </div>
      <div class="menu-items--right">
        <div class="menu-item">
          <div>Random</div>
        </div>
      </div>
    </div>
    <!-- <div class="navbar-brand">
      <router-link class="navbar-item" to="/home">
        <img src="../assets/brewdog-logo.png" alt="Brewdog logo" width="35" height="50">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
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
                <router-link to="/beers/abv/0/3">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="0-3">0 - 3%</a>
                </router-link>
                <router-link to="/beers/abv/3/6">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="3-6">3 - 6%</a>
                </router-link>
                <router-link to="/beers/abv/6/9">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="6-10">6 - 9%</a>
                </router-link>
                <router-link to="/beers/abv/9/15">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="9-15">9 - 15%</a>
                </router-link>
                <router-link to="/beers/abv/15/35">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="15-25">15 - 35%</a>
                </router-link>
                <router-link to="/beers/abv/35/60">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="16">> 35%</a>
                </router-link>
              </div>
              <div class="column">
                <div class="navbar-item has-text-weight-bold is-size-5">IBU</div>
                <hr class="navbar-divider">
                <router-link to="/beers/ibu/0/20">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="0-20">0 - 20</a>
                </router-link>
                <router-link to="/beers/ibu/20/40">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="20">20 - 40</a>
                </router-link>
                <router-link to="/beers/ibu/40/60">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="40">40 - 60</a>
                </router-link>
                <router-link to="/beers/ibu/60/80">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="60">60 - 80</a>
                </router-link>
                <router-link to="/beers/ibu/80/100">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="80">80 - 100</a>
                </router-link>
                <router-link to="/beers/ibu/100/300">
                  <a class="navbar-item has-text-weight-bold is-size-6" value="100">> 100</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="navbar-item is-hoverable">
        <span class="navbar-link is-arrowless">
          <router-link to="/home">
            <div class="menu-title">Random</div>
          </router-link>
        </span>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

export default {
  name: 'Menu',
  data: function() {
    return {
      active: false
    }
  },
  methods: {
    toggleDropdown: function() {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background-color: lightgrey;
}

.menu-items {
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
}
.menu-items--left,
.menu-items--right {
  display: flex;
  /* flex-direction: column; */
}
.menu-item {
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  align-self: center;
  .menu-item-dropdown {
    position: absolute;
    background-color: whitesmoke;
    border: 1px solid black;
    padding: 16px;
  }
}

.menu-title {
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-right: 15px;
}
a {
  text-decoration: none;
  color: black;
}
</style>

