// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.EXPO_PUBLIC_APP_ID,
  // measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
  apiKey: 'AIzaSyDweuG7KWxRa4VQ81YRQj5iNk7hTDnT94c',
  authDomain: 'practice-firebase-projec-e3f5a.firebaseapp.com',
  projectId: 'practice-firebase-projec-e3f5a',
  storageBucket: 'practice-firebase-projec-e3f5a.appspot.com',
  messagingSenderId: '904971601968',
  appId: '1:904971601968:web:725234f434e055fbc5c5f5',
  measurementId: 'G-RJR1KEWLND',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
