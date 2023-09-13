<template>

                <TheHeader />
    
    <section>
       <div class="flex p-8 max-w-xlg  mx-full bg-white space-x-8 tracking-tighter grid grid-flow-col">
                      <div class="col-span-12 lg:col-span-2"> 
    
             
        <n-gradient-text
                                          :gradient="{
                                            from: 'rgb(0, 0, 0)',
                                            to: 'rgb(170, 170, 170)'
                                          }"
                                          :size="58"
                                          
                                      >
                                          After the Dance
                                      </n-gradient-text>
                                    </div>
             
                               <div class="flex col-span-8 max-w-xlg mx-full text-2xl tracking-wider font-thin text-gray-dark p-8">
                                <ul>
                                  <li><a href="">Press Release</a></li>
                                  <li><a href="">Scott Grooves  Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a></li>
                                  
                                </ul>
                                
                                
                      </div>
             
             
                                    </div>
    
    </section>
    <section>
         <div class="flex p-8 max-w-xlg  mx-full bg-white space-x-8 grid grid-flow-col">
                        <div class="col-span-12 lg:col-span-2"> 
          <n-gradient-text
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(170, 170, 170)'
              }"
              :size="58"
          >
              Interview
          </n-gradient-text>
          </div>
          <div class="flex col-span-8 text-2xl font-thin text-gray-dark p-8">
            <a class="inline-flex" href="/">Alia Benabdellah, Docteure en Géographie Humaine, in conversation with musician and artist Scott Grooves on August 8, 2023 </a>
          </div>
        </div>
      </section>
    
    <section>
              <div class="text-8xl h-full w-full tracking-tighter p-8">
                    <n-gradient-text
                                        :gradient="{
                                            from: 'rgb(0, 0, 0)',
                                            to: 'rgb(170, 170, 170)'
                                        }"
                                        :size="58"
                                    >
                                        Sketch Book
                                    </n-gradient-text>
                </div>      
                <div class="p-8">
        
                <n-grid x-gap="12" :cols="4">
                 <n-gi>
                        <img src="assets/images/sketches/Bad Hair Day.jpg" class="carousel-img" />
                        <div class="sketch-title">Bad Hair Day</div>
                  </n-gi>
                <n-gi>
                  <img src="assets/images/sketches/Bike Race.jpg" class="carousel-img" />
                  <div class="sketch-title">Bike Race</div>
                </n-gi>
                <n-gi>
                  <img src="assets/images/sketches/Blocking Out Her Thoughts.jpg" class="carousel-img" />
                      <div class="sketch-title">Blocking Out Her Thoughts</div>
                </n-gi>
                <n-gi>
                  <img src="assets/images/sketches/Downed Lines.jpg" class="carousel-img" />
                          <div class="sketch-title">Downed Lines</div>
                </n-gi>
              </n-grid>
                </div>        
    
                    <div class="p-8">
                    <n-grid x-gap="12" :cols="4">
                     <n-gi>
                            <img src="assets/images/sketches/Guggenhiem.jpg" class="carousel-img" />
                            <div class="sketch-title">Guggenhiem</div>
                      </n-gi>
                    <n-gi>
                      <img src="assets/images/sketches/Important Trade Routes.jpg" class="carousel-img" />
                      <div class="sketch-title">Important Trade Routes</div>
                    </n-gi>
                    <n-gi>
                      <img src="assets/images/sketches/In-flight Together.jpg" class="carousel-img" />
                          <div class="sketch-title">In-flight Together</div>
                    </n-gi>
                    <n-gi>
                      <img src="assets/images/sketches/Light Tunnel.jpg" class="carousel-img" />
                              <div class="sketch-title">Light Tunnel</div>
                    </n-gi>
                  </n-grid>
                    </div>
                    
                    <div class="p-8">
                        <n-grid x-gap="12" :cols="4">
                            <n-gi>
                                    <img src="assets/images/sketches/Manta Rays.jpg" class="carousel-img" />
                                    <div class="sketch-title">Manta Rays</div>
                            </n-gi>
                            <n-gi>
                            <img src="assets/images/sketches/Sea Horses.jpg" class="carousel-img" />
                            <div class="sketch-title">Sea Horses</div>
                            </n-gi>
                            <n-gi>
                            <img src="assets/images/sketches/Stars-lament.jpg" class="carousel-img" />
                                <div class="sketch-title">Stars lament</div>
                            </n-gi>
                            <n-gi>
                            <img src="assets/images/sketches/The Clown.jpg" class="carousel-img" />
                                    <div class="sketch-title">The Clown</div>
                            </n-gi>
                        </n-grid>
                    </div>        
                    <div class="p-8">
                        <n-grid x-gap="12" :cols="4">
                            <n-gi>
                                    <img src="assets/images/sketches/Untitled-A.jpg" class="carousel-img" />
                                    <div class="sketch-title">Untitled A</div>
                            </n-gi>
                            <n-gi>
                              <img src="assets/images/sketches/Untitled-B.jpg" class="carousel-img" />
                              <div class="sketch-title">Untitled B</div>
                            </n-gi>
                            <n-gi>
                              <img src="assets/images/sketches/Untitled C.jpg" class="carousel-img" />
                                  <div class="sketch-title">Untitled C</div>
                            </n-gi>
                            <n-gi>
                              <img src="assets/images/sketches/Untitled-D.jpg" class="carousel-img" />
                                      <div class="sketch-title">Untitled D</div>
                            </n-gi>
                        </n-grid>
                    </div>
                    <div class="p-8">
                            <n-grid x-gap="12" :cols="4">
                                <n-gi>
                                        <img src="assets/images/sketches/Untitled-Boats.jpg" class="carousel-img" />
                                        <div class="sketch-title">Untitled Boats</div>
                                </n-gi>
                        
                            </n-grid>
                        </div>        
    
        </section>
    
    <TheFooter></TheFooter>
</template>
<script>
import '~/assets/main.css'
import { defineComponent } from '@vue/composition-api'
import { NGradientText, NGrid, NGi, NDivider, NCarousel, NCarouselItem } from 'naive-ui'

export default defineComponent({
    components: {
        NGradientText,
        NGrid,
        NGi,
        NDivider,
        NCarousel,
        NCarouselItem
    }
})
</script>
<style scoped>
.carousel-img {
  width: auto;
  height: auto;
  object-fit: flex-grow;
}

.sketch-title{
    @apply text-xl text-gray font-thin uppercase w-full text-center;
}

</style>