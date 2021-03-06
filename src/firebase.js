import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYBU05SFRcap4a6trtxEK0GbQx5T4tB_M",
  authDomain: "react-slack-54f6d.firebaseapp.com",
  projectId: "react-slack-54f6d",
  storageBucket: "react-slack-54f6d.appspot.com",
  messagingSenderId: "284286039870",
  appId: "1:284286039870:web:54d5c659ecfc7f0ab41e6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};