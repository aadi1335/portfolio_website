 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDwRSW_m7o9muspv1qU4oyxkuxu0X4P42E",
    authDomain: "portfolio-db-35b4c.firebaseapp.com",
    databaseURL: "https://portfolio-db-35b4c-default-rtdb.firebaseio.com",
    projectId: "portfolio-db-35b4c",
    storageBucket: "portfolio-db-35b4c.firebasestorage.app",
    messagingSenderId: "331519011339",
    appId: "1:331519011339:web:3a99a48be7e557497c750e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const fireDb = getDatabase(app);

  export {fireDb, ref, set, push, onValue};