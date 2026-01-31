<template>
  <main
    class="mt-8 sm:mt-12 max-w-200 mx-auto px-4"
  >
    <SkillsList />
    <section
      id="works"
      class="mt-8 sm:mt-12"
    >
      <h3 class="font-bold tracking-tight text-3xl sm:text-4xl">My Works:</h3>
      <WorkDetails :works="WEB_PROJECTS" />
      <WorkDetails :works="GAME_PROJECTS" />
      <TheOtherWorks :works="OTHER_PROJECTS" />
    </section>
  </main>
</template>
<script setup lang="ts">
import { WEB_PROJECTS, GAME_PROJECTS, OTHER_PROJECTS } from '~~/app/constants/my-works'
</script>