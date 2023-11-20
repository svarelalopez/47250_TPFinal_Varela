import { initializeApp } from "firebase/app"; // inicia conexion con firebase
import {getFirestore} from "firebase/firestore"; // obtiene una instancia de firestore

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // AIzaSyAWbULBM48Dx5njnUoceHZQCF_8dgtkj9A
  authDomain: "baldo--de--boldo.firebaseapp.com",
  projectId: "baldo--de--boldo",
  storageBucket: "baldo--de--boldo.appspot.com",
  messagingSenderId: "505725557933",
  appId: "1:505725557933:web:efeed4e9c1ad14b381ba24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


