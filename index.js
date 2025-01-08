import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"; 
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAL6ZU9cRMKKd4IbTzqdjkyJar0zu1kP8",
  authDomain: "flutterfireuicodelabauth.firebaseapp.com",
  projectId: "flutterfireuicodelabauth",
  storageBucket: "flutterfireuicodelabauth.firebasestorage.app",
  messagingSenderId: "719359222053",
  appId: "1:719359222053:web:327ae56869f46ba5217acc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
async function editDB(db,){}

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
  const myChart = new Chart("myChart", {
    type: "line",
    data: {labels:["hi",1],datasets:[{data:[12,13]}]},
    options: {}
  });
  