

let test2=JSON.parse(localStorage.getItem("Users"))
Username.innerText = test2[0].username
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



save_container.addEventListener("click",(e)=> addItem(e,));

 function addItem(e){
    




saveData()
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
        Data_Available: Data_Available.value.trim()

    };

    let houseInformation = JSON.parse(localStorage.getItem("houseInformation")) || [];
    houseInformation.push(infoData);
    localStorage.setItem('houseInformation', JSON.stringify(houseInformation));
    
}
