import { BasketItem, FilmItem } from "@/interfaces/Film-interface";
import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
  state: (): {
    basketItems: BasketItem[];
    totalPrice: number;
    filmItem: FilmItem;
  } => ({
    basketItems: [],
    totalPrice: 0,
    filmItem: {
      id: 0,
      title: "",
      path: "",
      description: "",
      price: 0,
      time: "",
      link: "",
      linkIframe: "",
    },
  }),
  actions: {
    addItem(item: BasketItem) {
      this.basketItems.push(item);
    },
    sumTutalPrice(price: number) {
      this.totalPrice = Math.round(this.totalPrice + price);
    },
    deleteItem(item: BasketItem) {
      const index = this.basketItems.findIndex(
        (basketItem) => basketItem.imagePath === item.imagePath
      );
      this.totalPrice = Math.round(
        this.totalPrice -
          this.basketItems[index].price * this.basketItems[index].countOfTickets
      );
      return index > -1 ? this.basketItems.splice(index, 1) : false;
    },
    $reset() {
      this.basketItems = [];
      this.totalPrice = 0;
      this.filmItem = {
        id: 0,
        title: "",
        path: "",
        description: "",
        price: 0,
        time: "",
        link: "",
        linkIframe: "",
      };
    },
  },
});
