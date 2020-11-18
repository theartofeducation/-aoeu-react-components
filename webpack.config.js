const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const pkg = require("./package.json")

const production = process.env.NODE_ENV === "production"

module.exports = {
  entry: "./components/index.js",
  output: {
    filename: pkg.main,
    library: "@aoeu/ui-common",
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules"]
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
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react"
            ]
          }
        }
      },
      {
        test: /\.(scss|sass|css)$/i,
        oneOf: [
          {
            test: /\.module\.(scss|sass|css)$/,
            use: [
              production ? MiniCssExtractPlugin.loader : "style-loader",
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
              production ? MiniCssExtractPlugin.loader : "style-loader",
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
  plugins: [
    new MiniCssExtractPlugin()
  ],
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
  stats: {
    children: false,
    modules: false
  }
}
