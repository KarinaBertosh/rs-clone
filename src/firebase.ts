// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZtHudTmhytMtsbKcLsiks7JPmaPZ39nU',
  authDomain: 'tail-and-paws.firebaseapp.com',
  databaseURL: 'https://tail-and-paws-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'tail-and-paws',
  storageBucket: 'tail-and-paws.appspot.com',
  messagingSenderId: '997731687908',
  appId: '1:997731687908:web:8dc44d1c08660e28c7fbf1',
  measurementId: 'G-FLBV9MZ7G5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const dbChat = getFirestore();
