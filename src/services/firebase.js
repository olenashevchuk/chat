import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD5ylhZUeC298HiGu0eCcvb_st3JW2IgGk',
    authDomain: 'chat-6f088.firebaseapp.com',
    projectId: 'chat-6f088',
    storageBucket: 'chat-6f088.appspot.com',
    messagingSenderId: '242422434784',
    appId: '1:242422434784:web:3511d5328b94d13e37f985'
  })
} else {
  firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { firebase, firestore, auth }
