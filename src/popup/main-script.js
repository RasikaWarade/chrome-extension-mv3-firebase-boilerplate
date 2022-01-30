import { firebaseApp } from './firebase_config'
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
// Auth instance for the current firebaseApp
const auth = getAuth(firebaseApp);

console.log("popup main!")

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
        console.log("current")
        console.log(user)
    } else {
        console.log('No user');
    }
});

document.querySelector('#sign_out').addEventListener('click', () => {
    auth.signOut();
    window.location.replace('./popup.html');
});

// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}