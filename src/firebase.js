import firebase from "firebase";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbjtqBvM6aHTkuZuA1YsSDnnYxfctyLLg",
  authDomain: "expensetrackerapp-ca860.firebaseapp.com",
  projectId: "expensetrackerapp-ca860",
  storageBucket: "expensetrackerapp-ca860.appspot.com",
  messagingSenderId: "1054287882577",
  appId: "1:1054287882577:web:7f2a60ce597054fbba4b70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;