
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@square/orbit/styles.css',
    '@square/orbit/vars.css'
  ],
  /*
  ** Tailwind
  */
  tailwindcss: {
    config: {
      purge: {
        content: [
          'assets',
          'components',
          'layouts',
          'pages'
        ]
      },
      theme: {
        screens: {
          sm: '600px',
          md: '992px',
          lg: '1200px',
          xl: '1440px',
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          white: 'var(--color-white)',
          black: {
            70: 'var(--color-black-70)',
            80: 'var(--color-black-80)',
            90: 'var(--color-black-90)',
            100: 'var(--color-black-100)',
          },
          gray: {
            10: 'var(--color-gray-10)',
            20: 'var(--color-gray-20)',
            30: 'var(--color-gray-30)',
            40: 'var(--color-gray-40)',
            50: 'var(--color-gray-50)',
            60: 'var(--color-gray-600)',
          },
          red: {
            500: 'var(--color-red-500)',
          },
          brand: 'var(--brand-color)',
        },
        spacing: {
          px: '1px',
          0: '0',
          space: 'var(--space)',
          half: 'var(--space-half)',
          x2: 'var(--space-x2)',
          x3: 'var(--space-x3)',
          x4: 'var(--space-x4)',
          x5: 'var(--space-x5)',
          x6: 'var(--space-x6)',
          x7: 'var(--space-x7)',
          x8: 'var(--space-x8)',
          x16: 'var(--space-x16)',
        },
        height: theme => ({
          ...theme('spacing'),
          auto: 'auto',
          form: 'var(--form-height)',
          'form-small': 'var(--form-height-small)',
          'form-control-size': 'var(--form-control-size)',
          'layer-max-height': 'var(--layer-max-height)',
          screen: '100vh'
        }),
        borderColor: theme => ({
          ...theme('colors'),
          default: 'var(--divider-border-color)'
        }),
        borderRadius: {
          none: '0',
          base: 'var(--border-radius-base)',
          full: '9999px',
        },
        borderWidth: {
          0: 'none',
          1: '1px',
          2: '2px'
        },
        fontFamily: {
          default: 'var(--font-family-base)'
        },
        fontSize: {
          base: 'var(--font-size-base)',
          mobile: 'var(--font-size-mobile)',
          d1: '44px',
          d2: '36px',
          d3: '30px',
          t1: '22px',
          t2: '18px',
          t3: '16px',
          t4: '14px',
          t5: '12px',
          form: 'var(--form-font-size)',
        },
        fontWeight: {
          regular: 'var(--font-weight-regular)',
          medium: 'var(--font-weight-medium)',
        },
        lineHeight: {
          base: 'var(--line-height-base)',
          'form-label': 'var(--form-label-line-height)',
          'form-control-line-height': 'var(--form-control-line-height)',
          control: 'var(--line-height-control)',
          d1: 'var(--heading-d1-line-height)',
          'd1-mobile': 'var(--heading-d1-mobile-line-height)',
          d2: 'var(--heading-d2-line-height)',
          'd2-mobile': 'var(--heading-d2-mobile-line-height)',
          d3: 'var(--heading-d3-line-height)',
          'd3-mobile': 'var(--heading-d3-mobile-line-height)',
          t1: 'var(--heading-t1-line-height)',
          't1-mobile': 'var(--heading-t1-mobile-line-height)',
          t2: 'var(--heading-t2-line-height)',
          't2-mobile': 'var(--heading-t2-mobile-line-height)',
          t3: 'var(--heading-t3-line-height)',
          't3-mobile': 'var(--heading-t3-mobile-line-height)',
          t4: 'var(--heading-t4-line-height)',
          't4-mobile': 'var(--heading-t4-mobile-line-height)',
          t5: 'var(--heading-t5-line-height)',
          't5-mobile': 'var(--heading-t5-mobile-line-height)',
        },
        maxWidth: (theme, { breakpoints }) => ({
          none: 'none',
          sm: '480px',
          md: '720px',
          lg: '960px',
          xl: '1200px',
          full: '100%',
          ...breakpoints(theme('screens'))
        }),
      },
      corePlugins: {
        gradientColorStops: false,
        borderOpacity: false,
        boxShadow: false,
        divideColor: false,
        divideOpacity: false,
        divideWidth: false,
        letterSpacing: false,
        transitionDuration: false,
        transitionTimingFunction: false
      }
    }
  },

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config) {
      config.module.rules.push(
        {
          test: /\.text/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'raw-loader',
          ]
        },
      );
    }
  }
}
