<template>
  <nav>
    <nuxt-link
      v-for="link in nav"
      :key="link.text"
      :to="link.route"
      class="ml-x3 font-medium text-white hover:text-gray-40"
    >
      {{ link.text }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        {
          text: "Design",
          route: "/design",
        },
        {
          text: "Components",
          route: "/components",
        },
        {
          text: "Patterns",
          route: "/patterns",
        },
      ],
    };
  },
};
</script>

