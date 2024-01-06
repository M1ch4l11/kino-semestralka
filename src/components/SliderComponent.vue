<template><ItemComponent></ItemComponent></template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemComponent from "@/components/ItemComponent.vue";
export default defineComponent({
  name: "SliderComponent",
  props: {
    filmItems: null, // add film type
  },
  components: {
    ItemComponent,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
