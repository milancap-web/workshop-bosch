import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase config - budou přidány vaše údaje
const firebaseConfig = {
  apiKey: "AIzaSyDcX7qzN5mK9pL2jJ0oI3uY8vW5xZ2aB3c",
  authDomain: "workshop-bosch.firebaseapp.com",
  projectId: "workshop-bosch",
  storageBucket: "workshop-bosch.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
