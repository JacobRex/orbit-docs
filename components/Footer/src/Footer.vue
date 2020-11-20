<template>
  <footer class="py-x8 bg-black-100">
    <div
      class="flex flex-col items-center justify-between max-w-xl mx-auto px-x3 sm:flex-row"
    >
      <div class="order-2 text-gray-40 sm:order-1">© Square, Inc.</div>
      <a
        class="order-1 opacity-50 hover:opacity-100"
        href="https://github.com/square/orbit"
        target="_blank"
      >
        <img class="w-x3 mb-x2 sm:mb-0" src="github.svg" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
