<template>
  <section
    class="my-12 sm:my-24"
  >
    <h2 class="font-bold tracking-tight text-2xl sm:text-3xl">{{ title }}</h2>
    <ul
      class="flex flex-col mt-4 gap-12 sm:gap-24"
    >
      <li
        v-for="work in works"
        :key="work.name"
      >
        <article
          class="decoration-primary underline-offset-2"
        >
          <h3 class="text-4xl sm:text-5xl font-bold tracking-tight">
            {{ work.name }}
          </h3>
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
              <NuxtImg
                v-if="resolveMediaType(asset)==='img'"
                :src="asset"
                loading="lazy"
                alt=""
              />
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
  </section>
</template>
<script setup lang="ts">
import type { WebProjectDetails, GameProjectDetails } from '~~/shared/types/projects'
import ProjectTags from './ProjectTags.vue';

defineProps<{
  works: WebProjectDetails | GameProjectDetails
  title: string
}>()

</script>