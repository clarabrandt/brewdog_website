<template>
  <div class="wrap">
    <div class="one" v-if="allBeers.length !== 0">
      <div class="two" v-for="beer in allBeers" :key="beer.id" @click="() => goToBeer(beer.id)">
        <div class="beer-image">
          <img :src="beer.image_url">
        </div>
        <div class="beer">
          <div class="beer-content">
            <div class="beer-content--name">{{beer.name}}</div>
            <div class="beer-content--abv">abv: {{ beer.abv }}%</div>
            <div class="beer-content--ibu">ibu: {{ beer.ibu }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Acabou!</div>
    <div class="pagination">
      <a
        v-show="this.page > 1"
        class="previous"
        href="#"
        @click.prevent="goPrevious"
      >&laquo; Previous</a>
      <a v-show="this.allBeers.length === 24" href="#" @click.prevent="goNext">Next &raquo;</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'BeerList',
  props: ['grad', 'min', 'max', 'id'],
  methods: {
    ...mapActions(['fetchBeers']),
    goToBeer(id: any) {
      this.$router.push({ path: `/beers/${id}` })
    },
    changePage() {
      this.fetchBeers({
        grad: this.grad,
        min: this.min,
        max: this.max,
        id: this.id,
        page: this.page
      })
    },
    goPrevious: function(e: Event) {
      if (this.page > 1) {
        this.page = this.page - 1
        this.changePage()
      }
      if (this.page === 1) {
        this.page

        this.changePage()
      }
    },
    goNext: function(e: Event) {
      if (this.allBeers.length === 24) {
        this.page = this.page + 1
        this.changePage()
      }
      if (this.allBeers.length < 24) {
        this.page
        this.changePage()
      }
    }
  },
  data: function() {
    return {
      page: 1,
      isActive: false
    }
  },
  computed: {
    ...mapGetters(['allBeers'])
  },

  created() {
    this.fetchBeers({
      grad: this.grad,
      min: this.min,
      max: this.max,
      id: this.id,
      page: this.page
    })
  },
  watch: {
    // call again the method if the route changes
    $route: function(val) {
      this.page = 1
      this.fetchBeers({
        grad: this.grad,
        min: this.min,
        max: this.max,
        id: this.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.beerList {
  display: flex;

  .beer-grad {
    display: flex;
  }
}
.wrap {
  display: flex;
  flex-direction: column;
  .one {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 50px;
    justify-content: center;
    .two {
      border: 1px solid lightgrey;
      border-radius: 2%;
      margin: 15px 20px;
      padding: 25px;
      width: 200px;
      height: 260px;

      .beer {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
}
.beer-image {
  margin: 10px;
  border-bottom: 1px solid black;
  cursor: pointer;
  img {
    padding-bottom: 5px;
    height: 120px;
    max-width: 120px;
  }
}
.beer-content {
  .beer-content--name {
    padding: 5px 0;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }
  // .beer-content--abv,
  // .beer-content--ibu {
  //   text-align: left;
  // }
}
.pagination {
  margin: 20px;
}
.pagination a {
  color: black;
  padding: 16px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.pagination a.active {
  background-color: dodgerblue;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
.pagination a.next {
  display: none;
}
</style>

