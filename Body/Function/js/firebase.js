// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA10C6b-o-31RxHjz-HwzCMkvvSzbFUlmc",
    authDomain: "cg-pelis-002.firebaseapp.com",
    projectId: "cg-pelis-002",
    storageBucket: "cg-pelis-002.appspot.com",
    messagingSenderId: "723634576840",
    appId: "1:723634576840:web:8eac328c2e5b6bd6b3b4fd",
    measurementId: "G-BV3YMP5K2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, content) =>
  addDoc(collection(db, "posts"), { title, content });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "posts"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "posts", id));

export const getTask = (id) => getDoc(doc(db, "posts", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "posts", id), newFields);

export const getTasks = () => getDocs(collection(db, "posts"));
