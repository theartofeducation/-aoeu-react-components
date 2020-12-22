const os = require("os")
const fs = require("fs")
const path = require("path")
const walk = require("walk-sync")
const chalk = require("chalk")

// This helper script is used for supporting the use of shared dependencies
// in the context of cross-project development. The two most common cases
// for this are going to be react and react-dom, but there could well end up
// being additional common dependencies across projects as our collection of
// projects grow in the future. This is a CLI utility that helps facilitate
// the linking and unlinking of shared dependencies with consuming projects,
// which is necessary for eliminating the issues documented at the links
// below. To summarize those issues: react does not support, and will throw
// errors when it encounters multiple instances of itself or any related
// dependent libraries (react-dom, styled-components, etc) loaded at runtime.
// This script auomates and simplifies the execution of the yarn `link` and
// `unlink` commands between those common libraries from this project, and
// the root directory of the dependent project, which is prompted for you
// to enter when this utility is run at the command line.
//
// https://github.com/facebook/react/issues/14257
// https://github.com/facebook/react/issues/13991
// https://reactjs.org/warnings/invalid-hook-call-warning.html

module.exports = function(plop) {
  plop.setGenerator("xlink", {
    description: "Handles linking/unlinking of shared dependencies for [a] dependent project(s)",
    prompts: [
      {
        name: "action",
        type: "list",
        message: "Action",
        choices: ["status", "link", "unlink"]
      },
      {
        when: function({ action }) {
          return action !== "status"
        },
        name: "dependencies",
        type: "checkbox",
        message: "Dependencies (check all that apply):",
        choices: [
          "react",
          "react-dom"
        ],
        default: [
          "react",
          "react-dom"
        ]
      },
      {
        when: function({ action }) {
          return action !== "status"
        },
        name: "targetRelativePath",
        type: "input",
        message: "Relative path to the project to link to (i.e. \"../target-project-folder\")"
      }
    ],
    actions: ({ action, dependencies = [], targetRelativePath = "" }) => {
      const { execSync: exec } = require("child_process") // eslint-disable-line global-require

      const actionHandlerMap = {
        link: {
          preAction() {
            console.log("Linking local packages...")
          },
          handler({ dep, linkFromDir, linkTargetPath }) {
            console.log(`"${dep}" -> ${linkTargetPath}`)
            exec("yarn link", { cwd: linkFromDir }, handleResult)
            exec(`yarn link "${dep}"`, { cwd: linkTargetPath }, handleResult)
          }
        },
        unlink: {
          preAction() {
            console.log("Unlinking local packages...")
          },
          handler({ dep, linkFromDir, linkTargetPath }) {
            console.log(`Unlinking "${dep}" from ${linkTargetPath}`)
            exec(`yarn unlink "${dep}"`, { cwd: linkTargetPath }, handleResult)
            exec("yarn unlink", { cwd: linkFromDir }, handleResult)
          },
          postAction({ linkTargetPath }) {
            console.log("Restoring original packages...")
            if (dependencies && dependencies.length > 0) {
              dependencies.forEach(dep => {
                exec(`yarn add ${dep}`, { cwd: linkTargetPath }, handleResult)
              })
            }
          }
        },
        status: {
          preAction() {
            console.log("Current link(s) status...")
            console.log("\nThese are the links that Yarn currently has registered globally:\n")
          },
          handler() {
            const YARN_LINKS_ROOT = ".config/yarn/link"
            const rootLinksPath = path.resolve(os.homedir(), YARN_LINKS_ROOT)
            const entries = walk(rootLinksPath)
            const links = []

            entries.forEach(entry => {
              const entryPath = path.resolve(rootLinksPath, entry)
              const entryInfo = fs.lstatSync(entryPath)
              if (entryInfo.isSymbolicLink()) {
                const link = entryPath.replace(`${rootLinksPath}/`, "")
                const symlinkPath = fs.readlinkSync(entryPath)
                links.push({ link, symlinkPath })
              }
            })

            if (links.length > 0) {
              links.forEach(({ link, symlinkPath }) => {
                console.log(`${link} -> ${chalk.green(symlinkPath)}`)
              })
            } else {
              console.log("Yarn currently has no packages linked globally")
            }

            console.log("")
          }
        }
      }

      const handleResult = (error, stdout, stderr) => {
        if (error) {
          console.error(`ERROR: ${error}`)
        }
      }

      return [
        function handleAction() {
          const { preAction, handler, postAction } = actionHandlerMap[action]
          const linkTargetPath = path.resolve(__dirname, "..", targetRelativePath)

          if (preAction && typeof preAction === "function") {
            preAction()
          }

          if (dependencies && dependencies.length > 0) {
            dependencies.forEach(dep => {
              const linkFromDir = path.resolve(__dirname, "..", "node_modules", dep)

              if (handler && typeof handler === "function") {
                handler({ dep, linkFromDir, linkTargetPath })
              }
            })
          } else {
            handler()
          }

          if (postAction && typeof postAction === "function") {
            postAction({ linkTargetPath })
          }

          return "🔗 👍🏼\n"
        }
      ]
    }
  })
}
