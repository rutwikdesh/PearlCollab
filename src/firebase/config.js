import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAD-k1w1vi3l0ywGotie6xgiyS2Geob6dk",
  authDomain: "pearlcollab-2a46d.firebaseapp.com",
  projectId: "pearlcollab-2a46d",
  storageBucket: "pearlcollab-2a46d.appspot.com",
  messagingSenderId: "176682566378",
  appId: "1:176682566378:web:979365ab7589220f604d93"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }