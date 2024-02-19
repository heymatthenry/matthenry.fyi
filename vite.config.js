const { defineConfig } = require("vite");
const { resolve } = require("path");
const { globSync } = require("glob");

const postHtmlPath = globSync("src/posts/**/*.html");

module.exports = defineConfig({
  root: "src",
  clearScreen: false, // This is to show Eleventy output in the console along with Vite output
  build: {
    outDir: "../public", // The output directory is relative to the project root, so we need to put it back one folder to work
    rollupOptions: {
      input: {
        main: resolve("src", "index.html"),
        nested: postHtmlPath,
      },
    },
  },
  appType: "mpa",
});
