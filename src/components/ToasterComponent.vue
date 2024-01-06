<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ message }}</p>
  </div>
</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
