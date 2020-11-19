<template>
  <header class="py-x2 bg-black-100">
    <div
      class="flex flex-col items-center justify-between max-w-xl mx-auto px-x3 sm:flex-row"
    >
      <div class="flex items-center mb-x2 sm:mb-0">
        <img class="w-x3" src="square-logo.svg" />
        <div class="ml-space text-t2 text-white">Orbit</div>
      </div>
      <od-nav />
    </div>
  </header>
</template>

<script>
import { OdNav } from "~/components/Nav";

export default {
  name: "Header",
  components: { OdNav },
};
</script>
