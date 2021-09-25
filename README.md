# grapesjs-uikit

[DEMO](##)
> **Provide a live demo of your plugin**
For a better user engagement create a simple live demo by using services like [JSFiddle](https://jsfiddle.net) [CodeSandbox](https://codesandbox.io) [CodePen](https://codepen.io) and link it here in your README (attaching a screenshot/gif will also be a plus).
To help you in this process here below you will find the necessary HTML/CSS/JS, so it just a matter of copy-pasting on some of those services. After that delete this part and update the link above

The css and js from uikit is needed. Grapesjs has problems with @ in css names, so you need to use https://github.com/nema1012/uikit where '@' is replaced with '-at-'

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-uikit"></script>
<script> src="uikit.min.js"></script>
<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-uikit'],
  canvas: {
    styles: [
            'node_modules/uikit/dist/css/uikit.min.css'
            ],
    scripts: [
            'node_modules/uikit/dist/js/uikit.min.js',
            'node_modules/uikit/dist/js/uikit-icons.min.js'
            ],
        }
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-uikit`
* Components
    * `component-id-1`
    * `component-id-2`
    * ...
* Blocks
    * `block-id-1`
    * `block-id-2`
    * ...



## Options

| Option | Description | Default |
|-|-|-
| `option1` | Description option | `default value` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-uikit`
* NPM
  * `npm i grapesjs-uikit`
* GIT
  * `git clone https://github.com/nema1012/grapesjs-uikit.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-uikit.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-uikit'],
      pluginsOpts: {
        'grapesjs-uikit': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-uikit';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/nema1012/grapesjs-uikit.git
$ cd grapesjs-uikit
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
