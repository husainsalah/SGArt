<template>
        <div class="flex z-50 float-right pr-8 mx-auto grid grid-flow-col">
            <div class="fixed">
               <div v-if="!showModal" >
                <button class="hover:scale-110 hover:text-white hover:bg-opacity-80" aria-label="Open Menu" @click="showModal = true">
                   
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" class="w-12 h-12 align-top">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="black"></path>
                    </svg>
                    
                </button>
                </div>
                <div v-else>
                    <div class="flex z-50 bg-white">
                        <button  class="justify-right z-50 hover:scale-110 hover:text-white hover:bg-opacity-80" aria-label="Close Menu" @click=" showModal = false">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" class="w-12 h-12 align-top hover:text-white">
                                <line x1="4" y1="20" 
                                        x2="20" y2="4" 
                                        stroke="gray" 
                                        stroke-width="2"/>
                                    <line x1="4" y1="4" 
                                        x2="20" y2="20" 
                                        stroke="gray" 
                                        stroke-width="2"/>
                            </svg>
                    
                        </button>
                    </div>
                </div>
            </div>
            <n-modal 
                v-model:show="showModal" 
                  style="background-color: rgba(255, 255, 255, 1);
                            width:92%;z-index: 20;"
                class="pt-10">
            <n-card
              style="width: 92%; height:100%; position: absolute; top: 0px; bottom: 0px; right:8%;z-index: 20;"
              
              preset="modal"
              :bordered="true"
              :mask-closable="false"
              size="small"
              role="dialog"
              aria-modal="true"
            >
            <!--
            <div class="w-90 text-right -pt-40 pr-24">
               <button  class="bg-white text-white hover:scale-110 hover:text-white hover:bg-opacity-80" aria-label="Close Menu" @click=" showModal = false">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    viewBox="0 0 24 24" class="z-50 w-12 h-12 align-top">
                                    <line x1="4" y1="20" 
                                            x2="20" y2="4" 
                                            stroke="black" 
                                            stroke-width="2"/>
                                        <line x1="4" y1="4" 
                                            x2="20" y2="20" 
                                            stroke="black" 
                                            stroke-width="2"/>
                                </svg>
                            </button>
            </div>
           -->
                    <span class="menu-item">
                        <a href="/">
                        <n-gradient-text class="hover:text-white"
                                :gradient="{
                                    from: 'rgb(0, 0, 0)',
                                    to: 'rgb(127, 127, 127)',
                                    deg: '270'
                                }"
                                :size="48"
                                :deg="0"
                                >                
                                Home
                        </n-gradient-text>
                        </a>
                    </span>
                <span class="menu-item">
                    <a href="/about">
                        <n-gradient-text class="hover:text-white"
                                    :gradient="{
                                        from: 'rgb(0, 0, 0)',
                                        to: 'rgb(127, 127, 127)',
                                        deg: '270'
                                    }"
                                    :size="48"
                                    :deg="90"
                                    >                
                        
                            About
                        </n-gradient-text>
                    </a>
                </span>
                
                <span class="menu-item">
                    <a href="/exhibitions">
                        <n-gradient-text class="hover:text-white"
                                        :gradient="{
                                            from: 'rgb(0, 0, 0)',
                                            to: 'rgb(127, 127, 127)',
                                            deg: '270'
                                        }"
                                        :size="48"
                                        :deg="270"
                                        >                
                            Exhibitions
                        </n-gradient-text>
                        </a>
                </span>

                    <span class="menu-item"><a href="/art">
                        <n-gradient-text class="hover:text-white"
                                        :gradient="{
                                            from: 'rgb(0, 0, 0)',
                                            to: 'rgb(127, 127, 127)',
                                            deg: '270'
                                        }"
                                        :size="48"
                                        :deg="180"
                                        >                
                            Press & Media 
                        </n-gradient-text>
                        </a></span>
                    <span class="menu-item"><a href="/contact">
                        <n-gradient-text class="hover:text-white"
                                        :gradient="{
                                            from: 'rgb(0, 0, 0)',
                                            to: 'rgb(127, 127, 127)',
                                            deg: '270'
                                        }"
                                        :size="48   "
                                        :deg="90"
                                        >                
                                Contact
                            </n-gradient-text>
                            </a></span>
                
              
            </n-card>
          </n-modal>
        </div>
        
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { NGradientText, NButton, darkTheme, NModal, NCard } from 'naive-ui'
export default defineComponent({
    components: {
        NButton,
        darkTheme,
        NGradientText,
        NModal,
        NCard
    },
    
    setup() {
        return {
             bodyStyle: {
                width: "100%"
            },
            segmented: {
                content: "soft",
                footer: "soft"
            },
            showModal: ref(false)
        }
    }
})
</script>
<style scoped>
.menu-item{
    @apply flex text-black p-4 font-thin text-6xl text-center hover:scale-100 hover:text-white hover:bg-black hover:bg-opacity-20 hover:-translate-y-1;
}
.menu-item a{
    @apply text-6xl w-full text-center;
}

</style>
