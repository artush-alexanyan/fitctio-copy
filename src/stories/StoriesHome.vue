<template>
    <div class="stories bg-[#131224] p-3">
        <StoryHeader />
        <div class="stories-content max-w-4xl mx-auto md:mt-0 md:mt-24 mt-16">
            <StoriesTags :tags="tags" />
            <StorySection :stories="stories" :sectionTitle="`Based on your recente reading`" />
            <StorySection :stories="stories" :sectionTitle="`Most Popular on Fictio`" />
            <StorySection :stories="stories" :sectionTitle="`Recent updates`" />
            <StorySection :stories="stories" :sectionTitle="`Based on your recente reading`" />
            <StorySection :stories="stories" :sectionTitle="`Based on your recente reading`" />
        </div>
        <div class="fixed md:bottom-6 bottom-24 right-5">
            <div class="h-12 w-12 rounded-full shadow shadow-white">
                <img src="../assets/stories/stories-gift.png" />
            </div>
        </div>
        <StoriesFooter />
    </div>
</template>

<script setup>
import { ref } from "vue";
import StoriesFooter from './StoriesFooter.vue';
import StorySection from "./StorySection.vue";
import StoriesTags from "./StoriesTags.vue";
import StoryHeader from './StoryHeader.vue';


const tags = ref([
    "Shapeshifters", "Adult fiction", "Paranormal romance", "bad-boys"
]);

const stories = ref([
    { id: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQaxOMvlqKRQ1Ib7m110Qu-nJkL07JarYiA&usqp=CAU", title: "Modern Spaces" },
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&usqp=CAU", title: "Don't look back" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFlPtRDjgyuKkHHIs5VPAZkAbCY9rh6jF8w&usqp=CAU", title: "Stephan King Holly" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nNTRoHLNRlEpD-1M5TYwXpa167wlinCYUw&usqp=CAU", title: "Abandoned Kingdom" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&usqp=CAU", title: "Design Of Books" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShduvvTvVd_tvaaIWO0XtgLwNprZruW96miA&usqp=CAU", title: "Rick Riordan" },
])
</script>

<style scoped>
/* Hide scrollbar for Firefox */
.stories {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}

/* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
.stories::-webkit-scrollbar {
    width: 12px;
    /* Set a width for the scrollbar */
}

.stories::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* Set the color of the thumb */
}

.stories::-webkit-scrollbar-track {
    background-color: transparent;
    /* Set the color of the track */
}
</style>