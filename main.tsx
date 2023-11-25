import { renderToString } from "preact-render-to-string";

const pClass = "foo " + "bar";
const name = "world";

function App() {
  return (
    <div class="foo">
      <h1>this is a demo</h1>
      <p class={pClass}>some cool content {name}</p>
    </div>
  );
}

const html = renderToString(<App />);

console.log(html);
