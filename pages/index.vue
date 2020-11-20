<template>
  <main>
    <div class="max-w-md mx-auto px-x3 py-x8">
      <h2 class="mb-x2 text-t1 font-medium">Quick Start</h2>

      <h3 class="mb-x2 text-t2 font-medium">Add Orbit as a dependency</h3>
      <pre
        class="mb-x4 bg-gray-20 p-x3 rounded-base"
      ><code>npm install --save @square/orbit</code></pre>

      <h3 class="mb-x2 text-t2 font-medium">Import CSS</h3>
      <p class="mb-x2">
        Import the following CSS file as an asset to your build. Do not @import
        them into the style tag of your App.vue, as doing so will unecessarily
        pre-process them.
      </p>
      <pre
        class="mb-x4 bg-gray-20 p-x3 rounded-base"
      ><code>{{ Installation }}</code></pre>

      <h3 class="mb-x2 text-t2 font-medium">Simple Example</h3>
      <pre
        class="mb-x4 bg-gray-20 p-x3 rounded-base"
      ><code>{{ Example }}</code></pre>
    </div>
    <OdLogoBar />
  </main>
</template>

<script>
import Installation from "raw-loader!../static/text/installation.txt";
import Example from "raw-loader!../static/text/example.txt";
import { OdLogoBar } from "~/components/LogoBar";

export default {
  layout: "homepage",
  components: {
    OdLogoBar,
  },
  data() {
    return {
      Installation,
      Example,
    };
  },
};
</script>
