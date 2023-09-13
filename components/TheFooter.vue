<template>
    
    <footer className="relative w-full p-6 h-85px mx-auto bg-white text-center font-thin text-silver">
       <n-divider></n-divider>
        <p className="bg-white text-center ">Copyright © Scott Grooves, 2023</p>
    </footer>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { NDivider } from 'naive-ui'
export default defineComponent({
    components: {
        NDivider,
    }
        
})
</script>
