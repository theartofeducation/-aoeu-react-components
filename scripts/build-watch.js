const { spawn } = require("child_process")
const chokidar = require("chokidar")
const { isNotEmpty } = require("../packages/util")

const extensions = ["js", "jsx", "json", "scss", "svg", "jpg", "png"]
const watcher = chokidar.watch([
  `./components/**/*.(${extensions.join("|")})`,
  `./packages/**/*.(${extensions.join("|")})`
], {
  ignored: [
    "**/dist/**",
    "**/node_modules/**"
  ],
  persistent: true
})

const log = {
  info(message) {
    if (isNotEmpty(message) && message !== "undefined") {
      console.log(message)
    }
  },

  error(message) {
    if (isNotEmpty(message) && message !== "undefined") {
      console.error(message)
    }
  }
}

const runBuild = () => {
  const build = spawn("./node_modules/.bin/lerna", [
    "exec",
    "--parallel",
    "--",
    "webpack",
    "--config",
    "../../webpack.config.js"
  ])

  build.stderr.on("data", data => log.error(String(data)))
  build.stderr.on("end", data => log.error(String(data)))

  build.stdout.on("data", data => log.info(String(data)))
  build.stdout.on("end", data => log.info(String(data)))
  build.stdout.on("exit", exitCode => {
    if (exitCode !== 0) {
      log.error(`Build failed (exit code ${exitCode})`)
    }
  })
}

watcher
  .on("ready", path => runBuild())
  .on("change", path => runBuild())
