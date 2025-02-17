// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Google Login Function
const provider = new GoogleAuthProvider();
window.loginWithGoogle = function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User logged in:", result.user);
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
}

export { auth, db, analytics };
