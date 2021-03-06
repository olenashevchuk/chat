import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDdmp7-QhEwWc1s-tsqJOOEQM4sfgp3ylA',
    authDomain: 'chat-app-development.firebaseapp.com',
    projectId: 'chat-app-development',
    storageBucket: 'chat-app-development.appspot.com',
    messagingSenderId: '716112318824',
    appId: '1:716112318824:web:db694a9a6c4a0a0dde46dd',
    measurementId: 'G-N5NBNM327G'
  })
} else {
  firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { firebase, firestore, auth }
