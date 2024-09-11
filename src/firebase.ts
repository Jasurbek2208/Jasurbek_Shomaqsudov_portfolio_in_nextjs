import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process?.env?.NEXT_PUBLIC_FIREBASE_KEY || 'AIzaSyAbPIM0ogug2rcPDAVTe4erZp7-qwFq95w',
  authDomain: process?.env?.NEXT_PUBLIC_FIREBASE_DOMAIN || 'shomaqsudovuzdb.firebaseapp.com',
  projectId: process?.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'shomaqsudovuzdb',
  storageBucket: process?.env?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'shomaqsudovuzdb.appspot.com',
  messagingSenderId: process?.env?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '50548255164',
  appId: process?.env?.NEXT_PUBLIC_FIREBASE_APP_ID || '1:50548255164:web:2cd49bf1dc3e02bf8463b9',
  measurementId: process?.env?.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-R8ELWZ159N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)