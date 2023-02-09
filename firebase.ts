import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyANUEyCKTbK8Amn3JjEarn3J8W2an7PZp8",
  authDomain: "chatgpt-78d30.firebaseapp.com",
  projectId: "chatgpt-78d30",
  storageBucket: "chatgpt-78d30.appspot.com",
  messagingSenderId: "175991136639",
  appId: "1:175991136639:web:d529f5ae35cb07b4233a4a",
  measurementId: "G-6RPGHFPSZG"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db }