// Shared Firebase setup — imported by every page as an ES module.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNsfWW4wGlSHOs4gvEV4lX1JQ9HC6yIwU",
  authDomain: "coachly-app-47a36.firebaseapp.com",
  projectId: "coachly-app-47a36",
  storageBucket: "coachly-app-47a36.firebasestorage.app",
  messagingSenderId: "999727942241",
  appId: "1:999727942241:web:a87c449101a9ac9418f820"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, db,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, addDoc, query, where, orderBy, getDocs, serverTimestamp
};
