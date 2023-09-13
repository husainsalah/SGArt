<template>
    <NuxtLink :to='props.post.uri'>
        
      <n-card title="Card with Cover">
        <template #cover>
          <img 
            :src=  props.post.projectImage 
            />
        </template>
        <h2 class="font-semibold text-2xl col-span-4">{{ props.post.title }}</h2>
                    <p>{{ new Date(props.post.date).toLocaleDateString() }}</p>
                    <p>{{ props.post.venue }}</p>
                    <p>{{ props.post.startDate }}</p>
                    <p>{{ props.post.endDate }}</p>
                    <p> {{ props.post.projectImage }}</p>
      </n-card>
      <!--
        <div class="flex-shrink-0 container m-auto grid grid-follow	">
            <div class="
            posts-center
            bg-gray
            bg-gradient-to-r
            from-gray-500
            to-silve-500
            p-6
            gap-5
            rounded-lg
            text-silver
            transition-all
            hover:-translate-y-1
            hover:scale-105">
                <h2 class="font-semibold text-2xl col-span-4">{{ post.title }}</h2>
                <p>{{ new Date(post.date).toLocaleDateString() }}</p>
                <p>{{ post.venue }}</p>
                <p>{{ post.startDate }}</p>
                <p>{{ post.endDate }}</p>
                <p> {{ post.projectImage }}</p>

            </div>
        </div>-->
    </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
    post: Record<'title' | 'date' | 'excerpt' | 'uri' | 'venue' | 'startDate' | 'endDate' | 'projectImage', string>
}>();
posts:
[{
    id: '1',
    title: 'Red Door Digital',
    date: '7/24/2023',
    excerpt: 'Red Door Digital',
    uri: '/project/red-door-digital',
    venue: 'Red Door Digital',
    startDate: 'May 19, 2023',
    endDate: 'June 11 2023',
    projectImage: 'image-1.jpg',
},
{
    id: '2',
    title: 'Filter Detroit',
    date: '7/26/2023',
    excerpt: 'Filter Detroit',
    uri: '/projects/filter-detroit',
    venue: 'Filter Detroit',
    startDate: 'May 19 2023',
    endDate: 'June 11 2023',
    projectImage: 'image-2.jpg',
}
]
</script>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { NCard } from 'naive-ui'
export default defineComponent({
    components: {
        NCard,
    }
});
</script>

