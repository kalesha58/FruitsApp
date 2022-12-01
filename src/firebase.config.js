import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCu8EG7NPAL7CcD1FFtb39nEqC8IIdRjPM",
    authDomain: "my-restarent.firebaseapp.com",
    databaseURL: "https://my-restarent-default-rtdb.firebaseio.com",
    projectId: "my-restarent",
    storageBucket: "my-restarent.appspot.com",
    messagingSenderId: "862446561871",
    appId: "1:862446561871:web:c4d27a57e248cd324b583a",
    measurementId: "G-8KLWK3ZXTT"
  };
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };