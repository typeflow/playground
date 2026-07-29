# Typeflow Playground

Standalone interactive playground for
[Typeflow](https://github.com/typeflow/typeflow) — edit a mapping and its
input side by side and see the compiled output, inferred type, and
diagnostics update live. Deployed to
[typeflow.github.io/playground](https://typeflow.github.io/playground/).

Also embedded inline throughout [the docs](https://github.com/typeflow/docs)
via a smaller `MiniPlayground` component — this repo is the full standalone
page (toolbar, share links, diagnostics panel).

## Development

```console
$ bun install
$ bun run dev     # VitePress dev server
$ bun run build   # static build
$ bun run preview # preview a production build
```

Depends on `typeflowjs` as a real npm package for `compile`/`createMapping`/
`format`/`tokenize`, and on VitePress for layout and theming
(`useData()`, `--vp-c-*` CSS variables) — it isn't a fully
framework-independent app.

## Layout

| Path                          | Role                                              |
| ------------------------------ | -------------------------------------------------- |
| `index.md`                    | The single page, rendering `<Playground />`       |
| `.vitepress/theme/Playground.vue` | The playground itself (toolbar, editors, diagnostics, share) |
| `.vitepress/theme/CodeEditor.vue` | Shared textarea + syntax-highlighted backdrop     |
| `.vitepress/theme/highlight.ts` | Typeflow/JSON syntax highlighting (uses `typeflowjs`'s lexer) |
| `.vitepress/theme/share.ts`     | Encodes/decodes playground state into a URL hash  |
| `.vitepress/theme/demo-functions.ts` | Demo `use`-function implementations for examples |

`CodeEditor.vue`, `highlight.ts`, `share.ts` and `demo-functions.ts` are
duplicated from [`typeflow/docs`](https://github.com/typeflow/docs), which
needs its own copies for `MiniPlayground` — kept in sync by hand since
neither has a source dependency on the other.
