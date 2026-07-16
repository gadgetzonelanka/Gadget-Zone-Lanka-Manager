// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAOcXYCavbaizMfBTDz8mvKfpAIrzHOQkA",
  authDomain: "gadget-zone-lanka-manager.firebaseapp.com",
  projectId: "gadget-zone-lanka-manager",
  storageBucket: "gadget-zone-lanka-manager.firebasestorage.app",
  messagingSenderId: "826535445079",
  appId: "1:826535445079:web:9597c876792acb9cec5912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);

// Export
export { db, auth };
