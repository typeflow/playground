import { defineConfig } from 'vitepress';

// Must be full URLs: VitePress applies withBase() to any link that isn't
// externally-qualified, which would turn a bare '/docs/' into
// '/playground/docs/'. Being a full URL also makes VitePress treat it as
// external (target="_blank") — theme/index.ts strips that back off for
// same-origin (typeflow.github.io) links once the page mounts.
const DOCS_SITE = 'https://typeflow.github.io/docs/';
const DOCS_SITE_FR = 'https://typeflow.github.io/docs/fr/';

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
