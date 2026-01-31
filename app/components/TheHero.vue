<template>
  <section
    id="about"
    class="w-full relative pt-14 max-w-200 mx-auto px-4"
  >
    <h1 class="font-bold tracking-tight">
      <p class="text-3xl sm:text-4xl">
        Salutations!
      </p>
      <p class="text-4xl sm:text-5xl mt-0.5 sm:mt-1">
        My name is Jewel Josef P. Seno and I am a <span class="text-primary">Software Developer</span>
      </p>
    </h1>
    <p class="tracking-wide mt-4 sm:mt-6">
      I have programmed for {{ yearsSince2017() }} years, delivering and improving the products my clients and employers have envisioned. And I love opportunities to use my skills to bring value to clients and fulfilment to myself.
      I am experienced in working with both small teams, and large, interdependent teams that operate on a global time-scale. I am a critical thinker that loves technology and trying to understand the mechanisms that make them work.
    </p>
    <p class="tracking-wide mt-4 sm:mt-6 decoration-primary underline-offset-2">
      You can contact me at <span class="font-bold text-primary">seno.jeweljosef@gmail.com</span>
      [<a class="underline" href="mailto:seno.jeweljosef@gmail.com" rel="noopener noreferrer">mailto link</a>]
      and you may
      <NuxtLink to="/documents/Jewel Josef P. Seno Resume.pdf" class="underline" external>view my resume here</NuxtLink>.
    </p>
    <p class="tracking-wide mt-4 sm:mt-6 decoration-primary underline-offset-2">
      You can also find my works below or in my
      <NuxtLink class="underline" to="https://github.com/JJPSeno" target="_blank" external>
        <span
          class="inline-block bg-tertiary rounded-md w-3 sm:w-5 aspect-square p-1 align-middle mr-1"
        >
          <img
            class="w-full h-full"
            src="/images/website_icons/github.svg"
          />
        </span>github</NuxtLink> and 
      <NuxtLink class="underline" to="https://edjuu.itch.io/" target="_blank" external>
        <span
          class="inline-block bg-tertiary rounded-md w-3 sm:w-5 aspect-square p-1 align-middle mr-1"
        >
          <img
            class="w-full h-full"
            src="/images/website_icons/itchio.svg"
          />
        </span>itch.io</NuxtLink> pages.
    </p>
    <img
      src="/images/hero_banner/banner.avif"
      class="w-full mt-8 sm:mt-12"
    />
  </section>
</template>