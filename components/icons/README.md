# @aoeu/icons

```shell
yarn add @aoeu/icons
```

This package provides access to an `Icons` component, which renders an `svg` element with a collection of various `symbol` elements in it for rendering common SVG icons in web applications. This should be rendered into consuming applications in the following manner:

```js
<Icons />
```

This will make those icons available for reference from the available `Icon` component, which takes a `symbolId` prop, and makes use of the SVG `use` element, which will reference the given `symbol` element rendered with the `Icons` component above. It can be used in this manner:

```js
<Icon symbolId="arrow-down" />
```
