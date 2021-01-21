// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUz5GBwqgNPmK77wGaN5AKMjNML4T6vvM",
    authDomain: "clone-3a14a.firebaseapp.com",
    projectId: "clone-3a14a",
    storageBucket: "clone-3a14a.appspot.com",
    messagingSenderId: "581240356727",
    appId: "1:581240356727:web:bbeec95c3a66150f6deb72",
    measurementId: "G-GZQ0MXJWN2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };