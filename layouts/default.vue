<template>
  <div>
    <od-header class="block sticky top-0 md:hidden" mobile-menu />
    <main>
      <od-sider />
      <div class="md:ml-sider">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import { OdHeader } from "~/components/Header";
import { OdSider } from "~/components/Sider";
import routeToMetaTitle from "~/utils/pathToMeta.js";

export default {
  components: {
    OdHeader,
    OdSider,
  },

  computed: {
    navigation() {
      return this.$store.state.sider.navigation;
    },
  },

  head() {
    return {
      title: `${routeToMetaTitle(this.$route.fullPath)}`,
    };
  },
};
</script>
