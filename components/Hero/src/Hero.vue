<template>
  <div class="bg-black-100 text-white">
    <od-header />
    <div class="max-w-md mx-auto py-x8 px-x3 text-center md:py-x16">
      <img class="mx-auto mb-x3" src="orbit.png" width="128" />
      <h1 class="mb-x3 text-d2 font-medium md:text-d1">Orbit</h1>
      <p class="text-t3 mb-x4">
        Orbit is a Vue.js UI Component Library built on a beautiful, cohesive
        design system. Orbit includes over 50 easy to use components out of the
        box and enables you to quickly construct clean and scalable
        applications.
      </p>
      <div>
        <a
          class="inline-block px-x3 py-space bg-white font-medium text-black-100 border-2 border-white border-solid"
          href="https://github.com/square/orbit"
          target="_blank"
        >
          Download
        </a>
        <nuxt-link
          class="inline-block ml-x2 px-x3 py-space bg-black-100 font-medium text-white border-2 border-white border-solid"
          to="/components"
        >
          Documentation
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { OdHeader } from "~/components/Header";

export default {
  name: "Hero",
  components: { OdHeader },
};
</script>

