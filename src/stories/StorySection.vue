<template>
    <div class="recent">
        <h3 class="md:text-xl text-lg font-semibold text-gray-100 text-left my-3">
            {{ props.sectionTitle }}
        </h3>
        <div>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="slide in props.stories" :key="slide.id">
                    <div class="mx-1">
                        <img :src="slide.image" class="rounded-md" />
                        <p class="text-gray-500 text-left mt-2"> {{ slide.title }} </p>
                    </div>
                </Slide>
                <template  #addons>
                    <Navigation class="md:block hidden" />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const props = defineProps({
    sectionTitle: { type: String },
    stories: { type: Array }
})

const settings = ref({
    itemsToShow: 3.5,
    snapAlign: 'center',
});

const breakpoints = ref({
    700: {
        itemsToShow: 4,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    }
});
</script>
