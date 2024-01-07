<template>
  <div>
    <template v-for="banner in BannersFields" :key="banner.id">
      <BannerComponent
        :description="banner.desription"
        :price="Number(banner.price)"
        :imagePath="banner.path"
        :link="banner.link"
      ></BannerComponent>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BannerComponent from "@/components/BannerComponent.vue";
import BannersFields from "@/jsons/banners.json";

export default defineComponent({
  data() {
    return {
      BannersFields,
    };
  },
  components: { BannerComponent },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
