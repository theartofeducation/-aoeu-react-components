const babelConfig = require("./babel.config.json")
const production = process.env.NODE_ENV === "production"

const entry = "./index.js"

const output = {
  filename: "index.js",
  libraryTarget: "umd",
  globalObject: "this"
}

const moduleConfig = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: [
        /node_modules/
      ],
      use: {
        loader: "babel-loader",
        options: babelConfig
      }
    },
    {
      test: /\.(scss|sass|css)$/i,
      oneOf: [
        {
          test: /\.module\.(scss|sass|css)$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]-[hash:base64:7]",
                  exportOnlyLocals: false
                }
              }
            },
            "sass-loader"
          ]
        },
        {
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"]
    }
  ]
}

const resolve = {
  alias: {
    "react": "../theartofeducation.io/node_modules/react",
    "react-dom": "../theartofeducation.io/node_modules/react-dom",
    "styled-components": "../theartofeducation.io/node_modules/styled-components"
  }
}

const externals = {
  "react": {
    root: "React",
    commonjs2: "react",
    commonjs: "react",
    amd: "react",
    umd: "react"
  },
  "react-dom": {
    root: "ReactDOM",
    commonjs2: "react-dom",
    commonjs: "react-dom",
    amd: "react-dom",
    umd: "react-dom"
  },
  "styled-components": {
    root: "styled-components",
    commonjs2: "styled-components",
    commonjs: "styled-components",
    amd: "styled-components",
    umd: "styled-components"
  }
}

const optimization = {
  minimize: production
}

const stats = {
  children: false,
  modules: false
}

module.exports = Object.assign({}, {
  entry,
  output,
  module: moduleConfig,
  resolve,
  externals,
  optimization,
  stats,
  ...(!production && {
    devtool: "source-map"
  })
})
