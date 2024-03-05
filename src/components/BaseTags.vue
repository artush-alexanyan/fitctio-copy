<template>
    <div>
        <ul
        :class="props.tagContainer"
            class="flex items-center md:justify-start justify-center md:space-x-5 space-x-1  w-full lg:overflow-x-hidden overflow-x-auto no-scrollbar">
            <li :class="props.tagClass" class="rounded-full text-sm  font-thin whitespace-nowrap"
                v-for="tag in props.tags">
                <span> #{{ tag }} </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    tags: { type: Array },
    tagClass: { type: String, default: 'bg-gray-600 text-gray-200 py-[0.125rem] px-1.5' },
    tagContainer: { type: String, default: 'md:mt-24 mt-8 mb-5' }
})

</script>