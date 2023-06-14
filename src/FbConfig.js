import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKNtAXmki5KNmhzPsAw9oDGC5AvbjvC2E",
  authDomain: "sms-app-d013f.firebaseapp.com",
  databaseURL: "https://sms-app-d013f-default-rtdb.firebaseio.com",
  projectId: "sms-app-d013f",
  storageBucket: "sms-app-d013f.appspot.com",
  messagingSenderId: "705154741681",
  appId: "1:705154741681:web:3299843398b7ad24773990"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;