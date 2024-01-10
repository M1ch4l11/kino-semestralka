<script lang="ts">
import { defineComponent } from "vue";
import { useBasketStore } from "@/stores/BasketStore";
import ToasterComponent from "@/components/ToasterComponent.vue";

export default defineComponent({
  name: "ShoppingCard",
  data() {
    return {
      name: "",
      email: "",
      toaster: {
        titleToaster: "",
        messageToaster: "",
        show: false,
      },
    };
  },
  components: { ToasterComponent },
  computed: {
    basketStore() {
      return useBasketStore();
    },
  },
  methods: {
    order(): void {
      this.actionToaster(this.validOrder());
      this.basketStore.$reset();
    },
    actionToaster(valid: boolean): void {
      this.toaster.titleToaster = valid
        ? " Objednavka odoslana " + this.name
        : " !!Vyplnte udaje!!" + this.name;
      this.toaster.messageToaster = valid
        ? " Platit aj vyberat si miesto budete na mieste "
        : " Nie je mozne zaslat objednavku. ";
      this.toaster.show = true;
      setTimeout(() => {
        this.toaster.show = false;
      }, 2000);
    },
    validOrder(): boolean {
      return this.basketStore.totalPrice != 0 && !!this.name && !!this.email;
    },
  },
});
</script>

<template>
  <div class="basket-wrapper">
    <div class="orders-container">
      <div
        class="order"
        v-for="(order, index) in basketStore.basketItems"
        :key="index"
      >
        <img class="order-image" :src="order.imagePath" />
        <p>{{ order.countOfTickets }}x</p>
        <h2>{{ order.price }}€</h2>
        <img
          class="delete-icon"
          @click="basketStore.deleteItem(order)"
          src="/delete_icon.png"
        />
      </div>
    </div>
    <div class="order-form">
      <h3>Celkova suma: {{ basketStore.totalPrice }}€</h3>
      <input type="text" placeholder="Kristina" v-model="name" />
      <input type="email" placeholder="kpavlovova@gmail.com" v-model="email" />
      <button class="zajednat" @click="order()">Zajednat</button>
    </div>
  </div>

  <ToasterComponent
    v-if="toaster.show"
    :title="toaster.titleToaster"
    :message="toaster.messageToaster"
  ></ToasterComponent>
</template>

<style>
.basket-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .orders-container {
    width: 648px;
    .order {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background-color: var(--second-color);
      .order-image {
        height: 200px;
        width: 150px;
      }
      p {
        color: var(--text-color);
        font-size: x-large;
        width: 120px;
        margin: 0;
        padding: 8px;
        text-align: center;
      }
      .delete-icon {
        height: 25px;
        opacity: 0.6;
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
  }
  .order-form {
    display: flex;
    width: 600px;
    justify-content: center;
    background-color: var(--second-color);
    padding: 24px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    h3 {
      color: var(--text-color);
      padding-right: 8px;
    }
    input {
      margin: 8px;
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
