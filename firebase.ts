import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDqbQI6SBmQx4jp6tX98jqdnUs5-QZjdZ8",
        authDomain: "dropbox-a79f6.firebaseapp.com",
        projectId: "dropbox-a79f6",
        storageBucket: "dropbox-a79f6.appspot.com",
        messagingSenderId: "890969825750",
        appId: "1:890969825750:web:af2f1e16f09489a1ff0477"
    };

    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage(app);

    export { db, storage };