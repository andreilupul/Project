

// id Nav Bar
let btn_apartament = document.getElementById("btn_apartament");
let btn_addApartament = document.getElementById("btn_addApartament");
let Username = document.getElementById("Username");
//id username edit 
let email = document.getElementById("email");
let password = document.getElementById("password");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let date = document.getElementById("date");
let btn_saveUsername = document.getElementById("btn_saveUsername");

let test = document.getElementById("test")

let main_container = document.getElementById("main_container");




let test2=JSON.parse(localStorage.getItem("Users"))
Username.innerText = test2[0].username

let info_house = JSON.parse(localStorage.getItem("houseInformation"))





console.log(info_house)

test.addEventListener("click",(e)=> addItem(e))


function addItem(){
    location.reload();
}

// //test...................................



for(let i = 0 ; i<info_house.length; i++){
    addItemm(i)
}

function addItemm(i){
//id container si copii 

let card  = document.createElement('div');
let card_body1 = document.createElement('div');
let card_title = document.createElement('h5');
let card_text1 = document.createElement('p');
let card_text2 = document.createElement('p');

let list_group_list_group_flush = document.createElement('ul');
let list_group_item1 = document.createElement('li');
let list_group_item2 = document.createElement('li');
let list_group_item3 = document.createElement('li');
let list_group_item4 = document.createElement('li');
let list_group_item5 = document.createElement('li');

let card_body2 = document.createElement('div');

let card_link1 = document.createElement('a');
let card_link2 = document.createElement('a');


let span1  = document.createElement('span');
let span2  = document.createElement('span');
let span3  = document.createElement('span');
let span4  = document.createElement('span');
let span5  = document.createElement('span');
let span6  = document.createElement('span');
let span7  = document.createElement('span');
let span8  = document.createElement('span');

//Adaugam copii

    main_container.appendChild(card);
    card.appendChild(card_body1);
    card_body1.appendChild(card_title);
    card_body1.appendChild(card_text1);
    card_body1.appendChild(card_text2);
    card.appendChild(list_group_list_group_flush)
    list_group_list_group_flush.appendChild(list_group_item1);
    list_group_list_group_flush.appendChild(list_group_item2);
    list_group_list_group_flush.appendChild(list_group_item3);
    list_group_list_group_flush.appendChild(list_group_item4);
    list_group_list_group_flush.appendChild(list_group_item5);
    card.appendChild(card_body2)
    card_body2.appendChild(card_link1);
    card_body2.appendChild(card_link2);
    


// le punem clasa
card.classList.add("card")
card.style.width = "18rem";
card_body1.classList.add("card-body")
card_title.classList.add("card-title")
card_text1.classList.add("card-text")
card_text2.classList.add("card-text")
list_group_list_group_flush.classList.add("list-group")
list_group_item1.classList.add("list-group-item")
list_group_item2.classList.add("list-group-item")
list_group_item3.classList.add("list-group-item")
list_group_item4.classList.add("list-group-item")
list_group_item5.classList.add("list-group-item")
card_body2.classList.add("card-body")
card_link1.classList.add("card-link")
card_link2.classList.add("card-link")
//Adaugam text
card_title.textContent ="City:"
card_text1.textContent ="Street Name:"
card_text2.textContent ="Street Number:"
list_group_item1.textContent ="Area Size:"
list_group_item2.textContent ="Has Ac:"
list_group_item3.textContent ="Year Build:"
list_group_item4.textContent ="Rent Price:"
list_group_item5.textContent ="Data Available:"
card_link1.textContent ="Add To Favorite "
card_link2.textContent ="Save"


console.log()

span1.innerText = " " + info_house[i].City ;
span2.innerText = " " + info_house[i].Street_Name;
span3.innerText = " " + info_house[i].Street_Number;
span4.innerText = " " + info_house[i].Area_Size;
span5.innerText = " " + info_house[i].Has_Ac;
span6.innerText = " " + info_house[i].Year_Build;
span7.innerText = " " + info_house[i].Rent_Price;
span8.innerText = " " + info_house[i].Data_Available;

card_title.appendChild(span1);
card_text1.appendChild(span2);
card_text2.appendChild(span3);
list_group_item1.appendChild(span4);
list_group_item2.appendChild(span5);
list_group_item3.appendChild(span6);
list_group_item4.appendChild(span7);
list_group_item5.appendChild(span8);


}

// setTimeout(addItem, 1000);

// // .......................................

