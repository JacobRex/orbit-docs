<template>
  <div>
    <component :is="componentMarkdown" v-if="componentMarkdown" />
    <div v-else>
      <h1>
        {{ componentName }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkdownRenderer",

  props: {
    componentName: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    componentMarkdown() {
      return () =>
        import(`@square/orbit/docs/${this.componentName}/doc/index.md`);
    },
  },
};
</script>
