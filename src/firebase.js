import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBMJHTwehmlyljcdq1QyrgF04OyUDQ3ggk",
  authDomain: "react-contact-form-a156b.firebaseapp.com",
  projectId: "react-contact-form-a156b",
  storageBucket: "react-contact-form-a156b.appspot.com",
  messagingSenderId: "1060185578491",
  appId: "1:1060185578491:web:72ed7eb663c9b3c82f095e",
  measurementId: "G-11NWMB1BC4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
export default database;
