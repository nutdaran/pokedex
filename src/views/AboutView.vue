<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import PokemonCard from '@/components/PokemonCard.vue'

const pokedex = ref([])
// const id = ref(100001)

async function getPokemon() {
  const querySnapshot = await getDocs(collection(db,'pokedex'))
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const pokemon = {
          "id": doc.id,
          "name": doc.data().name,
          "type1": doc.data().type1,
          "type2": doc.data().type2,
          "japaneseName": doc.data().japaneseName,
          "evolution": doc.data().evolution,
          "imageUrl": doc.data().image
        }
        pokedex.value.push(pokemon)
    })
}
onMounted(async () => {
    console.log('Connecting to Firebase')
    await getPokemon()
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