import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYGqhIWC_dpKSThnHETNFQZmHxJrKkbq0",
    authDomain: "greydive-challenge-react.firebaseapp.com",
    projectId: "greydive-challenge-react",
    storageBucket: "greydive-challenge-react.appspot.com",
    messagingSenderId: "570783544123",
    appId: "1:570783544123:web:373596f6ca8b92e738bd1e"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()