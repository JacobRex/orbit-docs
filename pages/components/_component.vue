<template>
  <markdown-renderer :component-name="componentName" />
</template>

<script>
import MarkdownRenderer from "~/components/MarkdownRenderer.vue";

export default {
  components: {
    MarkdownRenderer,
  },

  computed: {
    componentName() {
      let componentName = this.$route.params.component;
      componentName = this.kebabToPascal(componentName);
      return componentName;
    },
  },

  methods: {
    kebabToPascal(string) {
      let spiltString = string.split("-");
      for (var i = 0; i < spiltString.length; i++) {
        spiltString[i] =
          spiltString[i].charAt(0).toUpperCase() + spiltString[i].slice(1);
      }
      return spiltString.join("");
    },
  },
};
</script>
