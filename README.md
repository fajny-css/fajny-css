# Getting started

Documentation here: [https://fajny-css.github.io/](https://fajny-css.github.io/)

## Via CDN

Copy this in the `<head>` of your HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/fajny-css/css/fajny.min.css" />
```

And add this at the end of the `<body>`:

```html
<script src="https://unpkg.com/fajny-css/lib/fajny.min.js"></script>
```

## Via npm

Open your app's folder in a terminal and run:

```shell
npm i fajny-css-v3
```

## Locally

Just copy this in the `<head>` of your HTML, and change `/path/to/css` by the real path to the file:

```html
<link rel="stylesheet" href="/path/to/css/fajny.min.css" />
```

And this at the end of the body:

```html
<script src="/path/to/lib/fajny.min.js"></script>
```

Then, add this to your `package.json`:

```json
{
    ...rest
    "scripts": {
        "build": "babel js -d lib"
    },
    "devDependencies": {
        "@babel/cli": "^7.17.10",
        "@babel/core": "^7.18.0",
        "@types/node": "^17.0.31",
        "@babel/preset-env": "^7.18.0"
    }
}
```

Now, run `npm install`.

You're all set!

### Compile SCSS to CSS

We're using [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) to compile SCSS to CSS automatically.

### Compile JS

Since we are using the most updated JavaScript, we need to compile JS files to have them as compatible as possible. Here, we're using [Babel](https://babeljs.io/). When making changes to JS files, run `npm run build` to compile your JS.

## How to use Fajny CSS

### Customise Fajny CSS

#### Set your variables

You can change your fonts and colors directly in the variables in the file `scss/_variables.scss`.

#### Fonts

By default Fajny CSS uses Lato for fonts. You can change this by changing the Google Fonts link at the beginning of the file `scss/fajny.scss`, and then in the variables file.

#### Colors

You can edit the file `scss/_variables.scss` and change the corresponding Hex values. You can find a nice color palette generator here: [https://coolors.co/](https://coolors.co/).

### Choose your components

If you do not want to use some components and save some space you can just comment them in the file `scss/fajny.scss`:

```scss
// @import "components/icon";
// @import "components/hr";
// @import "components/image";
// @import "components/video";
// @import "components/avatar";
@import "components/loader";
@import "components/button";
@import "components/button-icon";
@import "components/tag";
@import "components/badge";
@import "components/tooltip";
@import "components/input";
@import "components/input-image";
@import "components/input-check";
@import "components/form";
@import "components/card";
@import "components/cover";
```