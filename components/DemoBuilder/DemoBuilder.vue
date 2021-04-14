<template>
  <div class="docs">
    <div class="demo">
      <slot />
    </div>
    <pre
      v-for="(node, idx) in nodes"
      :key="idx"
    >
      <code v-highlight class="html css javascript">{{ node }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'DemoBuilder',
  data() {
    return {
      nodes: this.$slots.code.map(node => node.text),
    };
  },
};
</script>
