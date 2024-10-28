import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBMJHTwehmlyljcdq1QyrgF04OyUDQ3ggk",
    authDomain: "react-contact-form-a156b.firebaseapp.com",
    projectId: "react-contact-form-a156b",
    storageBucket: "react-contact-form-a156b.appspot.com",
    messagingSenderId: "1060185578491",
    appId: "1:1060185578491:web:4567d3c3db41b2f32f095e",
    measurementId: "G-F3WERE1NZ8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
export default database;
