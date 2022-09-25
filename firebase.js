// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/messaging";
// import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPp2WqTfRCquNhmUKu6zr9S_xapBrsDFc",
  authDomain: "tracker-42431.firebaseapp.com",
  projectId: "tracker-42431",
  storageBucket: "tracker-42431.appspot.com",
  messagingSenderId: "580365141075",
  appId: "1:580365141075:web:dd3f6fe20f0fad9067b2a6",
  measurementId: "G-T3KYNRVNEY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); 
/*
let app;
if (firebase.getApps.length === 0){
    app = firebase.initializeApp(firebaseConfig); 
} else {
    app = firebase.app()
}
*/

const auth = firebase.auth();
// const messaging = firebase.messaging();
// const firestore = firebase.firestore();

auth.onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    console.log("User is signed in");
    console.log(user);
  } else {
    console.log("User is signed out");
  }
})
// const analytics = getAnalytics(app);

export {auth};