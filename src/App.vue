<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="layout">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  
      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->
        <h1 id="main">Pokedex</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style scoped>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smooting: antialiased;
  -moz-osx-font-smooting: grayscale;
  text-align: center;
  color: #2c3e50;

}
#main {
  font-family: 'PoketMonk';
  font-size: 55px;
  margin-top: 50px;
  margin-bottom: 0px;
}
nav {
  padding: 20px;
}
nav a {
  padding: 10px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: red;
  text-underline-position: none;
  
}
</style>
