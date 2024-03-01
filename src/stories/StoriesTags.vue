<template>
    <div>
        <ul
            class="flex items-center md:justify-start justify-center md:space-x-5 space-x-1 md:mt-24 mt-8 mb-5 w-full lg:overflow-x-hidden overflow-x-auto">
            <li class="bg-gray-600 text-gray-200 rounded-full py-[0.125rem] px-1.5 text-sm  font-thin whitespace-nowrap"
                v-for="tag in props.tags">
                <span> #{{ tag }} </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    tags: { type: Array }
})

</script>