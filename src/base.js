import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC5bt68Y4QHq14Nfq4O9GvSR7zgviJ1YLU",
        authDomain: "catch-of-the-day-4f889.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-4f889.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp }; // this is a named export

export default base; // this is a default export