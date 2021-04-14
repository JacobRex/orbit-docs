<template>
  <div>
    <template v-if="componentMarkdown">
      <component :is="componentMarkdown" />
      <!-- <live-demo :component="component" />
      <props-table v-if="props" />
      <slots-table v-if="slots" />
      <events-table v-if="events" /> -->
    </template>
    <div v-else>
      <h1>
        {{ componentName }}
      </h1>
    </div>
  </div>
</template>

<script>
import LiveDemo from '~/components/DemoBuilder/LiveDemo.vue';

export default {
  name: "MarkdownRenderer",

  components: {
    LiveDemo,
  },

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
    component() {
      return () =>
        import(`@square/orbit/components/${this.componentName}`);
    },
  },
};
</script>
