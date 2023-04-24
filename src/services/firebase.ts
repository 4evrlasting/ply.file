import { initializeApp } from "firebase/app";
import { collection, getFirestore, query } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBNsMEVQsp2ZbHsSleOMGpT8XdhgoA1u9I",
  authDomain: "mixx-v3.firebaseapp.com",
  projectId: "mixx-v3",
  storageBucket: "mixx-v3.appspot.com",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);
export const collectionMusic = query(collection(db, "music"));
export const storage = getStorage(firebaseApp);
