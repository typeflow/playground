import './tokens.css';
import DefaultTheme from 'vitepress/theme';
import Playground from './Playground.vue';
import { type Theme } from 'vitepress';

// Links to typeflow/docs are full URLs (see DOCS_SITE in config.mts — a bare
// path would get base-prefixed to '/playground/docs/' by VitePress's own
// link normalizer). Being a full URL makes VitePress treat it as external
// and add target="_blank"; since it's actually the same origin
// (typeflow.github.io) at runtime, open it in the same tab instead.
// Intercepted at click time (capture phase, before the browser acts on
// target="_blank") rather than patched on mount/navigation, so it doesn't
// race Vue's hydration.
function openCrossSiteLinksInSameTab(e: MouseEvent): void {
  const a = (e.target as HTMLElement | null)?.closest?.(
    'a[target="_blank"]',
  ) as HTMLAnchorElement | null;
  if (a && a.hostname === location.hostname) {
    a.removeAttribute('target');
    a.removeAttribute('rel');
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Playground', Playground);

    if (typeof window !== 'undefined') {
      document.addEventListener('click', openCrossSiteLinksInSameTab, true);
    }
  },
} satisfies Theme;
