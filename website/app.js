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
var submitform = document.querySelector("#submitform1");
var firstname = document.querySelector("#firstname1"); // id firstname
var lastname = document.querySelector("#lastname1"); // id lastname
var totin = document.querySelector("#totin1"); // id totin
var totex = document.querySelector("#totex1"); // id totex
var housing = document.querySelector("#housing1"); // id housing
var utilities = document.querySelector("#utilities1"); // id utilities
var transportation = document.querySelector("#transportation1"); // id transportation
var food = document.querySelector("#food1"); // id food
var debtrepayment = document.querySelector("#debtrepayment1"); // id debtrepayment
var insurance = document.querySelector("#insurance1"); // id insurance
var health = document.querySelector("#health1"); // id health
var entertainment = document.querySelector("#entertainment1"); // id entertainment
var education = document.querySelector("#education1"); // id education
var investments = document.querySelector("#investments1"); // id investments
var familyexpenses = document.querySelector("#familyexpenses1"); // id familyexpenses
var other = document.querySelector("#other1"); // id other
var cage = document.querySelector("#cage1"); // id cage
var rage = document.querySelector("#rage1"); // id rage

if (submit) {
    function submitData() {
        set(ref(db, "Users/" + usernamefield.value), {
            User: usernamefield.value,
            Pass: passwordfield.value
        })
        .then(()=>{
            alert("Data added successfully.")
        })
        .catch((error)=>{
            //alert(error)
        })
    
    }

    submit.addEventListener('click', submitData);
}



//const submitform = document.getElementById('submitform');


if (submitform) {
    function submitFormData() {
        set(ref(db, "FormData/"), {
            FirstName: firstname.value,
            LastName: lastname.value,
            TotalMonthlyIncome: totin.value,
            TotalMonthlyExpenses: totex.value,
            Housing: housing.value,
            Utilities: utilities.value,
            Transportation: transportation.value,
            Food: food.value,
            Debtrepayment: debtrepayment.value,
            Insurance: insurance.value,
            Health: health.value,
            Entertainment: entertainment.value,
            Education: education.value,
            Investments: investments.value,
            FamilyExpenses: familyexpenses.value,
            Other: other.value,
            CurrentAge: cage.value,
            DesiredRetirementAge: rage.value
        })
        .then(()=>{
            alert("Data added successfully")
        })
        .catch((error)=>{
            alert("Error")
        })
    }
    submitform.addEventListener('click', submitFormData);
}


// if (submitform) {
//     function loadspin(e) {
//         e.preventDefault(); // Prevent the default form submission
//         submitform.classList.add('loading');
//         // Simulate a delay for form submission
//         setTimeout(() => {
//             submitform.classList.remove('loading');
//             alert('Form Submitted'); // Simulate form submission response
//         }, 3000); // 3 seconds delay
//     }
    
//     submitform.addEventListener('click', loadspin);
// }

