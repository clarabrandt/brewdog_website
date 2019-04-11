<template>
  <div class="beers section">
    <!-- <img alt="Brewdog logo" src="../assets/brewdog-logo.png"> -->
   <p> Get to know our styles </p>
    <div class='container is-fluid'>
      <div class='columns'>
        <div class='column'>
          <div class="card">
            <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front card-image">
                    <figure class="image blond">
                      <img
                        src="../assets/brewdog-logo.png"
                        alt="Brewdog logo"
                      >
                    </figure>
                  </div>
                  <div class="flip-card-back back-blond">
                    <div class='beer-name is-size-4 has-text-weight-bold'>Fake Lager</div> 
                    <div class='beer-name is-size-4 has-text-weight-bold'> Avery Brown Dedge</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>Pinsen Lager</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>Trashy Blond</div>
                  </div>
              </div>
            </div>

            <div class='card-content'>
              <div class="content">
                <div class='beer-style is-size-5 has-text-weight-bold'>BLOND/LAGER/PILSNER</div> 
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="card">
             <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front card-image">
                    <figure class="image ipa">
                      <img
                        src="../assets/brewdog-logo.png"
                        alt="Brewdog logo"
                      >
                    </figure>
                  </div>
                  <div class="flip-card-back back-ipa">
                    <div class='beer-name is-size-4 has-text-weight-bold'>Storm</div> 
                    <div class='beer-name is-size-4 has-text-weight-bold'>Russian doll</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>My name is Mette-Marit</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>AB:06</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>Arcade Nation</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>Brumling X</div>
                    <div class='beer-name is-size-4 has-text-weight-bold'>Buzz</div>
                  </div>
              </div>
            </div>
            <!-- <div class="card-image">
              <figure class="image ipa">
                <img src="../assets/brewdog-logo.png" alt="Placeholder image">
              </figure>
            </div> -->
            <div class='card-content'>
              <div class="content">
                <div class='beer-style is-size-5 has-text-weight-bold'>IPA</div> 
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
                <div class='beer-style is-size-5 has-text-weight-bold'>WHEAT</div>
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
                <div class='beer-style is-size-5 has-text-weight-bold'>DARK/PORTER</div> 
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
                <div class='beer-style is-size-5 has-text-weight-bold'>SCOTCH ALE</div>
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
                <div class='beer-style is-size-5 has-text-weight-bold'>RED ALE</div>
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
                <div class='beer-style is-size-5 has-text-weight-bold'>SEASON</div>
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
                <div class='beer-style is-size-5 has-text-weight-bold'>NO PRECISE LABEL</div>
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
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 88%;
  border: 1px solid #f1f1f1;
 
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  padding: 30px 0;
  background-color: gold;
  height: 100%;
  color: white;
  transform: rotateY(180deg);
}
.back-blond {
  background-color: gold;
}
.back-ipa {
  background-color: #B26624;
}
.beer-name {
  padding: 5px;
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
