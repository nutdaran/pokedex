<script setup>

defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <!-- <RouterLink to="book/100001"> -->
  <RouterLink style="text-decoration: none; color: inherit;" :to="{ name: 'pokemon-details', params: {id: pokemon.id} }" >
    <div class="product-card">
      <img :src="pokemon.imageUrl" alt="Pokemon Image"/>
      <h2>{{ pokemon.name }}</h2>
      <span>Type1: {{ pokemon.type1 }} Type2: {{ pokemon.type2 }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
}
span {
  font-size: x-small;
  text-align: center;
}
h2 {
  font-size: medium;
  text-align: center;
}
.product-card {
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 20px;
  width: auto;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 18px;
  font-family: 'PokemonClassic';
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>