<template>
  <div>
    <transition name="popup">
      <div
        class="fixed bottom-0 left-0 right-0 h-screen z-30 w-full bg-white w-full"
        v-if="props.showDetails"
      >
        <div class="overflow-y-scroll h-screen">
          <div class="bg-pink-50">
            <!-- HEADER -->
            <div class="flex items-center justify-between pt-7">
              <div class="left-button ml-7">
                <button @click="closeDetails" class="bg-transparent outlin-0">
                  <i class="pi pi-chevron-left text-lg text-gray-600"></i>
                </button>
              </div>
              <div class="right-buttons flex items-center space-x-7 mr-7">
                <button class="bg-transparent outlin-0">
                  <i class="pi pi-exclamation-circle text-lg text-gray-600"></i>
                </button>
                <button class="bg-transparent outlin-0">
                  <i class="pi pi-external-link text-lg text-gray-600"></i>
                </button>
              </div>
            </div>

            <div class="details pt-16 pb-2">
              <div class="flex items-center justify-center">
                <img :src="props.image" alt="currentStory" class="rounded-lg" />
              </div>
              <h3
                class="text-center text-2xl text-slate-800 font-semibold mt-10"
              >
                {{ props.title }}
              </h3>
              <div class="text-center my-5">
                <p class="text-gray-500">{{ props.title }}</p>
                <p class="text-gray-500">
                  <span class="text-green-500">Complete </span>
                  {{ props.title }}
                </p>
              </div>

              <BaseTags
                :tags="tags"
                :tagClass="`bg-pink-200 p-1.5`"
                :tagContainer="`my-3`"
              />
            </div>
          </div>

          <div class="flex items-center justify-center w-full space-x-16 py-10">
            <div class="flex flex-col">
              <span class="flex items-center space-x-1 text-xl">
                <i class="pi pi-star text-yellow-500"></i>
                <div class="text-black font-bold">-</div>
              </span>
              <button class="text-red-800 font-semibold underline text-sm">
                Rate the book
              </button>
            </div>

            <div class="flex flex-col">
              <span class="flex items-end space-x-1">
                <span class="">No.</span>
                <div class="text-black font-bold text-2xl">1</div>
              </span>
              <button class="text-gray-500 underline text-sm">
                In Erotic Romance
              </button>
            </div>
          </div>

          <div class="p-4">
            <div class="intro">
              <h3 class="intro text-xl text-slate-800 font-semibold">
                Introduction
              </h3>
              <p class="text-gray-500 py-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo
                obcaecati, commodi enim accusantium dolores itaque saepe
                inventore earum ipsum iste doloremque aperiam ipsa sit, quasi
                numquam excepturi reiciendis exercitationem.
                <button class="text-sm text-black font-semibold">
                  Read more
                </button>
              </p>
            </div>
          </div>

          <div class="you-may-like px-4">
            <h3 class="intro text-xl text-slate-800 font-semibold pb-4">
              You may also like
            </h3>
            <div class="flex flex-nowrap overflow-x-auto no-scrollbar">
              <div
                class="story-item flex flex-col mx-2 min-w-32"
                v-for="story in stories"
                :key="story.id"
              >
                <img :src="story.image" class="h-48 rounded-lg" alt="" />
                <p class="text-sm text-slate-800 font-semibold pt-2">
                  {{ story.title }}
                </p>
              </div>
            </div>
          </div>

          <div class="end bg-gray-100 px-4 mb-20 py-2 mt-10">
            <ul>
              <li>
                <span class="title text-gray-500">Copiright statement</span>
                <br />
                <p class="text-gray-300 text-sm py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt asperiores inventore aspernatur tempora iste, quo
                  maxime.
                </p>
              </li>
              <li>
                <span class="title text-gray-500">Content rating</span>
                <br />
                <p class="text-gray-300 text-sm py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt asperiores inventore aspernatur tempora iste, quo
                  maxime.
                </p>
              </li>
            </ul>
          </div>

          <!-- FOOTER -->
          <div>
            <div
              class="fixed z-50 bottom-0 left-0 right-0 border-t border-t-gray-200 bg-white flex items-center justify-between px-5 py-3"
            >
              <button
                class="py-[1rem] px-7 rounded-full bg-white border border-red-600 text-red-600 text-xl"
              >
                Suscribe Now
              </button>
              <button
                class="py-[1rem] px-7 rounded-full bg-red-600 text-white text-xl"
              >
                Suscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseTags from "@/components/BaseTags.vue";
import { useStoriesStore } from "@/store/stories/stories";

const storiesStore = useStoriesStore();

const stories = ref([]);
const loading = ref(true);

const props = defineProps({
  showDetails: { type: Boolean },
  title: String,
  image: String,
});

onMounted(async () => {
  if (storiesStore) {
    await storiesStore.fetchStories();
    stories.value = storiesStore.stories;
    loading.value = storiesStore.loading;
  }
});
const tags = ref([
  "Reverse Harem",
  "Shapeshifters",
  "Adult fiction",
  "Paranormal romance",
  "bad-boys",
]);
const emit = defineEmits(["closeDetails"]);

const closeDetails = () => {
  emit("closeDetails");
};
</script>


<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>