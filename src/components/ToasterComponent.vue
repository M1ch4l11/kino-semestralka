<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToasterComponent",
  props: {
    title: String,
    message: String, // add type of message
  },
  components: {},
  methods: {},
});
</script>

<template>
  <div class="toaster-container">
    <h4>{{ title }}</h4>
    <p>{{ message }}</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toaster-container {
  color: var(--text-color);
  padding: 16px;
  width: fit-content;
  background-color: var(--background-color);
  position: absolute;
  top: 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
