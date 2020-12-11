module.exports = {
  input: "index.js",
  output: {
    moduleName: "package",
    minify: true,
    format: ["umd", "esm"],
    extractCSS: false,
    dir: "./dist"
  },
  externals: ["react", "react-dom", "prop-types"]
}
