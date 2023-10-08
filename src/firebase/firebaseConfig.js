import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_AVMjUqMrYtV7fx-9uWEMye4bwTLl7zY",
  authDomain: "eu-agendo.firebaseapp.com",
  projectId: "eu-agendo",
  storageBucket: "eu-agendo.appspot.com",
  messagingSenderId: "789189435348",
  appId: "1:789189435348:web:770b3e12bc3f7290330041"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
