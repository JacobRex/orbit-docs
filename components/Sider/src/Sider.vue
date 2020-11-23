<template>
  <div class="fixed top-0">
    <div
      :class="[$s.SiderOverlay, $s[`${menuClass}`]]"
      class="block fixed top-0 bottom-0 left-0 bg-black-100 opacity-100 cursor-pointer md:hidden"
      @click="closeMenu"
    />
    <div
      :class="[$s.SiderContent, $s[`${menuClass}`]]"
      class="relative flex flex-col justify-between h-screen w-sider text-white bg-black-100"
    >
      <div
        :class="$s.SiderScrollarea"
        class="block flex-1 p-x3 overflow-y-scroll"
      >
        <nuxt-link to="/">
          <img
            class="w-x3 mt-x3 mb-x6"
            src="/square-logo.svg"
            @click="closeMenu"
          />
        </nuxt-link>
        <div
          v-for="section in navigation"
          :key="section.title"
          :class="$s.SiderSection"
        >
          <nuxt-link :to="section.titleRoute">
            <h3 class="text-t5 text-white font-medium tracking-base uppercase">
              {{ section.title }}
            </h3>
          </nuxt-link>
          <nav>
            <nuxt-link
              v-for="(link, linkIndex) in section.nav"
              :key="linkIndex"
              :class="$s.SiderNavLink"
              class="block my-space text-white opacity-50 hover:opacity-100"
              :to="link.route"
              @click.native="closeMenu"
            >
              {{ link.title }}
            </nuxt-link>
          </nav>
        </div>
      </div>
      <div class="flex-none">
        <div class="border-black-70 border-t-1 border-t-solid" />
        <a
          class="block flex items-center justify-center py-x2 text-white font-medium"
          href="https://github.com/square/orbit"
          target="_blank"
        >
          <img class="w-x3 mr-space" src="/github.svg" />
          View on Github
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OdSider",

  props: {
    navigation: {
      type: Array,
      default: () => [
        {
          title: "Design",
          titleRoute: "/design",
          nav: [
            {
              title: "Color",
              route: "/design/color",
            },
            {
              title: "Typography",
              route: "/design/typography",
            },
            {
              title: "Spacing",
              route: "/design/spacing",
            },
          ],
        },
        {
          title: "Components",
          titleRoute: "/components",
          nav: [
            {
              title: "Accordion",
              route: "/components/accordion",
            },
            {
              title: "Alert",
              route: "/components/alert",
            },
            {
              title: "Autocomplete",
              route: "/components/autocomplete",
            },
            {
              title: "Blade",
              route: "/components/blade",
            },
            {
              title: "Breadcrumb",
              route: "/components/breadcrumb",
            },
            {
              title: "Button",
              route: "/components/button",
            },
            {
              title: "ButtonGroup",
              route: "/components/button-group",
            },
            {
              title: "Card",
              route: "/components/card",
            },
            {
              title: "Checkbox",
              route: "/components/checkbox",
            },
            {
              title: "Checklist",
              route: "/components/checklist",
            },
            {
              title: "Colorpicker",
              route: "/components/colorpicker",
            },
            {
              title: "Datepicker",
              route: "/components/datepicker",
            },
            {
              title: "DescriptionList",
              route: "/components/DescriptionList",
            },
            {
              title: "Divider",
              route: "/components/divider",
            },
            {
              title: "Drag",
              route: "/components/drag",
            },
            {
              title: "Form",
              route: "/components/form",
            },
            {
              title: "Grid",
              route: "/components/grid",
            },
            {
              title: "Heading",
              route: "/components/heading",
            },
            {
              title: "Hovertip",
              route: "/components/hovertip",
            },
            {
              title: "Icon",
              route: "/components/icon",
            },
            {
              title: "Input",
              route: "/components/input",
            },
            {
              title: "Layer",
              route: "/components/layer",
            },
            {
              title: "Loading",
              route: "/components/loading",
            },
            {
              title: "Modal",
              route: "/components/modal",
            },
            {
              title: "Nav",
              route: "/components/nav",
            },
            {
              title: "NestedDrag",
              route: "/components/neseted-drg",
            },
            {
              title: "Notice",
              route: "/components/notice",
            },
            {
              title: "NumberFormat",
              route: "/components/number-format",
            },
            {
              title: "Pagination",
              route: "/components/pagination",
            },
            {
              title: "Password",
              route: "/components/password",
            },
            {
              title: "Popover",
              route: "/components/popover",
            },
            {
              title: "ProgressBar",
              route: "/components/progress-bar",
            },
            {
              title: "Radio",
              route: "/components/radio",
            },
            {
              title: "Radio Group",
              route: "/components/radio-group",
            },
            {
              title: "Schooltip",
              route: "/components/schooltip",
            },
            {
              title: "Search",
              route: "/components/search",
            },
            {
              title: "Section",
              route: "/components/section",
            },
            {
              title: "Select",
              route: "/components/select",
            },
            {
              title: "Sheet",
              route: "/components/sheet",
            },
            {
              title: "Skeleton",
              route: "/components/skeleton",
            },
            {
              title: "Slider",
              route: "/components/slider",
            },
            {
              title: "Steps",
              route: "/components/steps",
            },
            {
              title: "Table",
              route: "/components/table",
            },
            {
              title: "Tabs",
              route: "/components/tabs",
            },
            {
              title: "Tag",
              route: "/components/tag",
            },
            {
              title: "Textarea",
              route: "/components/textarea",
            },
            {
              title: "Tile",
              route: "/components/tile",
            },
            {
              title: "Tiles",
              route: "/components/tiles",
            },
            {
              title: "Toast",
              route: "/components/toast",
            },
            {
              title: "Toggle",
              route: "/components/toggle",
            },
            {
              title: "ZeroState",
              route: "/components/zero-state",
            },
          ],
        },
      ],
    },
  },

  computed: {
    mobileMenuOpen() {
      return this.$store.state.sider.mobileMenuOpen;
    },
    menuClass() {
      return this.mobileMenuOpen ? "mobile-menu_open" : "mobile-menu_closed";
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    closeMenu() {
      this.$store.commit("sider/closeMobileMenu");
    },

    handleResize() {
      if (this.mobileMenuOpen === false) {
        return;
      }
      this.closeMenu();
    },
  },
};
</script>

<style module="$s">
.SiderOverlay {
  transition: opacity var(--transition-base), width 0s var(--transition-time);

  &.mobile-menu_open {
    opacity: 0.35;
    width: 100%;
    transition: opacity var(--transition-base);
  }
}

.SiderContent {
  transition: transform var(--transition-base);

  &.mobile-menu_closed {
    margin-left: calc(-1 * var(--docs-sider-width));
    transform: translateX(0) translateZ(0);
  }

  &.mobile-menu_open {
    margin-left: calc(-1 * var(--docs-sider-width));
    transform: translateX(var(--docs-sider-width)) translateZ(0);
  }

  @media (--for-tablet-landscape-up) {
    &.mobile-menu_open,
    &.mobile-menu_closed {
      margin-left: 0;
      transform: translateX(0) translateZ(0);
    }
  }
}

.SiderScrollarea {
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.375rem solid transparent;
    box-shadow: inset 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
  }
}

.SiderSection + .SiderSection {
  margin-top: var(--space-x3);
}

.SiderNavLink {
  &:global(.nuxt-link-exact-active) {
    opacity: 1;
  }
}
</style>
