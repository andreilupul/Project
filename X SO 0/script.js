let box_0 =document.getElementById("box_0");
let box_1 =document.getElementById("box_1");
let box_2 =document.getElementById("box_2");
let box_3 =document.getElementById("box_3");
let box_4 =document.getElementById("box_4");
let box_5 =document.getElementById("box_5");
let box_6 =document.getElementById("box_6");
let box_7 =document.getElementById("box_7");
let box_8 =document.getElementById("box_8");

let game = [[box_0,box_1,box_2], 
            [box_3,box_4,box_5],
            [box_6,box_7,box_8]];

for(let element of game){
    for(let element2 of element){
        console.log(element2)
    element2.addEventListener("click", index);
    }
}

function index(e){
   let move = e.target
   if(move.style.backgroundColor == "green" || move.style.backgroundColor == "red"){
    return;
  }
  move.style.backgroundColor = "green"

      

    let calculator=Math.floor(Math.random()*10)-1;
    
    let white = false;

    while(true){
        calculator=Math.floor(Math.random()*10);
        if(calculator !==0){
            calculator= calculator-1;
        }
        for(let element of game){
            for(let element2 of element){
                console.log(element2)
                if(!(element2.style.backgroundColor=="red" || element2.style.backgroundColor=="green")){
                 white=true
                }
        

            }
        }
        if(white==false){
            break
        }
        let celula=document.getElementById("box_" + calculator);
        if(!(celula.style.backgroundColor=="red" || celula.style.backgroundColor=="green")){
            celula.style.backgroundColor="red";
            break
        }

        
    }
    Winner()
    lose()
}
//win.........................................................
function Winner() {
    for (let i = 0; i < 3; i++) {
      if (
        game[i][0].style.backgroundColor === "green" &&
        game[i][1].style.backgroundColor === "green" &&
        game[i][2].style.backgroundColor === "green"
      ) {
        alert("Ai câștigat!");
        resetGame();
        return;
      }
      if (
        game[0][i].style.backgroundColor === "green" &&
        game[1][i].style.backgroundColor === "green" &&
        game[2][i].style.backgroundColor === "green"
      ) {
        alert("Ai câștigat!");
        resetGame();
        return;
      }
    }
  
    if (
      (game[0][0].style.backgroundColor === "green" &&
        game[1][1].style.backgroundColor === "green" &&
        game[2][2].style.backgroundColor === "green") ||
      (game[0][2].style.backgroundColor === "green" &&
        game[1][1].style.backgroundColor === "green" &&
        game[2][0].style.backgroundColor === "green")
    ) {
      alert("Ai câștigat!");
      resetGame();
      return;
    }
  
    let egal = true;
    for (let element of game) {
      for (let element2 of element) {
        if (
          element2.style.backgroundColor !== "green" &&
          element2.style.backgroundColor !== "red"
        ) {
          egal = false;
          break;
        }
      }
    }
    if (egal) {
      alert("Egalitate!");
      resetGame();
    }
  }
  
  function resetGame() {
    for (let element of game) {
      for (let element2 of element) {
        element2.style.backgroundColor = "";
      }
    }
  }


//lose..............................................................
  function lose() {
    for (let i = 0; i < 3; i++) {
      if (
        game[i][0].style.backgroundColor === "red" &&
        game[i][1].style.backgroundColor === "red" &&
        game[i][2].style.backgroundColor === "red"
      ) {
        alert("ai pierdut!");
        resetGame();
        return;
      }
      if (
        game[0][i].style.backgroundColor === "red" &&
        game[1][i].style.backgroundColor === "red" &&
        game[2][i].style.backgroundColor === "red"
      ) {
        alert("ai pierdut!");
        resetGame();
        return;
      }
    }
  
    if (
      (game[0][0].style.backgroundColor === "red" &&
        game[1][1].style.backgroundColor === "red" &&
        game[2][2].style.backgroundColor === "red") ||
      (game[0][2].style.backgroundColor === "red" &&
        game[1][1].style.backgroundColor === "red" &&
        game[2][0].style.backgroundColor === "red")
    ) {
      alert("ai pierdut!");
      resetGame();
      return;
    }
  
    let egal = true;
    for (let element of game) {
      for (let element2 of element) {
        if (
          element2.style.backgroundColor !== "red" &&
          element2.style.backgroundColor !== "green"
        ) {
          egal = false;
          break;
        }
      }
    }
    if (egal) {
      alert("Egalitate!");
      resetGame();
    }
  }
  
  function resetGame() {
    for (let element of game) {
      for (let element2 of element) {
        element2.style.backgroundColor = "";
      }
    }
  }
