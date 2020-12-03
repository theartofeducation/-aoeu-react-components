# AOEU UI Common

This repository is a collection of shared UI resources for use in dependent projects (i.e. web and native app projects). It is configured and managed as a monorepo using [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Dependencies

* [React](https://reactjs.org/)
* [Storybook](https://storybook.js.org)
* [Lerna](https://lerna.js.org)

## Tasks

* `yarn run eslint` - runs `eslint` for static analysis of JS modules and components
* `yarn run mdlint` - runs `markdownlint` for status analysis of markdown documents
* `yarn run lint` - runs both `eslint` and `mdlint` tasks
* `yarn run test` - runs unit tests for JS modules and components with [Jest](https://jestjs.io/)
* `yarn run storybook` - runs a [local instance](http://localhost:6006) of Storybook
* `yarn run sb` - also runs Storybook (aliases the `storybook` task) (yes, I'm lazy)
* `yarn run build-storybook` - builds a static instance of Storybook for deployment/hosting/reference
* `yarn run bootstrap` - runs `lerna bootstrap`, which handles installation of dependencies for the individual packages, including and especially linking any cross-dependencies between packages. You can find [more details here](https://lerna.js.org/#command-bootstrap).
* `yarn run version` - runs `lerna version`, which handles incrementing the versions for each individual package in the project, updating the `CHANGELOG.md` for each package, and applying tags to the repository for each package that gets updated. You can find [more details about the `lerna version` command here](https://github.com/lerna/lerna/tree/main/commands/version#readme).
* `yarn run publish` - runs `lerna publish from-package`, which handles publishing packages that have not already/yet been published to the configured package registry. You can find [more details about the `lerna publish` command here](https://github.com/lerna/lerna/blob/main/commands/publish#readme).

## Environments

A live version of the production storybook is available at:
[https://theartofeducation.github.io/ui-common/](https://theartofeducation.github.io/ui-common/)
