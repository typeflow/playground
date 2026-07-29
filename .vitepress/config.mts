import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Typeflow Playground',
  description: 'Try Typeflow live in your browser.',
  base: '/playground/',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/playground/logo.svg' },
    ],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      description: 'Essayez Typeflow en direct dans votre navigateur.',
      themeConfig: {
        nav: [
          { text: 'Docs', link: 'https://typeflow.github.io/docs/fr/' },
          { text: 'GitHub', link: 'https://github.com/typeflow/typeflow' },
        ],
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Docs', link: 'https://typeflow.github.io/docs/' },
      { text: 'GitHub', link: 'https://github.com/typeflow/typeflow' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/typeflow/typeflow' },
    ],
  },
});
