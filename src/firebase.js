// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbgl4nSOXR_XhKVrhyFO9JyPoF6jhfE3E",
    authDomain: "discord-clone-b6b1a.firebaseapp.com",
    databaseURL: "https://discord-clone-b6b1a.firebaseio.com",
    projectId: "discord-clone-b6b1a",
    storageBucket: "discord-clone-b6b1a.appspot.com",
    messagingSenderId: "20366054689",
    appId: "1:20366054689:web:9bbf367e25c8c90623da60",
    measurementId: "G-26Z22T55ZK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
  