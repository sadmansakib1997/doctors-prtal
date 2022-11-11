// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnJIY64cjUPgxUnJL2asUcDJkCV6_yz8",
  authDomain: "backend-database-milestone.firebaseapp.com",
  projectId: "backend-database-milestone",
  storageBucket: "backend-database-milestone.appspot.com",
  messagingSenderId: "343121071939",
  appId: "1:343121071939:web:cdc1f2909027cd7fa1a9f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
