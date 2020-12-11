import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
// import image from "@rollup/plugin-image"
import commonjs from "@rollup/plugin-commonjs"
import url from "@rollup/plugin-url"
import svgr from "@svgr/rollup"
// import sass from "rollup-plugin-sass"
import postcss from "rollup-plugin-postcss"

export default function() {
  const packageName = process.env.LERNA_PACKAGE_NAME

  return {
    input: "index.js",
    output: {
      file: "dist/index.js",
      name: packageName,
      format: "umd",
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes"
      }
    },
    preserveSymlinks: true,
    plugins: [
      resolve({
        mainFields: ["main", "module"],
        extensions: [".js", ".jsx", ".json", ".svg", ".scss"],
        moduleDirectories: ["node_modules"]
      }),
      // sass({
      //   options: {
      //     includePaths: ["node_modules"]
      //   }
      // }),
      postcss({
        modules: {
          localIdentName: "[local]-[hash:base64:7]",
          exportOnlyLocals: false
        }
      }),
      // image(),
      babel({
        babelHelpers: "transform-runtime",
        presets: ["@babel/env", "@babel/preset-react"],
        // plugins: ["@babel/transform-runtime"],
        exclude: [/node_modules/]
      }),
      url(),
      svgr(),
      commonjs({
        include: [/node_modules/]
      })
    ],
    external: [
      "react",
      "react-dom",
      "prop-types",
      /@babel\/runtime/
    ]
  }
}
