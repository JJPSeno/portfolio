<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
  useHead({
    title: 'Edj | Jewel Josef P Seno\'s website.',
    meta: [
      { name: 'description', content: 'A website about me and my works.' },
    ],
    bodyAttrs: {
      class: 'bg-secondary text-text-color font-body relative text-pretty',
    },
  })
</script>