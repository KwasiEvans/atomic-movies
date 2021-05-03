import firebase from 'firebase';
 const firebaseConfig = {
    apiKey: "AIzaSyCq0eGFl6dsWumIafCoA4R3-oezkBrFjis",
    authDomain: "atomic-movies.firebaseapp.com",
    projectId: "atomic-movies",
    storageBucket: "atomic-movies.appspot.com",
    messagingSenderId: "504224095198",
    appId: "1:504224095198:web:be106c0961e9d6123f1b4f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.default.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;