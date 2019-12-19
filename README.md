# Getting Started

## Via CDN

Just copy this in the `<head>` of your HTML `<link rel="stylesheet" href="https://unpkg.com/fajny-css/css/fajny.min.css">`

## Via NPM

Open the folder in your terminal and run this command `npm i fajny-css`.

## Locally

This installation is for macOS only.

### Download the project
Download or clone the project on your computer.

### Open your terminal
Open your terminal to run the following commands.

### Install Ruby
It's already installed on macOS, but you can check with this command: `ruby -v`. If it's not installed, just follow the [official documentation](https://www.ruby-lang.org/en/documentation/installation/#homebrew).

### Install Sass
To check if already installed on your computer run this command `sass -v`.

If it's not installed yet on your machine, run `sudo gem install sass` or `npm install -g sass`.

If you need help to code in SCSS go here: [Sass website](https://sass-lang.com/).

### Install XCode 
You can find it directly in the Mac App Store.

### Install Node.js
Go to [Node.js website](https://nodejs.org/) to get the installer, open the .pkg downloaded and run the installer.

### Install Grunt CLI
Finally install Grunt CLI globally `npm install -g grunt-cli`, or `sudo npm install -g grunt-cli`.

## Use SCSS in your project
Open the Fajny CSS folder in your terminal and run the command `npm install`. This will install all the node modules needed to compile automatically the SCSS into CSS, and minify the JS.
Now run `grunt`.
All set, you can start to code!

### How to use Fajny CSS
#### Include the CSS
By default all the components are included in the minified CSS. You just have to add this in the `<head>` of your HTML file `<link href="path/to/folder/fajny.min.css" rel="stylesheet" type="text/css" />`.

### Customise Fajny CSS
#### Set your variables
You can change your fonts and colors directly in the variables. 

##### Fonts
For the fonts import the CSS from [Google Fonts](https://fonts.google.com/) in the file `scss/fonts/_fonts.scss`.

##### Colors
You can edit the file `scss/_colors.scss` and change the corresponding Hex values. You can find a nice color palette generator here: [https://coolors.co/](https://coolors.co/).

#### Choose your components
If you do not want to use some components and save some space you can just comment them in the file `scss/fajny.scss`

```
//@import  "components/buttons";
//@import  "components/avatar";
@import  "components/breadcrumbs";
@import  "components/badges";
@import  "components/cards";
@import  "components/image-container";
@import  "components/video"
@import  "components/parallax";
@import  "components/forms";
@import  "components/alerts";
```