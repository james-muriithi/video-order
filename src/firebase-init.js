import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
// import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import 'firebase/functions'; // for cloud functions
import 'firebase/analytics'; // for analytics
import 'firebase/messaging'; // for messaging

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.VUE_APP_DEV_VARIABLES === 'true') {
  firebase.functions().useEmulator('localhost', 5001);
  firebase.firestore().settings({
    host: 'localhost:9090',
    ssl: false,
    merge: true,
  });
  const auth = firebase.auth();
  auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
  const storage = firebase.storage();
  storage.useEmulator('localhost', 9199);
}
