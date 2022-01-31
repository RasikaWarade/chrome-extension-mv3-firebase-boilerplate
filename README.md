# Firebase SDK 9 + Google Sign In + Chrome Extension Manifest Version 3 + Webpack  
A basic foundation boilerplate for rich Chrome Extensions using Webpack to help you write modular and modern Javascript code, load CSS easily and automatic reload the browser on code changes.


# Chrome Extension Manifest Version 3 + Webpack  

## Boilerplate Code Brief

This Chrome Extension boilerplate uses Webpack to speed up the process of writing modular Javascript code, loading HTML and CSS easily, and automatically refresh the browser based on changes.

## Why?

As per the [Chrome Extension Timeline](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/), all extensions supporting Manifest Version v2 will sunset in Jan 2023, and for new extensions, it has now become a requirement to move to Manifest Version V3.

Google Chrome Extension Manifest v3's most significant security change is that [remotely hosted code](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code), such as Javascript, is now not allowed. If your extension codebase is not bundled and structured in a modular fashion, this can lead to problems. A beginner like me will definitely have a hard time building a setup like that without any guideline. 

When I built my Chrome Extension, I had limited experience with webpack, and I believe that new beginners may have the same issue, which is why I decided to compile this resource.

# Firebase

Add "identity"

# Structure

I am assuming you have taken look for introduction at the [Chrome Extension docs](https://developer.chrome.com/docs/extensions/mv3/getstarted/) and [Webpack docs](https://webpack.js.org/).

Also, if you are beginner, I am assuming you probably would have worked on the [Getting Started Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for extension. If not, I would give a quick look at it as well.

**This repo bundles the code explained in the [Getting Started Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) with Webpack.**

## Initial Setup

Make sure you have latest [Node.js](https://formulae.brew.sh/formula/node) installed.

My current version:
```
(base) ➜  chrome-extension-mv3-webpack-boilerplate git:(main) ✗ node --version
v16.13.1
(base) ➜  chrome-extension-mv3-webpack-boilerplate git:(main) ✗ npm --version
8.1.2

```


For the initial setup, below webpack bundles were installed:

`npm install --save-dev webpack webpack-cli html-webpack-plugin clean-webpack-plugin copy-webpack-plugin`

## Configuration

> `webpack.development.js`

For Development Purposes, you can configure this script and run the command `npm run build` to reflect changes.

> `webpack.production.js`

For production release, you can configure this script and run the command `npm run release`  to reflect changes.

> `webpack.common.js`

This script contains all the common bundler config common between development and production scripts above.

> `src`

All your extension's development code must be placed in src folder, including the extension manifest.

The boilerplate is already prepared to have a popup, a options page and a background page. You can easily customize this.

Includes:
- background.js
- content.js
- popup (js + html + css)
- options (js + html)

> `src/manifest.json`

This is the entry point for your extension.



# How to use it

1. Clone the repo
2. Run command `npm install` to install all node-modules / dependencies
4. Run command `npm run build`
5. This will build the `dist` folder
6. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked` extension
   4. Select the `dist` folder

Note: `gitignore` will help ignore the `node_modules` and `dist` folder to be pushed to the github

-----
[Blog](https://rasikawarade.github.io/think-rethink-reinforce/chrome-extension/webpack/2022/01/30/chrome-webpack.html) | [Rasika Warade](https://rasikawarade.github.io/)
