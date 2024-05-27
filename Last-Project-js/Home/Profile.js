
let users=JSON.parse(localStorage.getItem("Users"))
const loginCredentials = JSON.parse(localStorage.getItem('logUser'));
const loginEmail = loginCredentials.email;
const loginPassword = loginCredentials.password;
const loggedInUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
let info_house = JSON.parse(localStorage.getItem("houseInformation"))
console.log(loggedInUser)
if(loggedInUser){
    const name = loggedInUser.username ; 
    Username.innerText = name
}
// id administrator 

//id input
let Email = document.getElementById("City");
let Password = document.getElementById("Street_Name");
let save_container = document.getElementById("save_container")


//Function.................


save_container.addEventListener("click", function(){
 let newEmail = users[users.indexOf(loggedInUser)].email = Email.value;
 let newPassword = users[users.indexOf(loggedInUser)].password = Password.value;
localStorage.setItem("Users", JSON.stringify(users));
window.location.href = "Login.html"

    console.log(users);



})

