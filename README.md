# Getting Started

## Via CDN

Just copy this in the `<head>` of your HTML:
```
<link rel="stylesheet" href="https://unpkg.com/fajny-css/css/fajny.min.css">
<link rel="stylesheet" href="https://unpkg.com/fajny-css/css/fajny-icons.min.css">
```

And this at the end of the `<body>`: `<script src="https://unpkg.com/fajny-css/js/script.min.js"></script>`.

## Via NPM

Open the folder in your terminal and run this command `npm i fajny-css`.

## Locally

Just copy this in the `<head>` of your HTML, and change `/path/to/css` by the real path to the file:
```
<link rel="stylesheet" href="/path/to/css/fajny.min.css">
<link rel="stylesheet" href="/path/to/css/fajny-icons.min.css">
```

And this at the end of the `<body>`: `<script src="/path/to/js/script.min.js"></script>`.

You can find a nice tutorial to compile your code automatically with Grunt [here](https://www.taniarascia.com/getting-started-with-grunt-and-sass/).

All set, you can start to code!

## How to use Fajny CSS

### Customise Fajny CSS

#### Set your variables

You can change your fonts and colors directly in the variables in the file `/scss/_variables.scss`.

#### Fonts

By default Fajny CSS uses Nunito Sans Black for the titles and Mulish for the body. You can change this by changing the [Google Fonts](https://fonts.google.com/) link in the `head` of your HTML file, and in the variables file.

#### Colors

You can edit the file `/scss/_variables.scss` and change the corresponding Hex values. You can find a nice color palette generator here: [https://coolors.co/](https://coolors.co/).

### Choose your components

If you do not want to use some components and save some space you can just comment them in the file `/scss/fajny.scss`:

```
//@import "components/buttons";
//@import "components/avatar";
@import "components/breadcrumbs";
@import "components/badges";
@import "components/cards";
@import "components/image-container";
@import "components/video"
@import "components/parallax";
@import "components/forms";
@import "components/alerts";
```