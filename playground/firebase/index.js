import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    },
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});
