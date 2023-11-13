import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTwfXIMfpJwEKzi59b1mTKhChY1bP96uE",
  authDomain: "my-app-ad7aa.firebaseapp.com",
  projectId: "my-app-ad7aa",
  storageBucket: "my-app-ad7aa.appspot.com",
  messagingSenderId: "318216716080",
  appId: "1:318216716080:web:4f167badf34e48f9dad2f5",
  measurementId: "G-PRFXWE15CF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
