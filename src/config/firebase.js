// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCB7H8QZfv3XIMYPgxy2yLF8PDhsqjVez4",
  authDomain: "login-logout-react.firebaseapp.com",
  projectId: "login-logout-react",
  storageBucket: "login-logout-react.appspot.com",
  messagingSenderId: "575276641386",
  appId: "1:575276641386:web:22e58ff141120686456e13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
