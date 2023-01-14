import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAJ0F0y3i8A-HXNThZiH02rqGMeU3_M3Z0",
  authDomain: "pearlcollab-4f869.firebaseapp.com",
  projectId: "pearlcollab-4f869",
  storageBucket: "pearlcollab-4f869.appspot.com",
  messagingSenderId: "663346871486",
  appId: "1:663346871486:web:b3ebb2dac02f755444f2ef"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }