import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXCKO5ggIN4r0EVfzoJHnAstbMusgGuR0",
    authDomain: "whatsapp-clone-7f8ad.firebaseapp.com",
    projectId: "whatsapp-clone-7f8ad",
    storageBucket: "whatsapp-clone-7f8ad.appspot.com",
    messagingSenderId: "675736414037",
    appId: "1:675736414037:web:fdb318c77e2a2d1f5fb1dc",
    measurementId: "G-TXFD3RG3X1"
  };


// const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;