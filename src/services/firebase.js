import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
    storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_AUTH_APP_ID
  })
} else {
  firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { firebase, firestore, auth }
