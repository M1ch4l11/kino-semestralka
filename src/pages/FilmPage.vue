<script lang="ts">
import { defineComponent } from "vue";
import { BasketItem, FilmItem } from "@/interfaces/Film-interface";
import { useBasketStore } from "@/stores/BasketStore";

export default defineComponent({
  name: "CardComponent",
  data() {
    return {
      tiketsNumber: 0,
    };
  },
  props: {},
  components: {},
  computed: {
    basketStore() {
      return useBasketStore();
    },
  },
  methods: {
    zajednatListok(filmItem: FilmItem): void {
      this.basketStore.addItem(this.getBasketItem(filmItem));
      this.basketStore.totalPrice += filmItem.price * this.tiketsNumber;
    },
    getBasketItem(filmItem: FilmItem): BasketItem {
      return {
        imagePath: filmItem.path,
        countOfTickets: this.tiketsNumber,
        time: filmItem.time,
        price: filmItem.price,
      };
    },
  },
});
</script>

<template>
  <!-- Obrazok, popis, cena -->
  <div class="film-content" v-if="basketStore.filmItem.path">
    <img :src="basketStore.filmItem.path" alt="Not Found :-(" />
    <div class="film-info">
      <p>
        Počas filmu sa diváci tešia na sériu komických situácií, vtipných hier a
        nečakaných zvratov, ktoré testujú odhodlanie tímu a prinášajú nekonečný
        zábavu. Ideme na Teambuilding je plný pozitívnej energie, ktorá vzniká
        zo vzájomnej podpory, pochopenia a spoločného odhodlania prekonať
        prekážky.
      </p>
      <iframe
        width="560"
        height="315"
        :src="basketStore.filmItem.link"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{{ basketStore.filmItem.time }}</p>
      <h4>{{ basketStore.filmItem.price }}€</h4>
      <label for="ticketNumber"></label>
      <input
        class="ticket-number"
        type="number"
        id="ticketNumber"
        v-model="tiketsNumber"
      />
      <button class="zajednat" @click="zajednatListok(basketStore.filmItem)">
        Zajednat listky
      </button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.film-content {
  display: flex;
  img {
    height: 40vh;
    width: 60vh;
    margin: 16px;
    margin-right: 0px;
  }
  .film-info {
    background-color: var(--second-color);
    color: var(--text-color);
    height: fit-content;
    width: 800px;
    margin-top: 16px;
    padding: 16px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    .ticket-number {
      width: 36px;
    }
    .zajednat {
      background-color: var(--background-color);
      border: 1px solid var(--background-color);
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
      box-sizing: border-box;
      color: #fff;
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
  }
}
</style>
