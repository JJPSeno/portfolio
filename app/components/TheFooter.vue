<template>
  <footer
    ref="the-footer"
    class="h-dvh w-full relative flex"
  >
    <div
      class="absolute bottom-[clamp(0.25rem,6.25vh,4rem)] right-[clamp(0.25rem,6.25vh,4rem)] h-[clamp(0.5rem,12.5vh,8rem)] aspect-square bg-primary"
    />
  </footer>
</template>
<script setup lang="ts">
const isFooterIntersected = useFooter()
const footer = useTemplateRef('the-footer')
onMounted(() => {
  if (footer.value){
    const observer = new IntersectionObserver(
      (entries) => {
        isFooterIntersected.value = entries[0]?.isIntersecting ?? false
      },
      {
        rootMargin: '-30%'
      }
    )
    observer.observe(footer.value)
  }
})
</script>