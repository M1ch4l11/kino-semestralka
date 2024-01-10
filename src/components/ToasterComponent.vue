<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToasterComponent",
  props: {
    title: String,
    message: String,
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
