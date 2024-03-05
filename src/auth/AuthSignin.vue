<template>
    <div class="bg-[#0C0A17]">
        <div class="h-screen max-w-7xl mx-auto flex-col justify-between">
            <div class="flex flex-col justify-center items-center pt-20">
                <img src="../assets/auth/auth.jpg" class="object-cover md:h-96" alt="auth-image" />
                <h4 class="text-gray-200 mt-5 sm:text-2xl text-xl sm:px-0 px-3">Find millions of incredible stories here
                </h4>
                <span class="md:text-xs text-[0.75rem] text-gray-700 mt-3">*AppAnnie, 2023, Android, by downloads"</span>
            </div>
            <div class="absolute bottom-10 left-0 right-0 md:px-10 px-5 md:max-w-sm mx-auto">
                <div class="flex flex-col space-y-3">
                    <button @click="userGoogleSignin"
                        class="bg-white w-full flex items-center justify-between rounded-md px-5 py-2.5">
                        <img src="../assets/auth/gmail.png" class="h-5" alt="gmail-icon" />
                        <span class="pr-20">Login with google</span> </button>
                    <button @click="userFacebookSignin"
                        class="bg-white w-full flex items-center justify-between rounded-md px-5 py-2.5">
                        <img src="../assets/auth/facebook.png" class="h-5 rounded" alt="gmail-icon" />
                        <span class="pr-20">Login with facebook</span> </button>
                    <p class="text-gray-200  mb-10 md:text-sm text-xs text-gray-500 flex items-center justify-center">
                        <i class="pi pi-question-circle"></i>
                        <span class="ml-1">Cannot login?</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const authStore = useAuthStore();

const userGoogleSignin = async () => {
    await authStore.userGoogleSignin();
    router.push({ path: '/dashboard/stories' })
};

const userFacebookSignin = async () => {
    await authStore.userFacebookSignin();
    router.push({ path: '/dashboard/stories' })
};
</script>
