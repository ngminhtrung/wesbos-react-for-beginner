import Rebase from 're-base';
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAOpKrTOtB7gjF0UPeE8GJbR_pQNHsob_k",
    authDomain: "catch-of-the-day-travis-nguyen.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-travis-nguyen.firebaseio.com",
    storageBucket: "catch-of-the-day-travis-nguyen.appspot.com",
    messagingSenderId: "1054632482826"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;