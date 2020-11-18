# AOEU UI Common

This repository is a collection of shared UI resources for use in dependent projects (i.e. web and native app projects).

## Dependencies

* [React](https://reactjs.org/)
* [Storybook](https://storybook.js.org)

## Tasks

* `yarn run eslint` - runs `eslint` for static analysis of JS modules and components
* `yarn run mdlint` - runs `markdownlint` for status analysis of markdown documents
* `yarn run lint` - runs both `eslint` and `mdlint` tasks
* `yarn run test` - runs unit tests for JS modules and components with [Jest](https://jestjs.io/)
* `yarn run storybook` - runs a [local instance](http://localhost:6006) of Storybook
* `yarn run build-storybook` - builds a static instance of Storybook for deployment/hosting/reference

## Environments

A live version of the production storybook is available at:
[https://theartofeducation.github.io/ui-common/](https://theartofeducation.github.io/ui-common/)
