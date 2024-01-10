<script lang="ts">
import { defineComponent } from "vue";
import ItemComponent from "@/components/ItemComponent.vue";
import { FilmItem } from "@/interfaces/Film-interface";

export default defineComponent({
  name: "SliderComponent",
  props: {
    films: Array<FilmItem>,
  },
  components: {
    ItemComponent,
  },
  computed: {},
});
</script>

<template v-if="films">
  <div class="films-container">
    <ItemComponent v-for="film in films" :key="film.id" :film="film" />
  </div>
</template>

<style>
.films-container {
  height: 200;
  display: flex;
  padding: 30px;
  justify-content: center;
  background-color: var(--second-color);
}
</style>
