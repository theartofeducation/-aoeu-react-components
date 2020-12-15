const babelConfig = require("./babel.config.json")
const development = process.env.NODE_ENV !== "production"

module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
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
  },
  externals: {
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
    }
  },
  optimization: {
    minimize: !development
  },
  devtool: development ? "source-map" : "none",
  stats: {
    children: false,
    modules: false
  }
}
