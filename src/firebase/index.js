import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDS8wHGKx27QEaIAvtlcFV_csHFoOd9tj4',
  authDomain: 'gestantesxcoronavirus.firebaseapp.com',
  databaseURL: 'https://gestantesxcoronavirus.firebaseio.com',
  projectId: 'gestantesxcoronavirus',
  storageBucket: 'gestantesxcoronavirus.appspot.com',
  messagingSenderId: '238866103271',
  appId: '1:238866103271:web:12cb7c5ba0d6a3ae451b42',
  measurementId: 'G-W8QMWDP4ER'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
