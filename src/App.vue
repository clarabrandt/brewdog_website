<template>
  <div id="app">
    <div id="nav">
      <Menu />
      </nav>
    </div>

    <router-view/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue' // @ is an alias to /src


@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {}
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
