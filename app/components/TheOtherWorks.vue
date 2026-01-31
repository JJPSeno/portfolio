<template>
  <ul>
    <li
      v-for="work in works"
      :key="work.name"
    >
      <article
        class="min-h-dvh mt-4 sm:mt-6"
      >
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
          {{ work.name }}
        </h2>
        <p class="font-body tracking-wide text-lg/normal mt-4 sm:mt-6">
          {{ work.description }}
        </p>
        <ul
          v-if="work.relatedAssets.length > 0"
          class="mt-4 sm:mt-6 grid gap-4.5 grid-cols-2"
        >
          <li
            v-for="asset in work.relatedAssets"
            class="flex-1 aspect-video mx-auto w-full *:w-full first:col-span-2"
          >
            <img
              v-if="resolveMediaType(asset)==='img'"
              :src="asset"
            >
            <video
              v-else
              :src="asset"
              autoplay
              muted
              loop
              controls
              playsinline
            />
          </li>
        </ul>
        <TechUsedList :tech-used="work.techUsed" />
      </article>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { WebProjectDetails, GameProjectDetails } from '~~/shared/types/projects'

defineProps({
  works: Object as PropType<WebProjectDetails | GameProjectDetails>
})

</script>