<script lang="ts">
import { defineComponent } from "vue";
import { FilmItem } from "@/interfaces/Film-interface";
import { useBasketStore } from "@/stores/BasketStore";
export default defineComponent({
  name: "ItemComponent",
  props: {
    film: null,
  },
  methods: {
    openCard(film: FilmItem): void {
      // film nema type...
      if (this.isFilmItem(film)) {
        this.basketStore.filmItem = film;
      }
    },
    isFilmItem(obj: any): obj is FilmItem {
      return typeof obj === "object";
    },
  },
  computed: {
    basketStore() {
      return useBasketStore();
    },
  },
});
</script>

<template>
  <div class="film" v-if="!!film">
    <img class="image" :src="film.path" ta />
    <div class="modal-hover">
      <p>{{ film.time }}</p>
      <h4>{{ film.price }}€</h4>
      <RouterLink class="zajednat" @click="openCard(film)" to="/Film"
        >Zistit viac</RouterLink
      >
      <p>{{ film.description }}</p>
    </div>
  </div>
</template>

<style>
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
  border: 4px solid var(--background-color);
  border-radius: 15px;
  box-shadow: -1px 4px 16px 16px rgba(0, 0, 0, 0.75) inset;
  &:hover,
  .image {
    transform: scale(1.2);
    border: none;
    box-shadow: -1px 4px 16px 16px rgba(0, 0, 0, 0.75);
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

.zajednat {
  text-decoration: none;
  background-color: var(--background-color);
  border: 1px solid var(--second-color);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  box-sizing: border-box;
  color: var(--text-color);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  padding: 8px;
  margin: 16px;
  outline: none;
  outline: 0;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.zajednat:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  border: 1px solid var(--second-color);
  background-color: var(--second-color);
  color: var(--background-color);
  transform: translateY(-2px);
}
</style>
