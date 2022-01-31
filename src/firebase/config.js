import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDypATaXAsQRMUl8QiuWjntPQVqdN1r_8o",
  authDomain: "management-grid.firebaseapp.com",
  projectId: "management-grid",
  storageBucket: "management-grid.appspot.com",
  messagingSenderId: "948120579980",
  appId: "1:948120579980:web:f0dc7926f378a47bc1f0a9",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
