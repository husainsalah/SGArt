
<template>
    
    <TheHeader />
    
    <section>
        <div class="grid m-8 h-fit bg-white grid grid-flow-col">
            <div class="col-span-4 columns-1 h-fit w-fit">
                <div class="text-8xl h-fit w-fit tracking-tighter">
                    <n-gradient-text
                        :gradient="{
                            from: 'rgb(0, 0, 0)',
                            to: 'rgb(170, 170, 170)',
                            deg: '210'
                        }"
                        :size="82"
                    >
                        About  
                    </n-gradient-text>
                </div>
            </div>   
            <div class="grid columns-span-8 p-8 max-w-xlg mx-4 text-2xl font-thin text-gray-dark">
                <div class="mb-4 tracking-wide leading-8">Sgart, known in the music world as Scott Grooves, is a Detroit-based artist and musician who seamlessly combines music and elements of industrialism to create captivating immersive experience and artworks. Renowned for his contributions to jazz, electronic music and balancing man with machine; the organic with the synthetic.
                </div>
                    <div class="mb-4 tracking-wide leading-8">
                Since the early 2000s, Grooves has established himself as a fiercely independent artist, primarily releasing music on his own labels: Natural Midi, Modified Suede Recordings, and From The Studio of Scott Grooves. His most recent drop, ‘E2E4 Reframed’, a live reimagined cover of the immortal classic from 1984.
                    </div>
                        <div class="mb-4 tracking-wide leading-8">
                Grooves was included in an inclusive seventy artist exhibition titled Motion, curated by Roula David at Spotlite, Detroit. In May 2023, he made his debut as an artist in residence at FILTER Detroit, the artist residency and contemporary art platform established in 2010 to promote collaboration among residents, neighbors, and the city of Detroit. The exhibition titled Free Jazz, curated by Kerstin Niemann, showcased Grooves' unique artistic style, which involves incorporating mass-produced materials from consumer culture and giving them their own distinct language. 
                    </div>
                        <div class="mb-4 tracking-wide leading-8">
                For his second solo exhibition After the Dance, curated by Elysia Borowy at the underground artist space Red Door Digital, Grooves crafted five installations that delve into experimental expressionism in the realms of both visual arts and electronic music. Grooves' installations serve as a profound personal response to the pervasive capitalist-driven culture while also drawing inspiration from afrofuturism. Through these thought-provoking explorations, the artist reflects on the impact of consumerism and creates a captivating visual dialogue that engages viewers with societal and futuristic themes.
                    </div>
                        
            </div>
        </div>
    </section> 

    <section>
        <div class=" flex p-8 flex-col z-10">
            <n-carousel effect="card"
                prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                next-slide-style="transform: translateX(50%) translateZ(-800px);"
                style="height: 1280px"
                :show-dots="false"
              >

                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/enter.jpg"
                    >
                    <div class="sketch-title">ENTER<br /> 12 x 12in <span class="text-sm">(30.48 x 30.48cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>

                <n-carousel-item :style="{ width: '60%' }">

                <img
                    class="carousel-img"
                    src="~/assets/images/call.jpg"
                >
                <div class="sketch-title">OSHIABANA CALL<br /> 9 x 12in <span class="text-sm">(22.86 x 30.48cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>


                 <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-1.jpg"
                    >
                        <div class="sketch-title">Untitled no. 1<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-2.jpg"
                    >
                    <div class="sketch-title">Untitled no. 2<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                            <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-3.jpg"
                    >
                    <div class="sketch-title">Untitled no. 3<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                        </n-carousel-item>
               <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-4.jpg"
                    >
                            <div class="sketch-title">Untitled no. 4<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-5.jpg"
                    >
                <div class="sketch-title">Untitled no. 5<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/untitled-no-6.jpg"
                    >
                    <div class="sketch-title">Untitled no. 6<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                 
                <n-carousel-item :style="{ width: '60%' }">
                        <img
                            class="carousel-img"
                            src="~/assets/images/untitled-no-7.jpg"
                        >
                    <div class="sketch-title">Untitled no. 7<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canas </div>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                    class="carousel-img"
                    src="~/assets/images/different-earths.jpg"
                    >
                    <div class="sketch-title">DIFFERENT EARTHS<br /> 11 x 14in <span class="text-sm">(20.32 x 25.4cm)</span><br /> acrylic on canvas </div>
                </n-carousel-item>
            
                <n-carousel-item :style="{ width: '60%' }">

                    <img
                        class="carousel-img"
                        src="~/assets/images/girl-groups.jpg"
                    >
                  <div class="sketch-title">GIRL GROUP<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> marker on canvas </div>
                  <div class="sketch-title">note: inspired by the female groups of the motown era</div>
                </n-carousel-item>

                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/flower-pot.jpg"
                    >
                     <div class="sketch-title">FLOWER BOX<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> mixed media on canvas </div>
                </n-carousel-item>
        
        
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                        class="carousel-img"
                        src="~/assets/images/zulu-robot.jpg"
                    >
                    <div class="sketch-title">ZULU ROBOT<br /> 8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br /> marker & pastel on canvas </div>
                </n-carousel-item>
        
        
        
                <n-carousel-item :style="{ width: '60%' }">
                    <img
                    class="carousel-img"
                    src="~/assets/images/parts-of.jpg"
                    >
                    <div class="sketch-title">PARTS OF<br /> 12 x 12in <span class="text-sm">(30.48 x 30.48cm)</span><br /> marker on album jacket </div>
                </n-carousel-item>     
            </n-carousel>
        </div>
    </section>    
    <section class="max-w-screen mx-auto mt-4">
        <div class="grid pl-8 pr-8 max-w-xlg  mx-full bg-white space-x-8 grid grid-flow-col">
            <div class="col-span-12 lg:col-span-2"> 
                <h1 class="text-6xl tracking-tighter leading-11 h-full">
                    <n-gradient-text
                        :gradient="{
                            from: 'rgb(0, 0, 0)',
                            to: 'rgb(170, 170, 170)'
                        }"
                        :size="58"
                    >
                        Artist<br />Statement<br />
                    </n-gradient-text>
                </h1>
            </div>
            <div class="col-span-8 pl-8 pr-8 max-w-xlg mx-full text-2xl font-thin text-gray-dark">
                <div class="mb-4 tracking-wide leading-8">3AM Thought: I see with my  ears when I write music and I see with  my eyes when I make art. 
     </div>
                        <div class="mb-4 tracking-wide leading-8">
               
                3AM Thought: A civilization of beings who were reduced to inexpensive vessels of function. But slowly begin to reappear after the material has been tossed aside. This is the visual story of All-Dee People - a story of faces. 
     </div>
                        <div class="mb-4 tracking-wide leading-8">
               
                3AM Thought: For years music was my escape hatch during the pandemic, I built a new one, art. 
     </div>
                        <div class="mb-4 tracking-wide leading-8">
               
                3AM Thought: All-Dee People, even though they lost their original identity to the "everydayness" they never forgot where they came from. And their hope is to one day totally break free of their chemically based composition and be normal again…whatever that is.This restoration process begins the day the everydayness stops.
     </div>
                        <div class="mb-4 tracking-wide leading-8">
               
                3AM Thought: Listening to music doesn’t directly influence my work, but it does affect my mood which helps the mobility of my work. Fragments  in my head join other fragments and form new ideas. 
                </div>
            </div>
        
        </div>
    </section>
    <section>
        <div class="flex col-span-12 m-auto pl-96 pr-96  w-full place-object-center mx-auto text-2xl font-thin text-gray-dark">
            <video  nocontrols muted autoplay loop class="flex" poster="~/assets/images/sg-video-poster.png">
                <source
                        src="~/assets/images/InShot_20230815_154703481_1.mp4"
                        type="video/mp4"
                        />
                </video>
            </div>
    </section>




<section>
     <div class="grid p-8 max-w-xlg  mx-full bg-white space-x-8 grid grid-flow-col">
                    <div class="col-span-12 lg:col-span-2"> 
                        <h1 class="p-8 text-6xl tracking-tighter leading-11 h-full">
                            <n-gradient-text
                                :gradient="{
                                    from: 'rgb(0, 0, 0)',
                                    to: 'rgb(170, 170, 170)'
                                }"
                                :size="58"
                            >
                          Newsletter
                            </n-gradient-text>
                        </h1>
                    </div>
                    <div class="p-8 flex col-span-8 max-w-xlg mx-full text-2xl font-thin text-gray-dark">
                    
                        <form method="POST" action="https://herotofu.com/start">
              
              <div class="p-8">Stay updated with the latest from Scott Grooves by siging up for the Newsletter.</div>
                            <label class="inline mb-6 p-8">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
            inline
            w-full
            m-8
            p-1
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label class="inline mb-6 p-8">
                <span class="w-50 text-2xl text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
            inline
            w-full
            m-8
            p-1
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="joe@example.com"
                  required
                />
              </label>
        

               <div class="inline-block mb-6">
                <button
                  type="submit"
                  class="
            h-10
            px-5
            p-1
            m-8
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Sign up
                </button>
              </div>

            </form> 

                    </div>
    </div>
</section>    

        <section class="max-w-screen mx-auto pl-96 pr-96">
                <div class="grid p-8 max-w-xlg  mx-full bg-white space-x-8 grid grid-flow-col">
                    <div class="col-span-12 lg:col-span-2"> 
                        <h1 class="p-8 text-6xl tracking-tighter leading-11 h-full">
                            <n-gradient-text
                                :gradient="{
                                    from: 'rgb(0, 0, 0)',
                                    to: 'rgb(170, 170, 170)'
                                }"
                                :size="58"
                            >
                                Social<br />Media
                            </n-gradient-text>
                        </h1>
                    </div>
                    <div class="flex col-span-8 max-w-xlg mx-full text-2xl font-thin text-gray-dark">
                        <div class=" p-8 mb-4 tracking-wide leading-8">
                        <!-- Facebook -->
                           <a href="/"> 
                                <svg
                                    class="h-50 w-50"
                                    fill="gray"
                                    viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
                                <div class="p-8 mb-4 tracking-wide leading-8">
                                    <!-- Instagram -->
                                    <a href="/">
                                        <svg
                                        class="h-50 w-50"
                                        fill="gray"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        Instagram 
                                    </a>
                                </div>
                                <div class="p-8 mb-4 tracking-wide leading-8 h-50 w-50"> 
                                    <a href="" class="w-50 h-50">
                                        <img src="assets/images/bandcamp-button.png"  width="70%" />
                                        BandCamp
                                    </a>
                                </div> 
                      
                         
                    </div>
        
                </div>
            </section>

        <div>
            <TheFooter></TheFooter>
        </div>
    

</template>
<script>
import '~/assets/main.css'
import { defineComponent } from '@vue/composition-api'
import { NGradientText, NGrid, NGi, NCarousel, NCarouselItem, NDivider } from 'naive-ui'
export default defineComponent({
    components: {
        NGradientText,        
        NGrid,
        NGi,
        NCarousel,
        NCarouselItem,
        NDivider,
    }
})
</script>
<style scoped>
.carousel-img {
  width: 90%;
  height: 90%;
  object-fit: cover;
}
.sketch-title{
    @apply text-xl text-gray font-thin uppercase w-full text-center;
}
</style>