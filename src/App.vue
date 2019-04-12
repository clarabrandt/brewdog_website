<template>
  <div id="app">
    <Menu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue' // @ is an alias to /src
import Footer from '@/components/Footer.vue' // @ is an alias to /src
import { State } from 'vuex-class'
import { Beer } from './types'
import BeerList from './components/BeerList.vue'

@Component({
  components: {
    Menu,
    Footer
  }
})
export default class App extends Vue {
  @State beerList!: Beer[]
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
