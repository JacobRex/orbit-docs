<template>
  <nuxt-child :key="$route.fullPath" />
</template>

<script>
export default {
  layout: "documentation",
};
</script>
