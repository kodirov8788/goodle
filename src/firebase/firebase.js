import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAB4xg4NDiQVAvAanP0x-oWeqeGQ8sqQTM",
  authDomain: "dunyo-shop.firebaseapp.com",
  databaseURL: "https://dunyo-shop-default-rtdb.firebaseio.com",
  projectId: "dunyo-shop",
  storageBucket: "dunyo-shop.appspot.com",
  messagingSenderId: "695483646562",
  appId: "1:695483646562:web:f3f472d357515758aa473b",
  measurementId: "G-K38H5CW49V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;
