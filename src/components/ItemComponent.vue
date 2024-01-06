<template>
  <div>
    <!-- cez cely component bude obrazok-->
    <img />
    <p>Datum konania</p>
    <h4>cena</h4>
    <!-- kratky opisny text zobrazujuci sa pri mouse hover, 
            bude mcez cele a mat backgrout opacity 0.7-->
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SliderComponent",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
