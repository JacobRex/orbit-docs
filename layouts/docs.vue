<template>
  <div>
    <od-header />
    <main>
      <od-sider />
      <div>
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import { OdSider } from "~/components/Sider";
import { OdHeader } from "~/components/Header";
import routeToMetaTitle from "~/utils/pathToMeta.js";

export default {
  components: {
    OdSider,
    OdHeader,
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
