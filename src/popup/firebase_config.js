import { initializeApp } from 'firebase/app';

// TODO Fill Me! 
// Find my details from Firebase Console

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

// This creates firebaseApp instance
// version: SDK 9
const firebaseApp = initializeApp(config)

export{
    firebaseApp
}