import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import {toast} from "react-toastify"

const firebaseConfig = {
  apiKey: "AIzaSyDgAL9eRhXoP0bUeTXCe-yHtSfHtDt2jwg",
  authDomain: "netflix-clone-fd9b3.firebaseapp.com",
  projectId: "netflix-clone-fd9b3",
  storageBucket: "netflix-clone-fd9b3.appspot.com",
  messagingSenderId: "736788437433",
  appId: "1:736788437433:web:18ec85a489c5c82b017e68",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
       toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
      toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export { auth, db, login, signup, logout };
