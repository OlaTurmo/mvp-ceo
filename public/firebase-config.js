// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllJIAMW6IOM16X7XL-7TeaeelTus4RqY",
  authDomain: "mvp-ceo.firebaseapp.com",
  projectId: "mvp-ceo",
  storageBucket: "mvp-ceo.appspot.com", // Corrected storage bucket
  messagingSenderId: "607537425629",
  appId: "1:607537425629:web:d7893cd1573afb717dff34",
  measurementId: "G-EL2YZVQTTP"
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
    .then(async (result) => {
      console.log("User logged in:", result.user);

      // Store user data in Firestore
      const userRef = doc(db, "users", result.user.uid);
      await setDoc(userRef, {
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid
      }, { merge: true });

      window.location.href = "/dashboard"; // Redirect after login
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
};

export { auth, db, analytics };
