<template>
  <div class="bg-gray-10 py-x6">
    <div class="flex flex-row flex-wrap justify-center mx-auto">
      <a :class="$s.Logo" href="https://www.figma.com/" target="_blank">
        <img class="m-x2" src="homepage/figma.svg" />
      </a>
      <a :class="$s.Logo" href="https://vuejs.org/" target="_blank">
        <img class="m-x2" src="homepage/vue.svg" />
      </a>
      <a :class="$s.Logo" href="https://nuxtjs.org/" target="_blank">
        <img class="m-x2" src="homepage/nuxt.svg" />
      </a>
      <a :class="$s.Logo" href="https://webpack.js.org/" target="_blank">
        <img class="m-x2" src="homepage/webpack.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoBar",
};
</script>

<style module="$s">
.Logo {
  transition: var(--transition-base);

  &:hover {
    transform: scale(1.1);
  }
}
</style>
