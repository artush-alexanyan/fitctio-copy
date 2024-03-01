<template>
    <div class="stories-footer fixed bottom-0 left-0 right-0 bg-gray-50 py-3 px-5 block md:hidden">
        <div class="footer-wrapper">
            <ul class="flex items-center justify-between">
                <li class="flex flex-col items-center justify-center text-red-600">
                    <i class="pi pi-heart text-lg"></i>
                    <router-link class="text-sm" to="/">Featured</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <i class="pi pi-home text-lg"></i>
                    <router-link class="text-sm" to="/">DISCOVER</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <i class="pi pi-download text-lg"></i>
                    <router-link class="text-sm" to="/">Library</router-link>
                </li>
                <li class="flex flex-col items-center justify-center text-gray-400">
                    <i class="pi pi-user text-lg"></i>
                    <router-link class="text-sm" to="/">Perfil</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>