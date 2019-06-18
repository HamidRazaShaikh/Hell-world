import firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyC5LRN8089hTqNSnF-uM71lPCV7pNlzRxM",
    authDomain: "todo-9ba3a.firebaseapp.com",
    databaseURL: "https://todo-9ba3a.firebaseio.com",
    projectId: "todo-9ba3a",
    storageBucket: "todo-9ba3a.appspot.com",
    messagingSenderId: "536351727507",
    appId: "1:536351727507:web:cb456099c406b482"
};
firebase.initializeApp(firebaseConfig);

export default firebase;