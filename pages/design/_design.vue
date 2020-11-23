<template>
  <h1 class="my-x3 text-d3 font-medium">{{ pageName }}</h1>
</template>

<script>
export default {
  computed: {
    pageName() {
      let pageName = this.$route.params.design;
      pageName = this.kebabToPascal(pageName);
      return pageName;
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
