import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGINSENDERID,
  appId: process.env.REACT_APP_APPID,
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const { FieldValue } = firebase.firestore
export const storage = firebase.storage()
