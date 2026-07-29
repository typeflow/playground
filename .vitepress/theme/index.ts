import './tokens.css';
import DefaultTheme from 'vitepress/theme';
import Playground from './Playground.vue';
import { type Theme } from 'vitepress';

// Links to typeflow/docs are full URLs (see DOCS_SITE in config.mts — a bare
// path would get base-prefixed to '/playground/docs/' by VitePress's own
// link normalizer). Being a full URL makes VitePress treat it as external
// and add target="_blank"; since it's actually the same origin
// (typeflow.github.io) at runtime, strip that back off.
function openCrossSiteLinksInSameTab(): void {
  for (const a of document.querySelectorAll<HTMLAnchorElement>(
    'a[target="_blank"]',
  )) {
    if (a.hostname === location.hostname) {
      a.removeAttribute('target');
      a.removeAttribute('rel');
    }
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('Playground', Playground);

    if (typeof window !== 'undefined') {
      const previous = router.onAfterRouteChanged;
      router.onAfterRouteChanged = async (to) => {
        await previous?.(to);
        requestAnimationFrame(() =>
          requestAnimationFrame(openCrossSiteLinksInSameTab),
        );
      };
      requestAnimationFrame(openCrossSiteLinksInSameTab);
    }
  },
} satisfies Theme;
