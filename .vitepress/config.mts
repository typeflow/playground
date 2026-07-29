import { defineConfig } from 'vitepress';

// Bare paths, not full URLs: docs and playground share the same origin
// (typeflow.github.io) at different subpaths, so VitePress treats these as
// internal links and skips its automatic target="_blank" for external links.
const DOCS_SITE = '/docs/';
const DOCS_SITE_FR = '/docs/fr/';

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
          { text: 'Docs', link: DOCS_SITE_FR },
          { text: 'GitHub', link: 'https://github.com/typeflow/typeflow' },
        ],
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Docs', link: DOCS_SITE },
      { text: 'GitHub', link: 'https://github.com/typeflow/typeflow' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/typeflow/typeflow' },
    ],
  },
});
