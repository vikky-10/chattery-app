import firebase from "firebase";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyD_at3BrDqFWs7ZWsIx4ToyLbtgtP4Qtdw",
  authDomain: "slack-bfc4c.firebaseapp.com",
  projectId: "slack-bfc4c",
  storageBucket: "slack-bfc4c.appspot.com",
  messagingSenderId: "906632717925",
  appId: "1:906632717925:web:6f553a3dd0851d8f4d088c",
  measurementId: "G-71VX2RN5ZG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();
export { auth, Provider };
export default db;

