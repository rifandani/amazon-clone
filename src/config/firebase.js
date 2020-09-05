import firebase, { initializeApp } from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDy94kE9YtSDleqIZJkc3Ub142fkG-bEnI',
  authDomain: 'social-media-app-functions.firebaseapp.com',
  databaseURL: 'https://social-media-app-functions.firebaseio.com',
  projectId: 'social-media-app-functions',
  storageBucket: 'social-media-app-functions.appspot.com',
  messagingSenderId: '161972249908',
  appId: '1:161972249908:web:b3a90d1bd31682c066f161',
  measurementId: 'G-LFW9BVFTDQ',
};

initializeApp(firebaseConfig);

// export const storage = firebase.storage();
// export const db = firebase.firestore();
export const auth = firebase.auth();
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
