//id for label date
const input_number = document.getElementById("input_number");
const input_name = document.getElementById("input_name");
const input_month = document.getElementById("input_month");
const input_year = document.getElementById("input_year");
const input_cvc = document.getElementById("input_cvc");
//id for front and back img
const card_number =document.getElementById("number");
const card_name =document.getElementById("name");
const card_month =document.getElementById("month");
const card_year =document.getElementById("year");
const card_cvc =document.getElementById("cvc");
//id buttons 
const submitBtn = document.getElementById("submit_btn");
const form = document.querySelector("form");
const done = document.querySelector(".thank_you");
//function 
  function setCardNumber(e){card_number.innerText = format(e.target.value);}
  function setCardName(e){card_name.innerText = format(e.target.value); }
  function setCardMonth(e){card_month.innerText = format(e.target.value);}
  function setCardYear(e){card_year.innerText = format(e.target.value);}
  function setCardCvc(e){card_cvc.innerText = format(e.target.value);}
  
  function format(s){return s.toString().replace(/\d{4}(?=.)/g,"$&");}


//error

function handleSubmit(e){
    e.preventDefault();
    if(!input_name.value){
        input_name.classList.add("error");
        input_name.parentElement.classList.add("error_message");
    }else{
        input_name.classList.remove("error");
        input_name.parentElement.classList.remove("error_message");

    }
    if(!input_number.value){
        input_number.classList.add("error")
        input_number.parentElement.classList.add("error_message");
    }else if (input_number.value.length <16){
        input_number.classList.add("error")
    }else{
        input_number.classList.remove("error");
        input_number.parentElement.classList.remove("error_message");
    }
    if(!input_month.value){
        input_month.classList.add("error");
        input_month.parentElement.classList.add("error_message");
    }else{
        input_month.classList.remove("error");
        input_month.parentElement.classList.remove("error_message");

    }
    if(!input_year.value){
        input_year.classList.add("error");
        input_year.parentElement.classList.add("error_message");
    }else{
        input_year.classList.remove("error");
        input_year.parentElement.classList.remove("error_message");

    }
    if(!input_cvc.value){
        input_cvc.classList.add("error");
        input_cvc.parentElement.classList.add("error_message");
    }else{
        input_cvc.classList.remove("error");
        input_cvc.parentElement.classList.remove("error_message");

    }

    if(
        input_name.value &&
        input_number.value &&
        input_month.value &&
        input_year.value &&
        input_cvc.value &&
        input_number.value.length ==16
    ){
        done.classList.remove("hidden");
        form.classList.add("hidden");
    }
}


submitBtn.addEventListener("click", handleSubmit);
input_number.addEventListener("keyup", setCardNumber);
input_name.addEventListener("keyup", setCardName);
input_month.addEventListener("keyup",setCardMonth);
input_year.addEventListener("keyup", setCardYear);
input_cvc.addEventListener("keyup", setCardCvc);

