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
    const svgAssetRule = config.module.rules.find(({ test }) => test.test(".svg"))

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
