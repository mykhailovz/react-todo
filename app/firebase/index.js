import firebase from 'firebase';

try {
     // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAcINg8dQGlqAC9onH4EHiLXLpIa4hARBw",
        authDomain: "my-todo-app-bcc4f.firebaseapp.com",
        databaseURL: "https://my-todo-app-bcc4f.firebaseio.com",
        projectId: "my-todo-app-bcc4f",
        storageBucket: "my-todo-app-bcc4f.appspot.com",
        messagingSenderId: "472220363284"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;