<script lang="ts">
import { defineComponent } from "vue";
import { useBasketStore } from "@/stores/BasketStore";

export default defineComponent({
  name: "KontaktPage",
  computed: {
    basketStore() {
      return useBasketStore();
    },
  },
});
</script>

<template>
  <div class="kontakt-container">
    <div class="kontakt-content">
      <div class="adress">
        <h2>3D kino Partizanske</h2>
        <p>Ulica: Generála Svobodu 1141/3, 958 01</p>
        <p>Mesto: Partizanske</p>
        <p>PSC: 958 01</p>
        <h3>Tel.Cislo: +421964536743</h3>
      </div>
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.185547951114!2d18.364932976871813!3d48.62543131707187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714cea8aa98a78b%3A0xdd7012ecdad8c8e9!2sPanoramatick%C3%A9%203D%20kino!5e0!3m2!1ssk!2ssk!4v1704877162722!5m2!1ssk!2ssk"
        width="450"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style>
.kontakt-container {
  display: flex;
  justify-content: center;
  .kontakt-content {
    display: inherit;
    width: fit-content;
    padding: 58px;
    background-color: var(--second-color);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    color: var(--text-color);
    .adress {
      width: fit-content;
      padding: 24px;
    }
    .map {
      border-radius: 600px;
      margin-top: 24px;
    }
  }
}
</style>
