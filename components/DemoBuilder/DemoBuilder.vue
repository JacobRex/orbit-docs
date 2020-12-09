
<template>
  <div :class="$s.DemoBuilder">
    <div :class="$s.Demo">
      <slot />
    </div>
    <slot name="code" />
    <!-- <pre v-for="(node, idx) in $slots.code" :key="idx">
      <code :class="$s.Code">{{ getCode(node) }}</code>
    </pre> -->
  </div>
</template>

<script>
export default {
  name: "DemoBuilder",
  methods: {
    getCode(node) {
      return node.text;
    },
  },
  mounted() {
    console.log(this.$slots.code);
  },
};
</script>

<style module="$s">
.Demo {
  margin-top: var(--space-x2);
  padding: var(--space-x3);
  border-top: var(--divider-border);
  border-right: var(--divider-border);
  border-left: var(--divider-border);
  border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;
  overflow: hidden;
}
</style>
