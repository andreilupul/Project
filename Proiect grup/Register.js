//ID pentru elemente.
let registerEmail = document.querySelector("#registerEmail");
let registerPassword = document.querySelector("#registerPassword");
let submitBtn = document.querySelector("#submitBtn");
//error p
let error_div_email = document.getElementById("error_div_email");
let error_div_password = document.getElementById("error_div_password");
let error = document.createElement("p");
error_div_email.appendChild(error);
error_div_password.appendChild(error);
//Function
    submitBtn.addEventListener("click", function() {
        let valid = true;
      if(registerEmail.value.trim() == "") {
            error_div_email.textContent = "Can't be blank"
            valid = false;} 
         else if(isValidEmail(registerEmail.value)){
            error_div_email.textContent = "Email valid"}
         else{error_div_email.textContent = "Email invalid" 
         valid = false;}
      if (registerPassword.value.trim() == "") {
            error_div_password.textContent = "Password can't be blank";
            valid = false;} 
         else if (registerPassword.value.length < 5) {
            error_div_password.textContent = "Password is too short";
            valid = false;} 
         else { error_div_password.textContent = "Password is good"; }
    
      if (valid) {
         saveUserToLocalStorage();}
    
    
    });
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }

      function saveUserToLocalStorage() {
         let userData = {
             email: registerEmail.value.trim(),
             password: registerPassword.value.trim()
         };
     
         let users = JSON.parse(localStorage.getItem("Users")) || [];
         users.push(userData);
         localStorage.setItem('Users', JSON.stringify(users));
     
         alert("User registered successfully");
         window.location.href = "login.html";
     }








