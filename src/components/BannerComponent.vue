<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    description: String,
    imagePath: String,
    price: Number,
    link: String,
  },
});
</script>

<template>
  <div class="container">
    <img class="movie-image" :src="imagePath" alt="Not Found" />
    <div class="description-wrapper">
      <p>{{ description }}</p>
      <h3>{{ price }} €</h3>
      <a :href="link" target="_blank">
        <img class="play-image" src="/play_icon.png"
      /></a>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  .movie-image {
    margin: 5px;
    margin-right: 0;
    height: 80vh;
  }
  .description-wrapper {
    display: flex;
    flex-wrap: wrap;
    color: var(--text-color);
    flex-direction: column;
    color: var(--text-color);
    p {
      background-color: var(--second-color);
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      width: 80%;
      padding: 16px;
    }
    h3 {
      margin-left: 16px;
    }
    a {
      height: 200px;
      display: flex;
      justify-content: center;
      width: fit-content;
      .play-image {
        height: -webkit-fill-available;
        &:hover {
          height: -webkit-fill-available + 12;
          padding-left: 25px;
          transition: 2s height;
        }
      }
    }
  }
}
</style>
