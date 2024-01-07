<template>
  <nav>
    <RouterLink to="/">
      <img class="brand" src="/brand_movie-removebg-preview.png"
    /></RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Program">Program</RouterLink>
    <RouterLink to="/Kontakt">Kontakt</RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavComponent",
});
</script>

<style scoped>
nav {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: var(--second-color);
  align-items: center;
  .brand {
    height: 70px;
  }
  a {
    text-decoration: none;
    color: var(--text-color);
    font-size: large;
    margin: 5px;
    &:hover {
      color: var(--background-color);
    }
  }
}
</style>
