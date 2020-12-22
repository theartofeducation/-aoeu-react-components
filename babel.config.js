module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
          "esmodules": true
        },
        "bugfixes": true
      }
    ],
    "@babel/react"
  ],
  env: {
    production: {
      plugins: [
        ["transform-react-remove-prop-types", { "mode": "wrap" }]
      ]
    }
  }
}
