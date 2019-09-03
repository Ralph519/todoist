import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAYuIw6sFV8tVnVmM64dAW7KdbYBK-Kbws",
    authDomain: "todoist-d1a30.firebaseapp.com",
    databaseURL: "https://todoist-d1a30.firebaseio.com",
    projectId: "todoist-d1a30",
    storageBucket: "todoist-d1a30.appspot.com",
    messagingSenderId: "626607112448",
    appId: "1:626607112448:web:43bb4d257c223682"
})

export { firebaseConfig as firebase} 