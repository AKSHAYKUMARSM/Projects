// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdw8YjQC3YqYzndCfNsSQRX1Q3l_13-GE",
  authDomain: "talk-fa270.firebaseapp.com",
  projectId: "talk-fa270",
  storageBucket: "talk-fa270.firebasestorage.app",
  messagingSenderId: "620698124687",
  appId: "1:620698124687:web:e46f1790ded312578f0bfa",
  measurementId: "G-8J31RGS6SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function login(){
  const name=document.getElementById("name").value;
  const password=document.getElementById("password").value;
  const uname="AKS";
  const upass="1234";
  let error_msg=document.querySelector("#errorMessage");
    if(!error_msg){
      error_msg=document.createElement("p");
      error_msg.id="errorMessage";
      document.querySelector("form").appendChild(error_msg);
    }
  if(name=="" || password==""){
    error_msg.innerText="Please enter username and password";
    error_msg.style.color="red";
    return;
  }
  if(name==uname && password==upass){
    error_msg.innerText="Login successful";
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("role","Admin");
    window.location="/src/main/dashboard.html";}
  else{  
    error_msg.innerText="Invalid username or password";
    error_msg.style.color="red";
  }
  
}
document.querySelector("#loginButton").addEventListener("click", login);

const form = document.querySelector("form");
const loginbutton =document.querySelector("#loginButton");

loginbutton.addEventListener("mouseover", ()=>{
  form.style.animation='none';
  void form.offsetWidth;
  form.style.backgroundColor="white";
  form.style.color="black";
  form.style.backgroundImage='url("/src/main/luffy_open.jpg")';
  form.style.backgroundSize='cover';
  form.style.animation='bgtrans 1s ease forwards';});
  
loginbutton.addEventListener("mouseout",()=>{
  form.style.animation='none';
  void form.offsetWidth;
  form.style.backgroundColor='black';
  form.style.color='white';
  form.style.backgroundImage='url("/src/main/luffy.jpg")';
  form.style.backgroundSize='contain';
  form.style.animation='bgtrans 1s ease forwards';
})
  
