import firebase from "firebase/app";
import "firebase/storage";

const serve = process.env.APIKEYFIREBASE;

const firebaseConfig = {
  apiKey: serve,
  authDomain: "netflix-e1d79.firebaseapp.com",
  projectId: "netflix-e1d79",
  storageBucket: "netflix-e1d79.appspot.com",
  messagingSenderId: "119558492631",
  appId: "1:119558492631:web:c07c7f9763e687f24fbb92",
  measurementId: "G-5633WNT9YB"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage }; // Exporting as named export instead of default export
