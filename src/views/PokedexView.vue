<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
// import axios from 'axios'
import PokedexService from '../services/PokedexService';

const pokedex = ref(null)

onMounted(() => {
  // axios.get('https://my-json-server.typicode.com/nutdaran/webapp-test/books')
  // .then((response)=> {
  //   books.value = response.data //keep data in books
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
    PokedexService.getPokedex()
  .then((response)=> {
    pokedex.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div class="products">
    <div class="pokemonCards">
      <PokemonCard v-for="pokemon in pokedex" :key="pokemon.id" :pokemon="pokemon" /> <!--display-->
    </div>
  </div>
</template>

<style>
.products {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pokemonCards {
  column-count: 3;
  display:block;
  flex-wrap: wrap;
  justify-content: space-between;
}

@font-face {
  font-family: 'PoketMonk';
  src: url(../assets/fonts/PocketMonk.ttf);
}

@font-face {
  font-family: 'PokemonClassic';
  src: url(../assets/fonts/PokemonClassic.ttf);
}
</style>