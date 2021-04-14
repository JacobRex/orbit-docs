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

<style scoped>
.prism-editor-wrapper {
  background-color: #222;
  color: #eee;
  padding: 8px 12px;
  box-sizing: border-box;
}
.separate {
  display: flex;
  flex-direction: column;
  width: 950px;
  margin: 30px auto;
}
.preview-separate {
  padding: 30px;
  background-color: #fff;
  text-align: center;
  border-radius: 10px 10px 0 0;
}
.description {
  max-width: 600px;
  margin: 30px auto;
  text-align: left;
}
.livebox {
  position: relative;
  max-width: 950px;
  margin: auto;
}
.hint {
  position: absolute;
  top: 100px;
  left: -200px;
  font-family: "Nanum Pen Script";
  font-size: 2em;
  color: red;
  transform: rotate(-30deg);
  transition: transform 0.2s;
}
@media (max-width: 1400px) {
  .hint {
    transform: none;
    top: -35px;
    left: 0;
  }
  .hint span {
    transform: rotate(80deg) translate(10px, 10px);
    display: inline-block;
  }
  .separate {
    width: 90vw;
  }
}
.button-bar {
  height: 70px;
  padding: 5px 0;
  text-align: left;
}
.button-bar button {
  font-size: 1.5em;
  padding: 6px;
  border-radius: 8px;
  width: 200px;
}
</style>
