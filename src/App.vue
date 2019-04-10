<template>
  <div id="app">
    <div id="nav">
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
