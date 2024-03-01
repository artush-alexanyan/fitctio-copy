<template>
    <div class="stories-footer fixed bottom-0 left-0 right-0 bg-white py-3 px-5 block md:hidden">
        <div class="footer-wrapper">
            <ul class="flex items-center justify-between">
                <li class="flex flex-col items-center justify-center text-red-600">
                    <img src="../assets/stories/heart-icon.jpg" class="h-5" alt="heart-icon" />
                    <router-link class="text-sm mt-1" to="/">Featured</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <img src="../assets/stories/home-icon.jpg" class="h-5" alt="heart-icon" />
                    <router-link class="text-sm mt-1" to="/">DISCOVER</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <img src="../assets/stories/download-icon.jpg" class="h-5" alt="heart-icon" />
                    <router-link class="text-sm mt-1" to="/">Library</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <img src="../assets/stories/user-icon.jpg" class="h-5" alt="heart-icon" />
                    <router-link class="text-sm mt-1" to="/">Perfil</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>