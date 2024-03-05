<template>
  <StoryDetails
    @closeDetails="closeDetails"
    :showDetails="showDetails"
    :title="title"
    :image="image"
  />
  <div class="bg-white md:max-w-4xl mx-auto">
    <div
      class="flex items-center md:justify-center justify-start px-3 w-full text-center transition-opacity duration-300"
      :class="{ hidden: isSticky }"
    >
      <h1 class="py-2 uppercase text-2xl text-black font-bold">Discover 🧐</h1>
    </div>

    <div
      class="px-3"
      :class="
        isSticky
          ? 'fixed top-0 w-full transition z-20 bg-white duration-300 py-6 mr-5'
          : 'w-full'
      "
    >
      <div
        class="flex items-center rounded-full py-1.5 border-2 border-gray-600 relative bg-white"
        :class="isSticky ? 'w-3/4' : 'w-full'"
      >
        <input
          type="text"
          class="outline-0 bg-white mx-3 w-full px-4"
          placeholder="Search"
        />
        <i class="pi pi-search absolute left-1.5 text-lg text-gray-600"></i>
      </div>
    </div>

    <div class="">
      <BaseTags
        :tags="tags"
        :tagClass="`bg-pink-200 p-1.5`"
        :tagContainer="`my-3`"
      />
    </div>
    <div class="flex items-center justify-center h-screen" v-if="loading">
      <i class="pi pi-spinner pi-spin text-2xl text-slate-900"></i>
    </div>
    <div v-else class="p-5">
      <div class="grid-content border-t border-t-gray-200 md:pt-10 space-y-4">
        <h3
          class="md:text-2xl text-xl font-extrabold text-slate-800 text-left my-5 whitespace-wrap"
        >
          Stories you discovered on facebook
        </h3>
        <span>Keep reading</span>
        <div class="md:grid flex flex-nowrap overflow-x-auto no-scrollbar">
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-20">
            <li class="my-3" v-for="story in stories1" :key="story.id">
              <div
                class="story-card min-w-56 bg-yellow-50 pr-4 mr-5 rounded-lg"
              >
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-5">
            <li class="my-3" v-for="story in stories2" :key="story.id">
              <div
                class="story-card min-w-56 bg-yellow-50 pr-4 mr-5 rounded-lg"
              >
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-5">
            <li class="my-3" v-for="story in stories3" :key="story.id">
              <div class="story-card min-w-56 bg-yellow-50 pr-4 rounded-lg">
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid-content pt-5 space-y-4 md:px-0">
        <div class="relative">
          <div class="flex items-center justify-between">
            <h3
              class="md:text-xl text-lg font-extrabold text-slate-800 text-black text-left my-5 relative z-10"
            >
              Most popular
            </h3>
            <router-link
              to="/discover"
              class="text-xs flex items-center text-red-600"
            >
              <span class="mr-3">View all</span>
              <i class="pi pi-chevron-right"></i>
            </router-link>
          </div>
          <span
            class="absolute z-0 h-4 w-40 bg-gradient-to-r from-yellow-300 left-7 top-9"
          ></span>
        </div>

        <span>Explore beloved classics that stole hearts</span>
        <div class="md:grid flex flex-nowrap overflow-x-auto no-scrollbar">
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-20">
            <li class="my-3" v-for="story in stories1" :key="story.id">
              <div class="story-card min-w-56 pr-4 mr-5 rounded-lg">
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-5">
            <li class="my-3" v-for="story in stories2" :key="story.id">
              <div class="story-card min-w-56 pr-4 mr-5 rounded-lg">
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="md:grid md:grid-cols-3 md:gap-10 gap-5">
            <li class="my-3" v-for="story in stories3" :key="story.id">
              <div class="story-card min-w-56 pr-4 rounded-lg">
                <div class="flex items-center space-x-5">
                  <div class="image">
                    <img
                      :src="story.image"
                      alt="storyImage"
                      class="md:h-auto h-40 w-full min-w-24 rounded-lg"
                    />
                  </div>
                  <div class="details flex flex-col space-y-2">
                    <p class="md:text-lg font-semibold">{{ story.title }}</p>
                    <span class="text-gray-200 text-sm">#Warevalwes</span>
                    <span class="text-gray-200 text-sm">#alpha</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="new-relesed mb-10">
        <h3
          class="md:text-2xl text-xl font-extrabold text-slate-800 text-black text-left my-5 relative z-10"
        >
          New relesed
        </h3>
        <div
          class="flex flex-col justify-between items-center bg-yellow-200 rounded-2xl"
        >
          <h2
            class="text-center text-slate-800 text-xl text-slate-800 mt-10 font-bold"
          >
            Endless Stories. Daily Unfoalds.
          </h2>
          <p class="text-lg font-semibold mb-7 mt-5">
            Suscribe and read all for free
          </p>
          <img src="@/assets/discover/discover.jpg" />
          <button
            class="py-4 px-10 mt-12 mb-16 rounded-full bg-red-600 text-white text-xl"
          >
            Suscribe Now
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div class="flex flex-col" v-for="story in stories4" :key="story.id">
          <div class="relative">
            <img :src="story.image" alt="" class="rounded-xl" />
            <span
              class="absolute top-4 right-2 rounded p-[0.125rem] text-sm text-gray-500 bg-green-300"
            >
              <span>Completed</span>
            </span>
            <span
              class="absolute bottom-0 py-2 left-0 right-0 rounded-b-xl text-sm bg-slate-700 text-white text-center"
            >
              84 chapters published
            </span>
          </div>
          <p class="font-semibold my-2">{{ story.title }}</p>
          <span class="text-sm text-gray-400">#romance#Werevolves</span>
        </div>
      </div>
      <div class="pt-5 pb-24 text-center text-sm text-purple-500">
        <span>~The end</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import BaseTags from "@/components/BaseTags.vue";
import { useStoriesStore } from "@/store/stories/stories";

const storiesStore = useStoriesStore();

const stories1 = ref([]);
const stories2 = ref([]);
const stories3 = ref([]);
const stories4 = ref([]);
const loading = ref(true);

const isSticky = ref(false);
const tags = ref([
  "Reverse Harem",
  "Shapeshifters",
  "Adult fiction",
  "Paranormal romance",
  "bad-boys",
]);

onMounted(async () => {
  if (storiesStore) {
    await storiesStore.fetchStories();
  }

  stories1.value = storiesStore.stories.slice(0, 3);
  stories2.value = storiesStore.stories.slice(0, 3);
  stories3.value = storiesStore.stories.slice(0, 3);
  stories4.value = storiesStore.stories;
  loading.value = storiesStore.loading;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const threshold = 40;
  isSticky.value = window.scrollY > threshold;
};
</script>


<style></style>