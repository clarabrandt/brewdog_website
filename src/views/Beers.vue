<template>
  <div class="beers section">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
   <p> Get to know our styles </p>
    <div class='container is-fluid is-blue'>
      <div class='columns'>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image blond">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>BLOND/LAGER/PILSNER</div> 
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image ipa">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>IPA</div> 
              </div>
            </div>
          </div>
        </div>

        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image wheat">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>WHEAT</div>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image porter">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>DARK/PORTER</div> 
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class='columns'>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image scotch-ale">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>SCOTCH ALE</div>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image red-ale">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>RED ALE</div>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image season">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>SEASON</div>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
            <div class="card-image">
              <figure class="image no-label">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div>
            <div class='card-content'>
              <div class="content">
                <div class='beer-style'>NO PRECISE LABEL</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
  components: {
   
  }
})
export default class Home extends Vue {}
</script>

<style>
.beers {
  height: 100%;
}
p {
  margin-top: 50px;
  font-size: 40px;
  font-weight: 600;
}
.card {
  height:400px;
}
.card-content {
  height: 100%;
}

.beer-style {
  font-size: 20px;
  font-weight: 600;
  
}
.blond {
  background-color: gold;
}
.red-ale {
  background-color: #6B0909;
}
.porter {
  background-color: #2C2323;
}
.ipa {
  background-color: #B26624;
}
.wheat {
  background-color: #C7C33D;
}
.scotch-ale {
  background-color: #2E150F;
}
.season {
  background-color: #F5720F;
}
.no-label {
  background-color: #4F0B76
}



</style>
