import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCgBhC04DTU2x64qFEMukNPE8QnQaIf_Hg",
    authDomain: "react-project-c95c3.firebaseapp.com",
    projectId: "react-project-c95c3",
    storageBucket: "react-project-c95c3.appspot.com",
    messagingSenderId: "819114567148",
    appId: "1:819114567148:web:87ec63a1f3ec4e18d30cc9",
    measurementId: "G-FEQDT1312P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  
export { auth, firebaseApp }
export default db