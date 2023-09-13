<script setup lang="ts">

    import { NDivider,NGradientText } from "naive-ui";
/*    interface ProjectData {
      title: string;
      date: string;
      excerpt: string;
      uri: string;
      venue: string;
      startDate: string;
      endDate: string;
      projectImage: Node;
}
   
    const route = useRoute();
    const config = useRuntimeConfig();

  const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
      method: 'get',
      query: {
        query: `
          query NewQuery {
          projects(first:10){
              nodes {
                id
                title
                date
                uri
                venue
                startDate
                endDate
                projectImage 
              }
          }
        }`
      },
      transform(data) {
        return data.data.projects.nodes as Array<ProjectData>;
      }
    });
   */ 
const items = ref(
   [{
    id:'1',
    title: 'After The Dance',
    date: '7/24/2023',
    excerpt: 'Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye\'s soulful record \"After the Dance\,\”  Grooves delves into the realm beyond the dance floor\, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend.',
    uri: '/project/red-door-digital',
    venue: 'Red Door Digital',
    startDate: 'May 19, 2023',
    endDate: 'June 11 2023',
    projectImage: 'assets/images/zulu-robot.jpg',
  },
    {
      id:'2',
      title: 'Filter Detroit',
      date: '7/26/2023',
    excerpt: 'Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye\'s soulful record \"After the Dance\,\”  Grooves delves into the realm beyond the dance floor\, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend',
      uri: '/projects/filter-detroit',
      venue: 'Filter Detroit',
      startDate: 'May 19 2023',
      endDate: 'June 11 2023',
      projectImage: 'assets/images/sketches/Bad Hair Day.jpg',
  }
  ]
)
    </script>
    <template>
        <TheHeader />

        <div class="col-span-12 lg:col-span-2"> 
                                    <h1 class="p-8 text-6xl tracking-tighter leading-11 h-full">
                                        <n-gradient-text
                                            :gradient="{
                                              from: 'rgb(0, 0, 0)',
                                              to: 'rgb(170, 170, 170)'
                                            }"
                                            :size="58"
                                        >
                                            Exhibitions
                                        </n-gradient-text>
                                    </h1>
                                </div> 
         

        <div class="p-8 flex columns-2	">
          
          <div v-for="item in items" :key="item.id">
          
          <div class="
            p-2
            w-50
            rounded-lg
            text-2xl
            font-thin
            transition-all
            
            ">
                  <NuxtLink :to='item.uri'><h2 class="font-bold text-4xl hover:-translate-y-1">{{ item.title }}</h2></NuxtLink> 
                  <n-divider></n-divider>
                          <p>{{ item.venue }} : {{ item.startDate }} - {{ item.endDate }}</p>
                          <n-divider></n-divider>
                          <p>{{ item.excerpt }}</p>
                          <p></p>
                          <p></p>
                          
                           <img :src= item.projectImage  class="p-4" />
          </div>
        
        
        </div>
        </div>
        <TheFooter />
        
    </template>
