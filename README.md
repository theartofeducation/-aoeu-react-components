# AOEU UI Common

This repository is a collection of shared UI resources for use in dependent projects (i.e. web and native app projects). It is configured and managed as a monorepo using [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Dependencies

These are the main libraries and tools that are used in this project. They will all be installed and available for use when you've cloned the repository and run `yarn install`.

* [React](https://reactjs.org/) - a JavaScript library for building component-based user interfaces
* [Storybook](https://storybook.js.org) - a tool that facilitates developing, testing and reviewing the functionality of UI components in isolation.
* [Lerna](https://lerna.js.org) - a tool for managing JavaScript projects with multiple packages that facilitates inter-package dependencies during development, package versioning and CHANGELOG generation, and publishing.

## Tasks

* `yarn run eslint` - runs `eslint` for static analysis of JS modules and components
* `yarn run mdlint` - runs `markdownlint` for status analysis of markdown documents
* `yarn run lint` - runs both `eslint` and `mdlint` tasks
* `yarn run test` - runs unit tests for JS modules and components with [Jest](https://jestjs.io/)
* `yarn run clean` - deletes both the `node_modules` and `dist` folders in each component/package.
* `yarn run prebuild` - runs `yarn run clean`
* `yarn run build` - runs `webpack` to build each component/package in the project. You will not commonly need to run this manually yourself. This is called from the `prepublishOnly` task to build each component/package to prep each package for publishing to the npm/GitHub package registry.
* `yarn run build:watch` - runs a watch script to trigger builds when files change. This command is useful (necessary) when you are doing active development on a component or package that is consumed by an external project, and you need the changes to the linked package to propagate and trigger a rebuild/refresh of the dependent project during development.
* `yarn run storybook` - runs a [local instance](http://localhost:6006) of Storybook
* `yarn run sb` - also runs Storybook (aliases the `storybook` task) (yes, I'm lazy)
* `yarn run build-storybook` - builds a static instance of Storybook for deployment/hosting/reference
* `yarn run bootstrap` - runs `lerna bootstrap`, which handles installation of dependencies for the individual packages, including and especially linking any cross-dependencies between packages. You can find [more details here](https://lerna.js.org/#command-bootstrap).
* `yarn run version` - runs `lerna version`, which handles incrementing the versions for each individual package in the project, updating the `CHANGELOG.md` for each package, and applying tags to the repository for each package that gets updated. You can find [more details about the `lerna version` command here](https://github.com/lerna/lerna/tree/main/commands/version#readme).
* `yarn run publish` - runs `lerna publish from-package`, which handles publishing packages that have not already/yet been published to the configured package registry. You can find [more details about the `lerna publish` command here](https://github.com/lerna/lerna/blob/main/commands/publish#readme).
* `yarn run xlink` - runs the `xlink` CLI tool to help with managing un/linking common cross-project dependencies. See additional documentation on this below.

## Development

In this section you will find details for how to create and maintain components and packages in the project.

### Monorepo Setup

This project uses Lerna and yarn workspaces for managing the components and packages within it. There are two main places where these artifacts are maintained within the project, and those are the `components` folder and the `packages` folder. In the main `package.json` file, you will find:

```json
"workspaces": [
  "components/*",
  "packages/*"
]
```

This defines the available yarn workspaces for the project.

Additionally, in the `lerna.json` file, you will find:

```json
"packages": [
  "components/*",
  "packages/*"
]
```

This defines where lerna looks for packages when it performs the commands asked of it ([`bootstrap`](https://lerna.js.org/#command-bootstrap), [`version`](https://github.com/lerna/lerna/tree/main/commands/version#readme) and [`publish`](https://github.com/lerna/lerna/blob/main/commands/publish#readme) are the primary commands that we use lerna for).

So when you're creating or maintaining new components or packages in the project, these are the two places you will want to put or find the package you're creating or working on.

#### Package Registry Configuration

In the `lerna.json` file you will find:

```json
"command": {
  "publish": {
    "registry": "https://registry.npmjs.org/"
  }
}
```

This is where Lerna looks to find information about the package registry to publish to. This is important to know because if you're doing maintenance and want to test out publishing to a test registry (you can install [Verdaccio](https://verdaccio.org/) locally for this, which is recommended (see below for more details on this)), this is where you will change the registry URL.

#### Verdaccio for local testing

If you need to test out publishing packages, but don't wish to publish them to the public registry, it is recommended that you install [Verdaccio](https://verdaccio.org/) locally for testing purposes. This can be installed globally with yarn or npm:

```shell
yarn global add verdaccio
```

or with npm:

```shell
npm install --global verdaccio
```

Once it has been installed, you can run and instance of it locally by running this command in a terminal window:

```shell
verdaccio --listen localhost:7890
```

This will give you a running instance of Verdaccio that you can publish to, browse packages in your browser at [http://localhost:7890](http://localhost:7890), and even install these packages from. Change the registry configuration in your `lerna.json` file (see above) to this URL and you'll be all set. If you wish or need to install these packages as well, you will want to create an `.npmrc` file in the project you wish to install them from with the following scope defined in it:

```shell
@aoeu:registry=http://localhost:7890
```

With a local running instance of the Verdaccio package registry, you'll be all set for testing package publishing.

### Components

See [the Components Overview Guide](https://theartofeducation.github.io/ui-common/?path=/story/components-components-overview--page) in the style guide for details on how to create and maintain components in the project.

### Packages

See [the Packages Overview Guide](https://theartofeducation.github.io/ui-common/?path=/story/packages-packages-overview--page) in the style guide for details on how to create and maintain components in the project.

### Adding and managing dependencies

Adding new dependencies (and dev dependencies) makes use of the workspaces feature in yarn. When you wish to add a new dependency at the _project_ level (not specific to a package), you have to pass the `-W` flag to the yarn command. For example, if you wanted to add `eslint` as a dev dependency to the project, you would run:

```shell
yarn add -D -W eslint
```

If you need to add a dependency to a specific component/package in the project, you need to specify the workspace that you wish to add the dependency to in the command. For example, if you wanted to add the `@material-ui/data-grid` package to one of your component packages, from the root of the project you would run:

```shell
yarn workspace @aoeu/some-component add @material-ui/data-grid
```

Alternately, you could also switch into the folder for the specific component or package that you wish to add it to, and just run the `yarn add` command without specifying the workspace:

```shell
cd components/some-component
yarn add @material-ui/data-grid
```

By using yarn workspaces, adding and managing dependencies at both the project and package level can be optimized, as yarn knows how to maintain the `yarn.lock` file and the overall collection of dependencies for the project in a single `node_modules` folder in the root of the project, rather than maintaining them individually in each component or package folder.

You can read more about how yarn workspaces work in [the yarn documentation here](https://classic.yarnpkg.com/en/docs/workspaces/).

### Bootstrapping

It will be important, especially during the course of local development, to ensure that you run the `yarn bootstrap` task, which runs the `lerna bootstrap` command. This is important because Lerna will handle the arduous and maddening task of iterating through each of the component/package folders in the project, inspecting their cross-dependencies, and handle running all of the necessary `yarn link` commands so that those cross-package dependencies resolve for you properly during local development. [Additional details and guidelines for how the `lerna boostrap` command works can be found in its documentation](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme).

### Managing cross-project shared dependencies

When doing cross-project development, and linking components or packages from `ui-common` to external react projects to support local development, you will almost certainly run into the dreaded [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html). This document won't go into detail about that issue, but if you're curious about it, in addition to that page in their documentation, you can read in-depth about it [here](https://github.com/facebook/react/issues/13991) and [here](https://github.com/facebook/react/issues/14257) as well. The only solution that I was able to get to consistently work to solve this issue was to setup symlinks to the dependencies that are shared between `ui-common` and projects that depend on the resources in it, which most commonly are `react` and `react-dom`, but could be others as well as it grows.

Because setting up and configuring those links correctly is awkward/cumbersome at best, this project includes [`xlink`](https://github.com/theartofeducation/xlink) as a dependency to help facilitate this. More details about xlink can be found in [the project README](https://github.com/theartofeducation/xlink#readme). That script can be run like this:

```sh
yarn run xlink
```

Running this will prompt the user for information. The first thing it will ask for is what action you wish to take: `link`, `unlink` or `status`.

Selecting `status` will result in displaying a list of the links that yarn currently has registered globally, and the paths that each of those links points to.

Selecting either `link` or `unlink` will prompt the user with a list of packages for which to perform either the `link`ing or `unlink`ing action. The user will additionally be prompted to enter a `Relative path to the project to link to`, for example: `../some-nextjs-project`. With the list of packages to be `link`ed or `unlink`ed and the target relative path, the script will handle either linking or unlinking each of the selected packages into the directory resolved by the given relative path to the dependent project.

This should help resolve any issues with the Invalid Hook Call Warning, and allow successful continued local development using shared components and packages from `ui-common`.

> **NOTE:** _This will result in **BOTH** the `ui-common` library **AND the dependent project using the same version of React**, and it will use the one that is configured and installed in the `ui-common/node_modules` folder. This is important to understand, in case the version of React configured in `ui-common` and the dependent projects are different, or if they have different requirements._

### Versioning

```shell
yarn run version
```

The management of package versioning in the project is simplified by the use of a combination of [commitlint](https://commitlint.js.org/), [husky](https://typicode.github.io/husky/) and Lerna. Husky allows us to ensure that commitlint is run in a `commit-msg` git hook that validates the structure and format of our commit messages, and ensures that they conform to a specifically formatted standard. Ensuring that commits are formatted properly, allows automated tools like Lerna derive the types of changes that were made since the previous time a version was applied to a package, which gives it the ability to intelligently determine how to increment the version of the package, as well as update the packages `CHANGELOG.md` file.

Running `yarn run version` will run `lerna version --conventional-commits`. Running this command tells lerna to iterate through all of the components and packages in the project, determine whether or not changes have been made, and increment the package version and update its `CHANGELOG.md` file accordingly.

In the course of running this command, you will be prompted by Lerna. The prompt will include information about all of the packages that will be updated, including the version that the package is being bumped both _from_ and _to_. This will afford you the opportunity to cancel out if you feel it is incrementing the version of a package inaccurately, and make any necessary changes and try it again. When you are agreeable to the changes that it proposes and select `yes` and allow it to make the changes, Lerna will perform the following actions:

* Update the `version` attribute in the `package.json` file of each component/package that needs updated.
* Update the `CHANGELOG.md` file with details of all of the changes being committed to each component/package.
* Apply a tag to the repository for each component/package that is being updated with information about the new version of the package.

In lieu of making any changes to your git history or modifying existing commits, if you want to force a specific version incrementation, you can pass arguments to the `version` task to specify which version segment to increment specifically. If Lerna attempts to update the version with an updated minor version, and you wish instead to only increment the patch segment of the version, you can explicity pass the `patch` option to the command:

```shell
yarn run version patch
```

> **NOTE**: This will apply a `patch` increment to ALL packages that Lerna is attempting to update.

Additional details about other options available for running the `lerna version` command can be found in [the documentation for the command](https://github.com/lerna/lerna/tree/main/commands/version#readme) in the Lerna GitHub repository.

### Publishing

```shell
yarn run publish
```

Publishing packages from the project can be accomplished by running the `yarn run publish` task, which runs the `lerna publish from-package` command. With this command, Lerna will check the latest version of each package that has been deployed to the registry, and compare it to the current version of the package, and for any package where a newer version exists locally, it will prompt you asking if you wish to publish this new version of the package. If you agree and select `yes`, Lerna will handle publishing each of these packages to the configured package registry (npm).

### Storybook

The project employs [Storybook](https://storybook.js.org) for the purpose of facilitating the development, testing, review and documentation of components and packages. It is used as the framework for an organizational style guide.

A locally running instance of the Storybook UI can be started by running:

```shell
yarn run storybook
```

or

```shell
yarn run sb
```

Once either of those tasks have been run, assuming there are no errors, the instance of Storybook should have automatically been opened in your browser at [http://localhost:6006](http://localhost:6006). This running instance can be used in the course of development for evaluating the rendered state of your components and the written documentation associated with them. You can read more details about how to use Storybook in [the documentation for it here](https://storybook.js.org/docs/).

#### Configuration

The primary configuration file for Storybook lives at `.storybook/main.js`. This is where you will need to make changes if/when you wish to change the definitions for where Storybook can find stories, add and/or configure any [Storybook Addons](https://storybook.js.org/addons/), or make any adjustments to the webpack configuration.

#### Customization

The `.storybook/preview.js` file contains configuration logic for customizing the order of items rendered in the navigation sidebar. None of the code in that file should need to be changed other than the values and hierarchical order of the properties of the `storiesOrder` varilable in that file.

The overall theme for the Storybook instance is defined in the `.storybook/aoeu-theme.js` file, which is then imported and applied in `.storybook/manager.js`. General style (CSS) overrides are currently located in `static/style/storybook.css`, which is then imported with a `<link>` tag in both `.storybook/manager-head.html` and `.storybook/preview-head.html`. Since the styles in that file are _overriding_ styles applied by storybook itself, it _does_ contain liberal use of the CSS `!important` directive (gross). Not optimal, but this was the best/only way (that I was able to find) to implement these kind of specific style overrides, unfortunately. We can revisit this and make it better in the future if we find a better way of handling this, but for now, it works.

#### Writing Documentation (Stories)

Storybook stories (documentation for individual components and packages) can be defined by creating a `<package-or-component-name>.stories.js` or `<package-or-component-name>.stories.mdx` file in one of the following configured (in `.storybook/main.js`) folders or a subfolder of it:

* `guides`
* `stories`
* `components`
* `packages`

More detailed guidelines for _how_ to compose stories can be found [in the Storybook documentation](https://storybook.js.org/docs/react/writing-stories/introduction).

## Environments

A live version of the production storybook is available at:
[https://theartofeducation.github.io/ui-common/](https://theartofeducation.github.io/ui-common/)

---

## TODO

* [ ] Pull in [plop](https://plopjs.com/) and create a set of generator templates and a project-level task for generating a folder and all of the files necessary for creating new components and packages.
