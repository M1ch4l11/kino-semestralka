<template>
  <NavComponent></NavComponent>
  <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavComponent from "@/components/NavComponent.vue";

export default defineComponent({
  components: { NavComponent },
});
</script>

<style>
body {
  margin: 0;
  background-color: var(--background-color);
}
:root {
  --background-color: #0a122a;
  --second-color: #698f3f;
  --text-color: #fbfaf8;
}
</style>
