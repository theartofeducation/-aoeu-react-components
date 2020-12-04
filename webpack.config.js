module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    library: "aoeu-ui-common",
    libraryTarget: "umd"
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
  plugins: [],
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
