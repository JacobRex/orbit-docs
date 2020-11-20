<template>
  <o-layout has-layers>
    <od-header class="block sticky top-0 md:hidden" mobile-menu />
    <main>
      <od-sider />
      <div class="max-w-md mx-auto p-x3 md:ml-sider">
        <nuxt />
      </div>
    </main>
  </o-layout>
</template>

<script>
import { OLayout } from "@square/orbit/components/Layout";
import { OdHeader } from "~/components/Header";
import { OdSider } from "~/components/Sider";
import routeToMetaTitle from "~/utils/pathToMeta.js";

export default {
  components: {
    OLayout,
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
