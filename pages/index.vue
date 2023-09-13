<template>
<header class="relative flex">
     <div class="absolute z-10 h-full w-full">
        <video
        autoplay
        loop
        muted
        class=" pt-0 pb-0 z-10 ">
        <source
          src="~/assets/images/free-jazz-gallery-tour-v1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
        </video>
      </div>
      <div class="relative z-30 flex m-96 w-full">
      
        <div
              class="relative z-30 p-9 mx-auto my-auto border-white border-2 text-center text-6xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none">
                <n-gradient-text
                    :gradient="{
                        from: 'rgb(85, 85, 85)',
                        to: 'rgb(127, 127, 127)',
                        deg: '90'
                    }"
                    :size="24"
                    :deg="270"
                >
                <a href="/about">SG Art<br/>Enter<br />Here</a>
                </n-gradient-text>
            </div>
        </div>   
</header>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { NGradientText } from 'naive-ui'

export default defineComponent({
    components: {
        NGradientText,
        
    }
})
</script>
<style scoped>
.n-gradient-text {
    font-size: 24px;
}
</style>