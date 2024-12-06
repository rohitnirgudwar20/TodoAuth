import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3eOhgxriE92QI4IVyJs3XIwATZAGQUMY",
  authDomain: "todoapp-b5d56.firebaseapp.com",
  projectId: "todoapp-b5d56",
  storageBucket: "todoapp-b5d56.firebasestorage.app",
  messagingSenderId: "288303428576",
  appId: "1:288303428576:web:c410754648f1388a02f185",
  measurementId: "G-S57QFZJWXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 export const  auth = getAuth(app)
