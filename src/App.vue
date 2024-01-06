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

<style></style>
