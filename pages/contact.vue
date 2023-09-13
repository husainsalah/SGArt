<template>
    <TheHeader></TheHeader>
    <section class="max-w-screen mx-auto mt-4">
          <div class="grid pl-8 pr-8 max-w-xlg  mx-full bg-white space-x-8 grid grid-flow-col">
              <div class="col-span-3 lg:col-span-2"> 
                  <h1 class="text-6xl tracking-tighter leading-11 h-full">
      
          <n-gradient-text
                :gradient="{
                  from: 'rgb(0, 0, 0)',
                  to: 'rgb(170, 170, 170)'
                }"
                :size="58"
            >
                Contact
            </n-gradient-text>
            </h1>
        </div>
             <div class="col-span-9 pl-8 pr-8  max-w-xlg mx-full text-2xl font-thin text-gray-dark">
        <form method="POST" action="https://herotofu.com/start">
          <label class="block mb-6">
            <span class="text-gray-700">Your name</span>
            <input
              type="text"
              name="name"
              class="
            block
            w-full
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
          <label class="block mb-6">
            <span class="text-2xl text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="joe.bloggs@example.com"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">Message</span>
            <textarea
              name="message"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="3"
              placeholder="Tell us what you're thinking about..."
            ></textarea>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Contact Us
            </button>
          </div>

        </form>
      </div>
    </div>

    </section> 
      
 
</template>

<script lang="ts">
import { NGradientText, } from 'naive-ui'
export default defineComponent({
  components: {
    NGradientText,
  }
})

</script>