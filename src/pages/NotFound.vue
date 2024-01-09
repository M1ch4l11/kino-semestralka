<template>
  <div>vsfd</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBasketStore } from "@/stores/BasketStore";

export default defineComponent({
  name: "NotFoundComponent",
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {
    basketStore() {
      return useBasketStore();
    },
  },
  methods: {
    order(): void {
      // zobrazenie toasteru a vycistenie statu...
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
