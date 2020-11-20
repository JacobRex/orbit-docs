export const state = () => ({
  navigation: [
    {
      title: 'Design',
      titleRoute: '/design',
      nav: [
        {
          title: 'Color',
          route: '/design/color',
        },
        {
          title: 'Typography',
          route: '/design/typography',
        },
        {
          title: 'Spacing',
          route: '/design/spacing',
        },
      ],
    },
    {
      title: 'Components',
      titleRoute: '/components',
      nav: [
        {
          title: 'Accordion',
          route: '/components/accordion',
        },
        {
          title: 'Alert',
          route: '/components/alert',
        },
        {
          title: 'Autocomplete',
          route: '/components/autocomplete',
        },
        {
          title: 'Blade',
          route: '/components/blade',
        },
        {
          title: 'Breadcrumb',
          route: '/components/breadcrumb',
        },
        {
          title: 'Button',
          route: '/components/button',
        },
        {
          title: 'ButtonGroup',
          route: '/components/button-group',
        },
        {
          title: 'Card',
          route: '/components/card',
        },
        {
          title: 'Checkbox',
          route: '/components/checkbox',
        },
        {
          title: 'Checklist',
          route: '/components/checklist',
        },
        {
          title: 'Colorpicker',
          route: '/components/colorpicker',
        },
        {
          title: 'Datepicker',
          route: '/components/datepicker',
        },
        {
          title: 'DescriptionList',
          route: '/components/DescriptionList',
        },
        {
          title: 'Divider',
          route: '/components/divider',
        },
        {
          title: 'Drag',
          route: '/components/drag',
        },
        {
          title: 'Form',
          route: '/components/form',
        },
        {
          title: 'Grid',
          route: '/components/grid',
        },
        {
          title: 'Heading',
          route: '/components/heading',
        },
        {
          title: 'Hovertip',
          route: '/components/hovertip',
        },
        {
          title: 'Icon',
          route: '/components/icon',
        },
        {
          title: 'Input',
          route: '/components/input',
        },
        {
          title: 'Layer',
          route: '/components/layer',
        },
        {
          title: 'Loading',
          route: '/components/loading',
        },
        {
          title: 'Modal',
          route: '/components/modal',
        },
        {
          title: 'Nav',
          route: '/components/nav',
        },
        {
          title: 'NestedDrag',
          route: '/components/neseted-drg',
        },
        {
          title: 'Notice',
          route: '/components/notice',
        },
        {
          title: 'NumberFormat',
          route: '/components/number-format',
        },
        {
          title: 'Pagination',
          route: '/components/pagination',
        },
        {
          title: 'Password',
          route: '/components/password',
        },
        {
          title: 'Popover',
          route: '/components/popover',
        },
        {
          title: 'ProgressBar',
          route: '/components/progress-bar',
        },
        {
          title: 'Radio',
          route: '/components/radio',
        },
        {
          title: 'Radio Group',
          route: '/components/radio-group',
        },
        {
          title: 'Schooltip',
          route: '/components/schooltip',
        },
        {
          title: 'Search',
          route: '/components/search',
        },
        {
          title: 'Section',
          route: '/components/section',
        },
        {
          title: 'Select',
          route: '/components/select',
        },
        {
          title: 'Sheet',
          route: '/components/sheet',
        },
        {
          title: 'Skeleton',
          route: '/components/skeleton',
        },
        {
          title: 'Slider',
          route: '/components/slider',
        },
        {
          title: 'Steps',
          route: '/components/steps',
        },
        {
          title: 'Table',
          route: '/components/table',
        },
        {
          title: 'Tabs',
          route: '/components/tabs',
        },
        {
          title: 'Tag',
          route: '/components/tag',
        },
        {
          title: 'Textarea',
          route: '/components/textarea',
        },
        {
          title: 'Tile',
          route: '/components/tile',
        },
        {
          title: 'Tiles',
          route: '/components/tiles',
        },
        {
          title: 'Toast',
          route: '/components/toast',
        },
        {
          title: 'Toggle',
          route: '/components/toggle',
        },
        {
          title: 'ZeroState',
          route: '/components/zero-state',
        },
      ],
    },
  ],
  mobileMenuOpen: false,
});

export const mutations = {
  setNavigation(state, nav) {
    state.navigation = nav;
  },

  openMobileMenu(state) {
    state.mobileMenuOpen = true;
  },

  closeMobileMenu(state) {
    state.mobileMenuOpen = false;
  },
};
