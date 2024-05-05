import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: "dropbox-auth-c2b3c",
    storageBucket: "dropbox-auth-c2b3c.appspot.com",
    messagingSenderId: "401555043614",
    appId: "1:401555043614:web:bb450ec8ae81ee58ce050f",
    measurementId: "G-GEXSVWQ0MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();