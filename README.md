# CC Ant Design Custom Theme

How to customise Ant Design：https://ant.design/docs/react/customize-theme

## Bootstrap the project

```bash
$ npm install
$ npm start
```

### How does it work?

Create a custom `theme.js`:

```js
module.exports = () => {
  return {
    'primary-color': '#1088ae',
  };
};
```

Add `theme` reference in `package.json` as it follows:

```js
// Add
"theme": "./theme.js",
```