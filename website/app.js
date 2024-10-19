// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8uCNPhlw3rkNdkxqzxlP0KQeE5AOfDs",
  authDomain: "sharppythons.firebaseapp.com",
  databaseURL: "https://sharppythons-default-rtdb.firebaseio.com",
  projectId: "sharppythons",
  storageBucket: "sharppythons.appspot.com",
  messagingSenderId: "1045020208572",
  appId: "1:1045020208572:web:2f304b970b8ff78edc0fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const db = getDatabase(app);
var usernamefield = document.querySelector("#usernamefield1");
var passwordfield = document.querySelector("#passwordfield1");
var submit = document.querySelector("#submit1");

function submitData() {
    set(ref(db, "Users/" + usernamefield.value), {
        User: usernamefield.value,
        Pass: passwordfield.value
    })
    .then(()=>{
        alert("Data added successfully.")
    })
    .catch((error)=>{
        alert(error)
    })

}

submit.addEventListener('click', submitData);
