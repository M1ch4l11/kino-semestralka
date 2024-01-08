<template>
  <div>
    <div v-for="order in orderItems" :key="order.id">
      <img :src="order.imagePath" />
      <p>{{ order.countOfTickets }}</p>
      <h2>{{ order.price }}</h2>
    </div>
  </div>
  <div>
    <h3>{{ totalPrice }}€</h3>
    <input type="text" placeholder="Kristina" v-model="name" />
    <input type="email" placeholder="kpavlovova@gmail.com" v-model="email" />
    <button @click="order()">Zajednat</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingCard",
  data() {
    return {
      name: "",
      email: "",
      totalPrice: 34,
    };
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    order(): void {
      // zobrazenie toasteru a vycistenie statu...
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
