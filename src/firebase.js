import firebase from "firebase";

const firebaseConfig = {};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
