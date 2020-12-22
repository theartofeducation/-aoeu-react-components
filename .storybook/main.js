module.exports = {
  "stories": [
    "../guides/**/*.stories.@(js|mdx)",
    "../stories/**/*.stories.@(js|mdx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|mdx)",
    "../packages/**/*.stories.@(js|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]-[hash:base64:7]"
          }
        }
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    // ========================================================================
    // This is where we customize the Storybook webpack configuration
    // ========================================================================

    const { module: { rules } } = config

    // ========================================================================
    // Tweak the Sass processing rule to support files with a `.global.scss`
    // extension *without* using CSS Modules
    // ========================================================================
    const scssAssetRuleIndex = rules.indexOf(rules.find(({ test }) => test.test(".scss")))
    let scssAssetRule = rules[scssAssetRuleIndex]
    const { test, use: currentLoaders } = scssAssetRule
    scssAssetRule = {
      test: /\.(scss|sass|css)$/i,
      oneOf: [
        {
          test: /\.module\.(scss|sass|css)$/,
          use: [...currentLoaders]
        },
        {
          test: /\.global\.(scss|sass|css)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }

    config.module.rules.splice(scssAssetRuleIndex, 1, scssAssetRule)

    // ========================================================================
    // Add @svgr/webpack to SVG import processing
    // ========================================================================
    const svgAssetRule = rules.find(({ test }) => test.test(".svg"))

    const svgAssetLoader = {
      loader: svgAssetRule.loader,
      options: svgAssetRule.options || svgAssetRule.query
    }

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", svgAssetLoader]
    })

    return config
  }
}
