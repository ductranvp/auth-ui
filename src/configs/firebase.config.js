// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDxuQ-kzyVMIuELyVuvdfgyiH0TIop6s5M",
  authDomain: "auth-service-2022.firebaseapp.com",
  projectId: "auth-service-2022",
  storageBucket: "auth-service-2022.appspot.com",
  messagingSenderId: "93545107456",
  appId: "1:93545107456:web:a13c2faead53448b1808e5",
  measurementId: "G-VXJN25665B",
};

export function initFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line no-unused-vars
  const analytics = getAnalytics(app);
}
