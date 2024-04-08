
// Facem legatura intre script si elementele create in html.

let note_text = document.getElementById("note_text");
let list_area = document.getElementById("list_area");

// Functia 1.
function addList(){
// 1. Cream elementele pe care vrem sa le adaugam in html.
let container_note = document.createElement('div');
let list_title =  document.createElement('h4');
let list_removeList =  document.createElement('button');
let list_addItem =  document.createElement("button");
let list_textItem =  document.createElement('input');
let list_containerList =  document.createElement("ul");
// 2. Inseram Elementele in html.
container_note.appendChild(list_title);
container_note.appendChild(list_removeList);
container_note.appendChild(list_addItem);
container_note.appendChild(list_textItem);
container_note.appendChild(list_containerList);

list_area.appendChild(container_note);
// 3 Punem clase pe elemente pentru style.
container_note.classList.add('container_note');
list_title.classList.add('list_title');
list_removeList.classList.add('list_removeList');
list_addItem.classList.add('list_addItem');
list_textItem.classList.add('list_textItem');

list_containerList.classList.add('list_containerList');

list_removeList.textContent= "Remove List";
list_addItem.textContent= "Add Item";

list_title.innerText= "Title:" + note_text.value;
list_textItem.setAttribute("id", "list_textItem")

// 4. Adaugam evenimente pe butoane.
list_removeList.addEventListener("click",(e)=>removeList(e));
list_addItem.addEventListener("click" ,(e)=> addItem(e,list_containerList ));

}

// Functia 2.
function removeList(e){
    let container = e.target.parentElement;
    list_area.removeChild(container)
    console.log(container)
}

// Function 3.

function addItem(e , list){
  
    let target_conteiner = e.target.parentElement 
    let listItem_input =target_conteiner.querySelector(".list_textItem");
    let p = document.createElement('p');
    // let listItem_input = target_conteiner.querySelector("list_textItem");
    
    console.log(listItem_input)
    let deletList = document.createElement("button")
    deletList.textContent = "Delete"
    deletList.addEventListener("click" , id_deletLis)
    let inputText = document.createElement("li")
    inputText.innerText = listItem_input.value;
    inputText.setAttribute("id", " inputText")
    deletList.classList.add("deletList")

    p.appendChild(inputText)
    p.appendChild(deletList)
    list.appendChild(p);
    // deletLis.classList.add("style_deletList");
    // inputText.classList.add("inputText");
    
    // let  id_inputText = document.getElementById("inputText")
    // deletList.setAttribute("id", "id_deletLis");
    // let id_deletLis = document.getElementById("id_deletLis");
   
  

    console.log(listItem_input)
    console.log(inputText)
}


function id_deletLis(e){
    let container = e.target.parentElement;
    let list = container.parentElement;
console.log(container)
list.removeChild(container);

    // list_area.removeChild(container)
    // console.log(container)


}



