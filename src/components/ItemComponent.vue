<template>
  <div class="film" v-if="film">
    <!-- cez cely component bude obrazok-->
    <img class="image" :src="film.path" ta />
    <div class="modal-hover" @click="openCard(film)">
      <p>{{ film.time }}</p>
      <h4>{{ film.price }}€</h4>
      <!-- kratky opisny text zobrazujuci sa pri mouse hover, 
            bude mcez cele a mat backgrout opacity 0.7-->
      <RouterLink to="/Film">Zistit viac</RouterLink>
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { FilmItem } from "@/interfaces/Film-interface";
export default defineComponent({
  name: "ItemComponent",
  props: {
    film: null,
  },
  methods: {
    openCard(film: Object): void {
      // save in store film
      console.log(film);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-img {
  height: 200px;
}
.modal-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
}
.film {
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  margin: 8px;
  &:hover,
  .image {
    transform: scale(1.2);
    z-index: 100;
  }
  &:hover .modal-hover {
    display: block;
  }
}

.image {
  width: 100%;
  height: 100%;
  transition: transform 1s ease;
}
</style>
