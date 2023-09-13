<template>
    <nav
        class="fixed  w-full justify-between px-6 h-16 text-gray z-10">
        <div class="fixed w-full items-right">
            <button class="w-full items-right" aria-label="Open Menu" @click="drawer">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    viewBox="0 0 24 24" class="w-10 h-10">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
    
        </div>

        <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
            leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
            <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
            </div>
        </transition>
        <aside
            class="transform top-0 left-0 w-64 text-silver text-center fixed h-full w-full bg-white opacity-95 overflow-auto ease-in-out transition-all duration-300 z-30"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
            <span @click="isOpen = false" class="flex w-full items-center p-4 ">
                <img src="~/assets/images/logo.png" alt="Logo" class="h-auto w-32 mx-auto" />                
            </span>
            <div class="w-full mx-auto">
            <span class=" flex text-4xl text-center items-center w-full mx-auto p-4 ">
                Scott Grooves Art
            </span>
            </div>
            <span @click="isOpen = false" class="flex items-center p-4 hover:scale-102 hover:text-gray-dark hover:-translate-y-1"><span
                    class="mr-2">
                </span>
                <span class="text-2xl"><a href="/">Home</a></span></span>
            <span @click="isOpen = false" class="flex items-center p-4 hover:bg-gray-dark opacity-90 hover:text-white "><span
                    class="mr-2">
                </span>
                <span class="text-2xl"><a href="/about">About</a></span></span>
            <span @click="isOpen = false" class="flex items-center p-4 hover:bg-gray-dark opacity-90 hover:text-white "><span
                    class="mr-2">
                </span>
                <span class="text-2xl"><a href="/about">Exhibitions</a></span></span>
            <span @click="isOpen = false" class="flex items-center p-4 hover:bg-gray-dark opacity-90 hover:text-white "><span
                    class="mr-2">
                </span>
                <span class="text-4xl"><a href="/about">Press</a></span></span>
            <span @click="isOpen = false" class="flex items-center p-4 hover:bg-gray-dark opacity-90 hover:text-white "><span
                    class="mr-2">
                </span>
                <span class="text-4xl"><a href="/about">Contact</a></span></span>
        </aside>
    </nav>
</template>

<script>
import { NButton, darkTheme } from 'naive-ui' 
export default {
    components: {
        NButton,
        darkTheme
    },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        drawer() {
            this.isOpen = !this.isOpen;
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen) document.body.style.setProperty("overflow", "hidden");
                    else document.body.style.removeProperty("overflow");
                }
            }
        }
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    }
};
</script>