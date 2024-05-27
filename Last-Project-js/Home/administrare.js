

let users=JSON.parse(localStorage.getItem("Users"))
const loginCredentials = JSON.parse(localStorage.getItem('logUser'));
const loginEmail = loginCredentials.email;
const loginPassword = loginCredentials.password;

const loggedInUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

let info_house = JSON.parse(localStorage.getItem("houseInformation"))



if(loggedInUser){
    const name = loggedInUser.username ; 
    Username.innerText = name
}
// id administrator 
let save_container = document.getElementById("save_container")

//id input
let City = document.getElementById("City")
let Street_Name = document.getElementById("Street_Name")
let Street_Number = document.getElementById("Street_Number")
let Area_Size = document.getElementById("Area_Size")
let Has_Ac = document.getElementById("Has_Ac")
let Year_Build = document.getElementById("Year_Build")
let Rent_Price = document.getElementById("Rent_Price")
let Data_Available = document.getElementById("Data_Available")
// id error
let error_city = document.getElementById("error_city");
let error_strName = document.getElementById("error_strName");
let error_strNumber = document.getElementById("error_strNumber");
let error_areaSize = document.getElementById("error_areaSize");
let error_hasAc = document.getElementById("error_hasAc");
let error_yearBuild = document.getElementById("error_yearBuild");
let error_rentPrice = document.getElementById("error_rentPrice");
let error_dataAvailable = document.getElementById("error_dataAvailable");

//Function.................

save_container.addEventListener("click",(e)=> addItem(e,));


 function addItem(e){
    
if(validation()){
    saveData()
    console.log("jhg")
}


}
    
function validation(){
    let valid = true;


    if(City.value.trim() == "") {
        error_city.textContent = "Can't be blank"
        City.classList.add("red-border");
          valid = false;} 
       else{error_city.textContent = "" 
       City.classList.remove("red-border");
           }
    if(Street_Name.value.trim() == "") {
        error_strName.textContent = "Can't be blank"
        Street_Name.classList.add("red-border");
           valid = false;} 
        else{error_strName.textContent = "" 
        Street_Name.classList.remove("red-border");
       

            }      
    if(Street_Number.value.trim() == "") {
        error_strNumber.textContent = "Can't be blank"
        Street_Number.classList.add("red-border");
            valid = false;} 
         else{error_strNumber.textContent = "" 
         Street_Number.classList.remove("red-border");
        

           }
    if(Area_Size.value.trim() == "") {
        error_areaSize.textContent = "Can't be blank"
        Area_Size.classList.add("red-border");
            valid = false;} 
          else{error_areaSize.textContent = "" 
          Area_Size.classList.remove("red-border");
        

           } 
    if(Has_Ac.value.trim() == "") {
        error_hasAc.textContent = "Can't be blank"
        Has_Ac.classList.add("red-border");
            valid = false;} 
          else{error_hasAc.textContent = "" 
          Has_Ac.classList.remove("red-border");
        

           }
    if(Year_Build.value.trim() == "") {
        error_yearBuild.textContent = "Can't be blank"
        Year_Build.classList.add("red-border");
            valid = false;} 
          else{error_yearBuild.textContent = "" 
          Year_Build.classList.remove("red-border");
          

           }
    if(Rent_Price.value.trim() == "") {
        error_rentPrice.textContent = "Can't be blank"
        Rent_Price.classList.add("red-border");
            valid = false;} 
          else{error_rentPrice.textContent = "" 
          Rent_Price.classList.remove("red-border");
        

            }
    if(Data_Available.value.trim() == "") {
        error_dataAvailable.textContent = "Can't be blank"
        Data_Available.classList.add("red-border");
            valid = false; } 
         else{error_dataAvailable.textContent = ""
         Data_Available.classList.remove("red-border");

         }
         console.log(valid)
   
         return valid
}

function saveData() {
    let infoData = {
        City: City.value.trim(),
        Street_Name: Street_Name.value.trim(),
        Street_Number: Street_Number.value.trim(),
        Area_Size: Area_Size.value.trim(),
        Has_Ac: Has_Ac.value.trim(),
        Year_Build: Year_Build.value.trim(),
        Rent_Price: Rent_Price.value.trim(),
        Data_Available: Data_Available.value.trim(),
        Favorite: false
        

    };

    let houseInformation = JSON.parse(localStorage.getItem("houseInformation")) || [];
    houseInformation.push(infoData);
    localStorage.setItem('houseInformation', JSON.stringify(houseInformation));
    
}
