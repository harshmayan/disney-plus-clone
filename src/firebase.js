import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"


  const api_key =process.env.REACT_APP_FIREBASE_API_KEY
  const messageId_key = process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID
  const app_id = process.env.REACT_APP_FIREBASE_API_ID
  const measurement_id = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  
  const firebaseConfig = {
    apiKey: api_key ,
    authDomain: "disneyplus-clone-15513.firebaseapp.com",
    projectId: "disneyplus-clone-15513",
    storageBucket: "disneyplus-clone-15513.appspot.com",
    messagingSenderId: messageId_key ,
    appId: app_id,
    measurementId:  measurement_id
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export  {auth, provider, storage };
  export default db;

  //for getting old version of npm package write in terminal --legacy-peer-deps