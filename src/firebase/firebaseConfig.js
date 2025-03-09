import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfVIbRs7bbUxOX_9w3hyLdt-8WrXhxUeQ",
  authDomain: "bananablast-d6ebe.firebaseapp.com",
  projectId: "bananablast-d6ebe",
  storageBucket: "bananablast-d6ebe.firebaseapp.com",
  messagingSenderId: "221763392514",
  appId: "1:221763392514:web:d9169004ffb6097c1f031b",
  measurementId: "G-P79D0WG6W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realtimeDB = getDatabase(app);

export { auth, db, realtimeDB };
