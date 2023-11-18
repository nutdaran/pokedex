// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD-jKJVG-sVT8GsQs14K0Bhaf_8rHvrlc",
  authDomain: "iccs340-3fd43.firebaseapp.com",
  projectId: "iccs340-3fd43",
  storageBucket: "iccs340-3fd43.appspot.com",
  messagingSenderId: "185876668624",
  appId: "1:185876668624:web:dcebb940dee1313a16bed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };