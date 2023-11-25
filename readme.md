# Deno Preact Precompile Jsx

This shows the new precompile JSX transform working with Preact.

- [Fast(est) JSX transform](https://deno.com/blog/v1.38#fastest-jsx-transform) with around 7-20x faster rendering times and a 50% reduction in Garbage Collection times.
- Based on [Marvin Hagemeister's](https://github.com/marvinhagemeister/deno-jsx-precompile-preact-demo/) example.
- The vendored version files are replaced with the [https://esm.sh/](https://esm.sh/) modules.

## Usage

```bash
deno run main.ts
# <div class="foo"><h1>this is a demo</h1><p class="foo bar">some cool content world</p></div>
```
