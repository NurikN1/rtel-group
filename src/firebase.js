// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwZx8h8g4l-6l-Ns3eR1rs1Mtvi7N_VUM',
  authDomain: 'rtel-group.firebaseapp.com',
  databaseURL: 'https://rtel-group-default-rtdb.firebaseio.com',
  projectId: 'rtel-group',
  storageBucket: 'rtel-group.appspot.com',
  messagingSenderId: '390418901444',
  appId: '1:390418901444:web:49a921cc93d54a1a611c91',
  measurementId: 'G-0Q8YS8VXKS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
