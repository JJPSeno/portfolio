<template>
  <section
    id="skills"
    class="mt-8 sm:mt-12 max-w-200 mx-auto px-4"
  >
    <h2 class="font-bold tracking-tight text-3xl sm:text-4xl">My Skills:</h2>
    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-4 sm:mt-6"
    >
      <div
        v-for="[name, src, _area] of TECHNOLOGIES"
        class="flex flex-col items-center justify-center aspect-square gap-2 bg-slate-500/30"
      >
        <NuxtImg
          class="w-1/2 aspect-square"
          :src="`${BASE_ICONS_PATH}${src}`"
          :alt="name"
          loading="lazy"
        />
        <p> {{ name }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { TECHNOLOGIES } from '~~/app/constants/tech-list'
import { BASE_ICONS_PATH } from '~~/app/constants/paths'
</script>