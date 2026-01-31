<template>
  <ul>
    <li
      v-for="work in works"
      :key="work.name"
    >
      <article
        class="min-h-dvh mt-4 sm:mt-6 decoration-primary underline-offset-2"
      >
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
          {{ work.name }}
        </h2>
        <ProjectTags :project-tags="work.projectTags" />
        <p class="font-body tracking-wide text-lg/normal mt-4 sm:mt-6">
          {{ work.description }}
        </p>
        <ul
          v-if="work.relatedAssets.length > 0"
          class="mt-4 sm:mt-6 grid gap-4.5 grid-cols-2"
        >
          <li
            v-for="asset in work.relatedAssets"
            class="flex-1 aspect-video mx-auto w-full *:w-full *:h-full *:object-cover"
            :class="work.relatedAssets.length>2?`first:col-span-2`:`col-span-2`"
          >
            <img
              v-if="resolveMediaType(asset)==='img'"
              :src="asset"
              class=""
            >
            <video
              v-else
              :src="asset"
              autoplay
              muted
              loop
              playsinline
            />
          </li>
        </ul>
        <a 
          v-for="link in work.url"
          class="inline-block underline mr-2 font-body tracking-wide text-lg/normal mt-2" 
          :href="link"
          rel="noopener noreferrer"
        >
          {{ link }}
        </a>
        <TechUsedList :tech-used="work.techUsed" />
      </article>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { WebProjectDetails, GameProjectDetails } from '~~/shared/types/projects'
import ProjectTags from './ProjectTags.vue';

defineProps({
  works: Object as PropType<WebProjectDetails | GameProjectDetails >
})

</script>