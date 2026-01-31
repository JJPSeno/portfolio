<template>
  <section
    class="inline-flex gap-2 mt-8 flex-wrap"
  >
    <p
      v-for="tag in projectTags"
      :key="tag"
      class="bg-slate-300/30 rounded-md p-2"
    >
      {{ tag }}
    </p>
  </section>
</template>
<script setup lang="ts">
import type { ProjectTags } from '~~/shared/types/projects'

defineProps({
  projectTags: Object as PropType<ProjectTags[]>
})
</script>
