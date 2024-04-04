import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBfmUaiI9svYa-m1OKLAnMhuz7U0ImYSbw",
	authDomain: "react-musique.firebaseapp.com",
	projectId: "react-musique",
	storageBucket: "react-musique.appspot.com",
	messagingSenderId: "10520350540",
	appId: "1:10520350540:web:57d57508322706b0d8c9e9",
	measurementId: "G-79CGXD5MTZ"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };