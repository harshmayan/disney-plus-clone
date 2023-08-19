import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"

  const firebaseConfig = {
    apiKey: "AIzaSyB6gdaCRK9FXHY8AEPbzmPQ6hUJzVJZUf4",
    authDomain: "disneyplus-clone-15513.firebaseapp.com",
    projectId: "disneyplus-clone-15513",
    storageBucket: "disneyplus-clone-15513.appspot.com",
    messagingSenderId: "344503007431",
    appId: "1:344503007431:web:f1cf202013096b1aa2a6e2",
    measurementId: "G-VGKV511V9Q"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export  {auth, provider, storage };
  export default db;

  //for getting old version of npm package write in terminal --legacy-peer-deps