<template>
  <header class="relative flex">
    <div class="relative  z-30 w-full p-5 text-2xl grid-row-2 col-span-12">
      <!--
    <TheHeader />
    
    <div class="bg-transparent flex p-8 mx-auto grid grid-flow-col z-20">
        <div class="text-left  col-span-10">    
            <TheHeader></TheHeader> 
        </div>
        <div class="text-right col-span-1">
            <transition name="nav">
                <modal-menu></modal-menu>
            </transition>
        </div>
    </div>   
    -->

    <div>
      Upcoming Exhibition: 
    </div>

      <div class="relative flex m-96 col-span-12 h-full w-full">
        <div
          class="relative z-30 p-9 m-96 border-white border-2 text-center text-6xl bg-white bg-opacity-60 row-span-3 hover:bg-white hover:bg-opacity-80 hover:scale-105">
          <n-gradient-text :gradient="{
            from: 'rgb(85, 85, 85)',
            to: 'rgb(127, 127, 127)',
            deg: '90'
          }" :size="42" :deg="270">
            <a href="/about">SG <br />Art</a>
          </n-gradient-text>
        </div>
      </div>

    </div>
    <video autoplay loop muted class=" pt-0 pb-0 z-10 h-auto">


      <source src="~/assets/images/InShot_20230815_154703481.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </header>
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