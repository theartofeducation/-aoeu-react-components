# @aoeu/external-link

```shell
yarn add @aoeu/external-link
```

This component renders an anchor (`a`) tag that is designed to safely open the target `href` attribute in a new window/tab. It does so by adding the `target="_blank"` and `rel="noreferrer"` attributes.

For example:

```js
<ExternalLink url="https://theartofeducation.edu">aoeu.edu</ExternalLink>
```

Will generate:

```html
<a href="https://theartofeducation.edu" target="_blank" rel="noreferrer">aoeu.edu</a>
```
