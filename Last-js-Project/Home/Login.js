const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

//singUp id...
// place holder
let signUp_username = document.getElementById("signUp_username");
let signUp_email = document.getElementById("signUp_email");
let signUp_password = document.getElementById("signUp_password");
let date = document.getElementById("date");
//error
let signupError_username = document.getElementById("signupError_username");
let signupError_email = document.getElementById("signupError_email");
let signupError_password = document.getElementById("signupError_password");
let Error_date = document.getElementById("Error_date");
//Button
let btn_signup = document.getElementById("btn_signup");

//Sign up Function
btn_signup.addEventListener("click", function() {
    let valid = true;

    if(signUp_username.value.trim() == "") {
        signupError_username.textContent = "Can't be blank"
        valid = false;} 
        else{signupError_username.textContent = "" }

  if(signUp_email.value.trim() == "") {
        signupError_email.textContent = "Can't be blank"
        valid = false;} 
     else if(isValidEmail(signUp_email.value)){
        signupError_email.textContent = ""}
     else{signupError_email.textContent = "Email invalid" 
     valid = false;}
  if (signUp_password.value.trim() == "") {
        signupError_password.textContent = "Password can't be blank";
        valid = false;} 
     else if (signUp_password.value.length < 5) {
        signupError_password.textContent = "Password is too short";
        valid = false;} 
     else { signupError_password.textContent = ""; }

     if(date.value.trim() == "") {
        Error_date.textContent = "Can't be blank"
        valid = false;} 
        else{Error_date.textContent = "" }

  if (valid) {
     saveUserToLocalStorage();}


});

  function saveUserToLocalStorage() {
     let userData = {
        username: signUp_username.value.trim(),
         email: signUp_email.value.trim(),
         password: signUp_password.value.trim(),
          date: date.value.trim(),
     };
 
     let users = JSON.parse(localStorage.getItem("Users")) || [];
     users.push(userData);
     localStorage.setItem('Users', JSON.stringify(users));
 
     alert("User registered successfully");
     window.location.href = "login.html";
 }

//Login id 
//Place holder
let login_email = document.getElementById("login_email");
let login_password = document.getElementById("login_password");
//Error
let loginError_email = document.getElementById("loginError_email");
let loginError_password = document.getElementById("loginError_password");
//button
let btn_login = document.getElementById("btn_login");

//Function

btn_login.addEventListener("click", function() {
    let valid = true;


  if(login_email.value.trim() == "") {
        loginError_email.textContent = "Can't be blank"
        valid = false;} 
     else if(isValidEmail(login_email.value)){
        loginError_email.textContent = ""}
     else{loginError_email.textContent = "Email invalid" 
     valid = false;}
  if (login_password.value.trim() == "") {
        loginError_password.textContent = "Password can't be blank";
        valid = false;} 
     else if (login_password.value.length < 5) {
        loginError_password.textContent = "Password is too short";
        valid = false;} 
     else { loginError_password.textContent = ""; }

  if (valid) {
    loginUser();}


});


function loginUser() {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let email = login_email.value.trim();
    let password = login_password.value.trim();

    let userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
        alert("Login successful");
        // Redirecționează către pagina principală de căutare Google
window.location.href = "Home.html";

    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }


// ....color
// #ECD06F yelow
// #D14836 red
// #000 black

// #FF204E
// #A0153E
// #5D0E41

// #00224D