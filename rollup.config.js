import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";

export default {
  input: "src/index.js",
  output: {
    file: "dist/code-view.js",
    format: "umd",
    name: "SSS",
    sourcemap: true
  },
  plugins: [svelte(), nodeResolve(), commonjs()]
};