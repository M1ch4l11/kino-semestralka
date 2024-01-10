<script lang="ts">
import { defineComponent } from "vue";
import SliderComponent from "@/components/SliderComponent.vue";
import AktualProgram from "@/jsons/Aktual_program.json";
export default defineComponent({
  data() {
    return {
      AktualProgram,
    };
  },
  name: "ProgramComponent",
  components: {
    SliderComponent,
  },
});
</script>

<template v-if="AktualProgram">
  <div class="day-container" v-for="dayItem in AktualProgram" :key="dayItem.id">
    <h2>{{ dayItem.day }}</h2>
    <SliderComponent :films="dayItem.content"></SliderComponent>
  </div>
</template>

<style>
.day-container {
  margin-top: 90px;
}
h2 {
  width: 120px;
  background-color: var(--second-color);
  margin: 0;
  padding: 8px;
  text-align: center;
  border-top-right-radius: 15px;
  color: var(--text-color);
}
</style>
