const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const babelConfig = require("./babel.config.js")
const production = process.env.NODE_ENV === "production"

const entry = "./index.js"

const output = {
  filename: "index.js",
  libraryTarget: "umd",
  globalObject: "this"
}

const jsHandler = {
  test: /\.(js|jsx)$/,
  exclude: [
    /node_modules/
  ],
  use: {
    loader: "babel-loader",
    options: babelConfig
  }
}

const styleHandler = {
  test: /\.(scss|sass|css)$/i,
  oneOf: [
    {
      test: /\.module\.(scss|sass|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
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
      test: /\.global\.(scss|sass|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
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
}

const svgHandler = {
  test: /\.svg$/,
  use: ["@svgr/webpack", "url-loader"]
}

const moduleConfig = {
  rules: [
    jsHandler,
    styleHandler,
    svgHandler
  ]
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: "styles.css"
  })
]

const externals = {
  "react": "react",
  "react-dom": "react-dom"
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
  plugins,
  externals,
  optimization,
  stats,
  ...(!production && {
    devtool: "source-map"
  })
})
