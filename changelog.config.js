const config = require("conventional-changelog-conventionalcommits")

module.exports = config({
  types: [
    { type: "build", hidden: true },
    { type: "chore", hidden: true },
    { type: "ci", hidden: true },
    { type: "docs", section: "Documentation" },
    { type: "feature", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "performance", section: "Performance Improvements" },
    { type: "refactor", hidden: true },
    { type: "revert", hidden: true },
    { type: "style", hidden: true },
    { type: "test", section: "Tests/Testing" },
    { type: "wip", hidden: true }
  ]
})
