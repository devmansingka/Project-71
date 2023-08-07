import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDXIGJfaaW4baHNH5695LDegY1UHxFsznc",
  authDomain: "project-71-6b9ce.firebaseapp.com",
  projectId: "project-71-6b9ce",
  storageBucket: "project-71-6b9ce.appspot.com",
  messagingSenderId: "279819256288",
  appId: "1:279819256288:web:aec535876925e2d319ab85"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
