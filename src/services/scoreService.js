import { db } from "../firebase/firebaseConfig"; // Correct the import path
import { doc, setDoc, getDoc } from "firebase/firestore";

// Save score function
export const saveScore = async (userId, username, score) => {
  try {
    // Get the user's score document
    const userScoreDoc = doc(db, "scores", userId);
    const docSnap = await getDoc(userScoreDoc);

    if (docSnap.exists()) {
      // If the document exists, update the score
      await setDoc(userScoreDoc, { username: username, score: score }, { merge: true });
    } else {
      // If no score document exists for the user, create a new one
      await setDoc(userScoreDoc, { username: username, score: score });
    }

    console.log("Score saved successfully");
  } catch (error) {
    console.error("Error saving score: ", error);
  }
};