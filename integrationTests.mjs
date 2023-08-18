import assert from "node:assert";
import { Miniflare } from "miniflare";

const mf = new Miniflare({
  scriptPath: "./build/worker/shim.mjs",
  liveReload: true,
  modules: true,
  modulesRules: [
    { type: "CompiledWasm", include: ["**/*.wasm"], fallthrough: true }
  ]
});

const res = await mf.dispatchFetch("http://localhost:8787/");
assert(res.ok);
assert.strictEqual(await res.text(), "Hello, World!");
console.log("Test passed!");
process.exit(0);