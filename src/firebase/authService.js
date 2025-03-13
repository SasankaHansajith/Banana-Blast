import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc, getDoc } from "firebase/firestore";

// Function to handle user signup
export const signupUser = async (email, username, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store the username and email in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username.substring(0, 9), // Limit username to 9 characters
      email: email
    });

    return { success: true, user: user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to handle user login with username
export const loginUser = async (username, password) => {
  try {
    // Query the Firestore database to find the user by username
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("User not found");
    }

    // Get the user's email from the query result
    const userDoc = querySnapshot.docs[0];
    const userEmail = userDoc.data().email;

    // Use the email to sign in with password
    const userCredential = await signInWithEmailAndPassword(auth, userEmail, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to handle user logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to handle Facebook login
export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if the user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // If the user does not exist, create a new document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName.substring(0, 9), // Limit username to 9 characters
        email: user.email
      });
    }

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to handle Google login
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if the user exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      // If the user does not exist, create a new document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName.substring(0, 9), // Limit username to 9 characters
        email: user.email
      });
    }

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};