<template>
  <section
    class="flex gap-2 mt-3 flex-wrap"
  >
    <span
      v-for="(tech) in techUsed"
      :key="tech"
      class="bg-slate-300/30 rounded-md p-2"
    >
      <NuxtImg
        class="w-6 sm:w-8 aspect-square"
        :src="`${BASE_ICONS_PATH}${TECHNOLOGIES[tech][1]}`"
        :alt="tech"
        loading="lazy"
      />
    </span>
  </section>
</template>
<script setup lang="ts">
import type { Technology } from '~~/shared/types/tech'
import { TECHNOLOGIES } from '~/constants/tech-list';
import { BASE_ICONS_PATH } from '~~/app/constants/paths'

defineProps({
  techUsed: Object as PropType<Technology[]>
})
</script>
