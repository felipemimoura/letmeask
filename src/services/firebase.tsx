import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBfA6FFOyMC1P9zvTq5xT604vqaydglNYc",
  authDomain: "letmeask-7c1ca.firebaseapp.com",
  databaseURL: "https://letmeask-7c1ca-default-rtdb.firebaseio.com",
  projectId: "letmeask-7c1ca",
  storageBucket: "letmeask-7c1ca.appspot.com",
  messagingSenderId: "895000868632",
  appId: "1:895000868632:web:b6b3ee1bc789c17997906d"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()