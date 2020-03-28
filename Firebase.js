import firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAlWyLf4qzYAAumWm3WOTPrUEB3clP9NAA",
        authDomain: "dindle-8dfee.firebaseapp.com",
        databaseURL: "https://dindle-8dfee.firebaseio.com",
        projectId: "dindle-8dfee",
        storageBucket: "dindle-8dfee.appspot.com",
        messagingSenderId: "325846289606",
        appId: "1:325846289606:web:5f250dfbc699566a971bc7",
        measurementId: "G-R0B0N6PQFV"
    })
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();