# Firebase SDK 9 + Google Sign In + Chrome Extension Manifest Version 3 + Webpack  

## Boilerplate Code Brief

The Chrome Extension with MV3 version shows example of authentication of Firebase SDK9 with `Google Sign In` enable. This boilerplate uses Webpack to speed up the process of writing modular Javascript code, loading HTML and CSS easily, and automatic reload the browser based on changes.

## Why?

As per the [Chrome Extension Timeline](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/), all extensions supporting Manifest Version v2 will sunset in Jan 2023, and for new extensions, it has now become a requirement to move to Manifest Version V3.

Google Chrome Extension Manifest v3's most significant security change is that [remotely hosted code](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code), such as Javascript, is now not allowed. If your extension codebase is not bundled and structured in a modular fashion, this can lead to problems. A beginner like me will definitely have a hard time building a setup like that without any guideline. 

When I built my Chrome Extension, I had limited experience with webpack, and I believe that new beginners may have the same issue, which is why I decided to compile this resource. 

## Firebase

Including Firebase libraries is an example. 

There are lots of changes already from moving MV2 to MV3 version for chrome extension. At the same time, firebase latest version suggests using SDK9 which needs module bundler support. I could not find guideline and hit few issues , that I will list down below going over the documentation. As of today 31, Jan 2022, the documentation support for including firebase SDK9 in Chrome Extension is still confusing. 

Issues:
- As a beginner I would have preferred using their built in sign in `firebase-ui` library, [FirebaseUI  functionality](https://firebase.google.com/docs/auth/web/firebaseui). I can confirm this does not work at the moment, as this library does not support the optimizations of module bundling.
- I have tried and it does not work for `signInWithPopup` and `signInWithRedirect` functionalities for [Google Sign In](https://firebase.google.com/docs/auth/web/google-signin) due to the [limitations on the Chrome Extension MV3 side](https://firebase.google.com/docs/auth/web/google-signin#authenticate_with_firebase_in_a_chrome_extension).


With this repo, I have made it work for my use case to enable Google Sign In and ( you can extend the logic for other sign in methods) by combining the resources /code snippets and hopefully it will help someone, moving to Chrome Extension MV3 version this year.

Referrences:
- [Google Sign In](https://firebase.google.com/docs/auth/web/google-signin)


# Structure

I am assuming you have followed the steps to [add Firebase Authentication to your web application](https://firebase.google.com/docs/web/setup) and have access to [Firebase console](https://console.firebase.google.com/). You have 

I am assuming you have taken look for introduction at the [Chrome Extension docs](https://developer.chrome.com/docs/extensions/mv3/getstarted/) and [Webpack docs](https://webpack.js.org/).

Also, if you are beginner, I am assuming you probably would have worked on the [Getting Started Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for extension. If not, I would give a quick look at it as well.

**This repo bundles the code explained in the [Getting Started Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) with Webpack.**

## Initial Setup

Make sure you have latest [Node.js](https://formulae.brew.sh/formula/node) installed.

My current version:
```
(base) ➜  ✗ node --version
v16.13.1
(base) ➜  ✗ npm --version
8.1.2

```

For the initial setup, below webpack bundles were installed:

`npm install --save-dev webpack webpack-cli html-webpack-plugin clean-webpack-plugin copy-webpack-plugin`

For the Firebase setup, below webpack bundles were installed:

`npm install firebase firebaseui --save`

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

- This is the entry point for your extension.
- Added "identity" to permission to support authenticate operations.
- Fill the OAuth details in the manifest, which are custom to your project/app.
```
  "oauth2": {
    "client_id": "<fill-me>.apps.googleusercontent.com",
    "scopes": [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  },
  "key": "-----BEGIN PUBLIC KEY-----\n<fill-me>\n-----END PUBLIC KEY-----" 
```

> `src/popup/firebase_config.js`

This is the firebase config script, and you can referrence this in any other javascript by import statement.

`import { firebaseApp } from './firebase_config'`

**Fill the details for your config, which you get after registering the Firebase app**
```
// config after registering firebase App 
const config = {
    apiKey: "<fill-me>",
    authDomain: "<fill-me>",
    projectId: "<fill-me>",
    storageBucket: "<fill-me>",
    messagingSenderId: "<fill-me>",
    appId: "<fill-me>",
    measurementId: "<fill-me>"
};
```   

To provide Google Sign In, authorize Firebase (GoogleAuthProvider) with the OAuth Access Token, which will builds Firebase credential with the Google ID token.

Code Snippet:
```
            const credential = GoogleAuthProvider.credential(null, token);
            signInWithCredential(auth, credential).then((result) => {
                console.log("Success!!!")
            }).catch((error) => {
```
      
   
# How to use it

1. Clone the repo
2. Fill all the details for Firebase App (Secrets) by replacing `<fill-me>` strings
3. Find these <fill-me> details as explained above
4. Run command `npm install` to install all node-modules / dependencies
5. Run command `npm run build`
6. This will build the `dist` folder
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked` extension
   4. Select the `dist` folder

Note: `gitignore` will help ignore the `node_modules` and `dist` folder to be pushed to the github

-----
[Blog](https://rasikawarade.github.io/think-rethink-reinforce/) | [Rasika Warade](https://rasikawarade.github.io/)
