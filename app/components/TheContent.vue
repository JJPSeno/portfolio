<template>
  <main
    id="works"
    class="mt-8 sm:mt-12 max-w-200 mx-auto px-4"
  >
    <WorkDetails :works="WEB_PROJECTS" title="My Web Development Works:" />
    <WorkDetails :works="GAME_PROJECTS" title="My Game Development Works:"/>
    <TheOtherWorks :works="OTHER_PROJECTS" />
  </main>
</template>
<script setup lang="ts">
import { WEB_PROJECTS, GAME_PROJECTS, OTHER_PROJECTS } from '~~/app/constants/my-works'
</script>