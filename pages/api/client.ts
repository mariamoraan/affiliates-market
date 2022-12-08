import { initializeApp } from "firebase/app";
import { collection, getFirestore, orderBy, query, where } from "firebase/firestore";


const firebase = initializeApp( {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
 });

const db = getFirestore();
const productsRef = collection(db, 'products')
const QUERY_PRODUCTS = query(productsRef)
const QUERY_PRODUCTS_POPULAR = query(productsRef, orderBy("savedTimes", "asc"))
const QUERY_PRODUCTS_CLOTHES = query(productsRef, where("category", "==", "CLOTHES"))

export { db, productsRef, QUERY_PRODUCTS, QUERY_PRODUCTS_POPULAR, QUERY_PRODUCTS_CLOTHES };

