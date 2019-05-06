<template class="menu">
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
        <div class="menu-item">
          <div>
            <router-link to="/beers">
              <div @mouseover="toggleDropdown" @mouseout="toggleDropdown">Beers</div>
            </router-link>
          </div>
          <div
            class="menu-item-dropdown"
            v-show="active"
            @mouseover="toggleDropdown"
            @mouseout="toggleDropdown"
          >
            <div class="abv">
              <div class="menu-item-title">ABV</div>
              <router-link to="/beers/abv/0/3">0 - 3%</router-link>
              <router-link to="/beers/abv/3/6">3 - 6%</router-link>
              <router-link to="/beers/abv/6/9">6 - 9%</router-link>
              <router-link to="/beers/abv/9/15">9 - 15%</router-link>
              <router-link to="/beers/abv/15/35">15 - 35%</router-link>
              <router-link to="/beers/abv/35/60">
                <a class="navbar-item" value="16">> 35%</a>
              </router-link>
            </div>
            <div class="ibu">
              <div class="menu-item-title">IBU</div>
              <router-link to="/beers/ibu/0/20">
                <a class="navbar-item" value="0">0 - 20</a>
              </router-link>
              <router-link to="/beers/ibu/20/40">
                <a class="navbar-item" value="20">20 - 40</a>
              </router-link>
              <router-link to="/beers/ibu/40/60">
                <a class="navbar-item" value="40">40 - 60</a>
              </router-link>
              <router-link to="/beers/ibu/60/80">
                <a class="navbar-item" value="60">60 - 80</a>
              </router-link>
              <router-link to="/beers/ibu/80/100">
                <a class="navbar-item" value="80">80 - 100</a>
              </router-link>
              <router-link to="/beers/ibu/100/300">
                <a class="navbar-item" value="100">> 100</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-items--right">
        <div class="menu-item">
          <router-link class="navbar-item" to="/beers/random">
            <div @click="randomPick" class="random">Random</div>
          </router-link>
        </div>
      </div>
    </div>
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
    },
    randomPick() {
      window.location.href = '/beers/random'
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  .navbar-item {
    display: flex;
    .random {
      padding: 0 10px;
    }
    .random:hover {
      text-decoration: underline;
    }
  }
  .menu-item:hover {
    text-decoration: underline;
  }
}

.menu-items {
  display: flex;
  justify-content: space-between;
  background-color: rgb(173, 172, 172);
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
    display: flex;
    position: absolute;
    background-color: whitesmoke;
    border: 1px solid #2c3e50;
    border-radius: 2%;
    padding: 16px;
    align-items: left;
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
  color: #2c3e50;
  padding: 10px 0;
}
.abv,
.ibu {
  display: flex;
  flex-direction: column;
  .menu-item-title {
    padding: 10px 0;
  }
}
.ibu {
  padding-left: 30px;
}
</style>

