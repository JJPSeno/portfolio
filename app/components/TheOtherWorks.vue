<template>
  <details class="min-h-dvh marker:text-3xl marker:sm:text-4xl" closed>
    <summary class="border border-tertiary p-6 rounded-3xl">
      <h2 class="inline text-3xl sm:text-4xl font-bold tracking-tight"> Other Projects: </h2>
      <p class="font-body tracking-wide text-xl/normal mt-4 sm:mt-6">
        Some of the works below can only be talked about in sparse details with no images or links due to NDAs. Others works are listed here due to their bare-bones and experimental nature.
      </p>
    </summary>
    <ul class="mt-12">
      <li
        v-for="work in works"
        class="not-first:mt-24"
        :key="work.name"
      >
        <article
          class="mt-4 sm:mt-6 decoration-primary underline-offset-2"
          :class="work.relatedAssets.length>0?`min-h-dvh`:``"
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
          <TechUsedList :tech-used="work.techUsed" />
          <a 
            v-for="link in work.url"
            class="underline mr-1 font-body tracking-wide text-lg/normal mt-4 sm:mt-6" 
            :href="link"
            rel="noopener noreferrer"
          >
            {{ link }}
          </a>
        </article>
      </li>
    </ul>
  </details>
</template>
<script setup lang="ts">
import type { OtherProjectDetails } from '~~/shared/types/projects'

defineProps({
  works: Object as PropType<OtherProjectDetails>
})

</script>