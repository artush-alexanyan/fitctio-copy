<template>
  <div class="recent">
    <h3 class="md:text-xl text-lg font-semibold text-gray-100 text-left my-3">
      {{ props.sectionTitle }}
    </h3>
    <div>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in props.stories" :key="slide.id">
          <div class="mx-1" @click="toggleDetails(slide)">
            <img :src="slide.image" class="rounded-md" />
            <p class="text-gray-500 text-left mt-2">{{ slide.title }}</p>
          </div>
        </Slide>
        <template #addons>
          <Navigation class="md:block hidden" />
        </template>
      </Carousel>
    </div>
    <StoryDetails
      @closeDetails="closeDetails"
      :showDetails="showDetails"
      :title="title"
      :image="image"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import StoryDetails from "./StoryDetails.vue";

const showDetails = ref(false);
const image = ref("");
const title = ref("");

const toggleDetails = (item) => {
  showDetails.value = true;
  image.value = item.image;
  title.value = item.title;
  console.log("item", item);
};

const closeDetails = () => {
  showDetails.value = false;
};
const props = defineProps({
  sectionTitle: { type: String },
  stories: { type: Array },
});

const settings = ref({
  itemsToShow: 3.5,
  snapAlign: "center",
});

const breakpoints = ref({
  700: {
    itemsToShow: 4,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>
