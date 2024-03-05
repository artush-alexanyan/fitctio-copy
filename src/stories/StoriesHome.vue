<template>
  <div>
    <div class="stories bg-[#131224]">
      <StoryHeader class="p-3" />
      <div class="flex items-center justify-center h-screen" v-if="loading">
        <i class="pi pi-spinner pi-spin text-2xl text-white"></i>
      </div>
      <div
        v-else
        class="stories-content max-w-4xl mx-auto md:mt-0 md:mt-p4 pt-10 pb-20"
      >
        <BaseTags :tags="tags" />
        <StorySection
          :stories="stories"
          :sectionTitle="`Based on your recente reading`"
        />
        <StorySection
          :stories="stories"
          :sectionTitle="`Most Popular on Fictio`"
        />
        <StorySection :stories="stories" :sectionTitle="`Recent updates`" />
        <StorySection
          :stories="stories"
          :sectionTitle="`Based on your recente reading`"
        />
        <StorySection
          :stories="stories"
          :sectionTitle="`Based on your recente reading`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import StorySection from "./StorySection.vue";
import BaseTags from "@/components/BaseTags.vue";
import StoryHeader from "./StoryHeader.vue";
import { useStoriesStore } from "@/store/stories/stories";

const storiesStore = useStoriesStore();

const stories = ref([]);
const loading = ref(true);

onMounted(async () => {
  if (storiesStore) {
    await storiesStore.fetchStories();
    stories.value = storiesStore.stories;
    loading.value = storiesStore.loading;
  }
});

const tags = ref([
  "Shapeshifters",
  "Adult fiction",
  "Paranormal romance",
  "bad-boys",
]);
</script>



<style scoped></style>