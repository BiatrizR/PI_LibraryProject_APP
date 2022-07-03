import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyB16SdSkt8TB5uZyKItfV6SLLm3QpNkIkY",
    authDomain: "applibrarypi.firebaseapp.com",
    projectId: "applibrarypi",
    storageBucket: "applibrarypi.appspot.com",
    messagingSenderId: "384208172659",
    appId: "1:384208172659:web:3f18441b8826c102b5dc06"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database