import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9E02d-GesRICJnO42kT25N_QIx2lQP7o",
    authDomain: "applibrary-a71fd.firebaseapp.com",
    projectId: "applibrary-a71fd",
    storageBucket: "applibrary-a71fd.appspot.com",
    messagingSenderId: "1018755119152",
    appId: "1:1018755119152:web:b75cd7d394891f614a55f5"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database