<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <div class="fixed md:bottom-6 bottom-24 right-5">
            <div class="h-12 w-12 rounded-full flex items-center justify-center shadow shadow-white" :class="giftBg">
                <img src="../assets/stories/stories-gift.png" />
            </div>
        </div>        
        <StoriesFooter />
    </div>
</template>

<script setup>
import StoriesFooter from './StoriesFooter.vue';
import { computed } from 'vue';
import { useRoute } from "vue-router";


const route = useRoute(); 
console.log("router", route.path)
const giftBg = computed(() => {

    const path = route.path
    return path === '/dashboard/discover' ? 'bg-white' : 'bg-[#131224]'
})
</script>