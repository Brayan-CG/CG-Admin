import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"

const firebaseConfig = {

  apiKey: "AIzaSyDKOgdN2W5o2EN3k8U17HThz4-pgx6xbu0",
  authDomain: "cg-admin-85815.firebaseapp.com",
  projectId: "cg-admin-85815",
  storageBucket: "cg-admin-85815.appspot.com",
  messagingSenderId: "956364578905",
  appId: "1:956364578905:web:639ebc9a8f5e128eca9148"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
