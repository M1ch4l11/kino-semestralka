<template>
  <img />
  <nav>
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

<style scoped></style>
