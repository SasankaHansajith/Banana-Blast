// firebaseConfig.js (for Firebase v11.x - Namespaced SDK)

import { initializeApp } from 'firebase/app'; // Use named imports for Firebase services
import { getAuth } from 'firebase/auth';      // Import specific Firebase services
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfVIbRs7bbUxOX_9w3hyLdt-8WrXhxUeQ",
  authDomain: "bananablast-d6ebe.firebaseapp.com",
  projectId: "bananablast-d6ebe",
  storageBucket: "bananablast-d6ebe.firebasestorage.app",
  messagingSenderId: "221763392514",
  appId: "1:221763392514:web:d9169004ffb6097c1f031b",
  measurementId: "G-P79D0WG6W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Authentication service
const db = getFirestore(app); // Firestore service
const realtimeDB = getDatabase(app); // Realtime Database service

export { auth, db, realtimeDB };