
const {initializeApp} = require('firebase/app');
const {getAnalytics} = require('firebase/analytics');
const {getFirestore} = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKoRvjkII8vlB_gDnJwAVLI9gPspckpig",
    authDomain: "mediassist-fa1d7.firebaseapp.com",
    projectId: "mediassist-fa1d7",
    storageBucket: "mediassist-fa1d7.appspot.com",
    messagingSenderId: "343734831450",
    appId: "1:343734831450:web:73d62ccd626fe8ba07cb63",
    measurementId: "G-7P8KN37P01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);