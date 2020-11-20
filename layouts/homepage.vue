<template>
  <div>
    <od-hero />
    <Nuxt />
    <od-footer />
  </div>
</template>

<script>
import { OdHero } from "~/components/Hero";
import { OdFooter } from "~/components/Footer";

export default {
  components: {
    OdHero,
    OdFooter,
  },
};
</script>
