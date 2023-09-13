<template>
    <div class="flex bg-white p-8 grid grid-flow-col min-w-full h-30">
        <div class="text-left col-span-10">
            <div class="w-full h-fit mx-auto grid grid-flow">
                <div class="flex col-span-11 h-fit flex">
                    <div class="tracking-tighter h-fit leading-8">
                        <a href="/">        
                            <n-gradient-text
                            :gradient="{
                                from: 'rgb(85, 85, 85)',
                                to: 'rgb(127, 127, 127)',
                                deg:'42'
                            }"
                            :size="42"
                            :deg="270"
                            >                
                                SG<br /> Art 
                            </n-gradient-text>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        <div class="col-span-1 z-50 pr-8">
            <modal-menu></modal-menu>   
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { NGradientText } from 'naive-ui'
export default defineComponent({
    components: {
        NGradientText
    }
})
</script>
<style scoped>
.n-gradient-text {
    font-size: 24px;
}
</style>