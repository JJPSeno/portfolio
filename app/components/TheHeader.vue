<template>
  <header
    ref="the-header"
    class="fixed w-full bg-secondary flex justify-between text-base sm:text-lg font-bold py-4 px-4 lg:px-6 z-100 transition-transform"
    :class="isFooterIntersected?'-translate-y-13':''"
  >
    <p>Edj</p>
    <nav>
      <ul class="flex divide-solid divide-x-3 divide-primary *:px-2">
        <li>Contact Me</li>
        <li>My Works</li>
        <li>Resume</li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
  const isFooterIntersected = useFooter()
</script>