<template v-if="films">
  <div class="films-container">
    <ItemComponent v-for="film in films" :key="film.id" :film="film" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemComponent from "@/components/ItemComponent.vue";
// import { FilmItem } from "@/interfaces/Film-interface";

export default defineComponent({
  name: "SliderComponent",
  props: {
    films: {
      type: Array(),
      required: true,
    },
  },
  components: {
    ItemComponent,
  },
  computed: {
    reversedMessage() {
      // This computed property depends on the 'message' data property
      console.log(this.films);
      return null;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.films-container {
  height: 200;
  display: flex;
  padding: 30px;
  justify-content: center;
  background-color: var(--second-color);
}
</style>
