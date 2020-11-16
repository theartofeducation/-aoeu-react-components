<!-- markdownlint-disable MD024 MD025 -->
# Decision Log Book

Taken from [Decision Management in Software Engineering](https://medium.com/swlh/decision-management-in-software-engineering-ca60f9d40e02)

## 2020-10-20: We need an environment in which to develop, test and demonstrate our components

### Decision Makers

Christopher Lamm
Thomas Jean
Bob Yexley

### Context

Beginning the development of a new platform of tools to replace the existing
AOEU WordPress implementation.

### Solution

We decided to use [Storybook](https://storybook.js.org).

#### Why This Solution

Storybook gives us a flexible platform in which to develop components in
isolation, and be able to test and demonstrate the rendering of those
components under various conditions.

#### Limitation

We have no known limitations at this time.

### Rejected Solutions

No alternative solutions were evaluated.

----

## 2020-10-20: We need a UI component library with which to build our user interfaces

### Decision Makers

Christopher Lamm
Thomas Jean
Bob Yexley

### Context

Beginning the development of a new platform of tools to replace the existing
AOEU WordPress implementation.

### Solution

We decided to use [React](https://reactjs.org/).

#### Why This Solution

In comparing React with altnernative options such as Svelte and Vue JS, it was
determined that React would give us the most flexibility long-term for reusing
components across various platforms (Web, React Native, etc).

#### Limitation

We have no known limitations at this time.

### Rejected Solutions

Vue JS
Svelte JS
<!-- markdownlint-enable MD024 MD025 -->
