//id for label date
    const input_number = document.getElementById("input_number");
    const input_name = document.getElementById("input_name");
    const input_month = document.getElementById("input_month");
    const input_year = document.getElementById("input_year");
    const input_cvc = document.getElementById("input_cvc");
//id for front and back img adica "p"
    const card_number =document.getElementById("number");
    const card_name =document.getElementById("name");
    const card_month =document.getElementById("month");
    const card_year =document.getElementById("year");
    const card_cvc =document.getElementById("cvc");
//id error
    const error_number = document.querySelector(".error_number")
    const error_name = document.querySelector(".error_name")
    const error_mounth = document.querySelector(".error_mounth")
    const error_year = document.querySelector(".error_year")
    const error_cvc = document.querySelector(".error_cvc")
//id buttons 
    const submitBtn = document.getElementById("submit_btn");
    const form = document.querySelector("form");
    const done = document.querySelector(".thank_you");
//Functii
    // function setCardNumber(e){card_number.innerText = format(e.target.value);}
    // function setCardName(e){card_name.innerText = format(e.target.value); }
    // function setCardMonth(e){card_month.innerText = format(e.target.value);}
    // function setCardYear(e){card_year.innerText = format(e.target.value);}
    // function setCardCvc(e){card_cvc.innerText = format(e.target.value);}
//Functii cu eveniment.
    // input_number.addEventListener("keyup", setCardNumber);
    // input_name.addEventListener("keyup", setCardName);
    // input_month.addEventListener("keyup",setCardMonth);
    // input_year.addEventListener("keyup", setCardYear);
    // input_cvc.addEventListener("keyup", setCardCvc);

    // submitBtn.addEventListener("click", handleSubmit);
    submitBtn.addEventListener("mousedown", handleSubmit);
//Eveniment pentru label sa aiba doar litere
    document.getElementById('input_name').addEventListener('input', function(event) {
        let input = event.target.value;
        let letters = /^[A-Za-z]+$/;
            if (!input.match(letters)) {
                event.target.value = input.replace(/[^A-Za-z]/g, '');
            }
    });
//Eveniment pentru label sa aiba doar numere
    document.getElementById('input_number')
    .addEventListener('input', function(event) {
        let input = event.target.value.replace(/\D/g, '').substring(0,16); 
            input = input.replace(/(\d{4})(?=\d)/g, '$1 '); 
            event.target.value = input;
    });
    document.getElementById('input_month').addEventListener('input', function(event) {
        let input = event.target.value.replace(/\D/g, '').substring(0,2); 
            event.target.value = input;
    });
    document.getElementById('input_year').addEventListener('input', function(event) {
        let input = event.target.value.replace(/\D/g, '').substring(0,2); 
            event.target.value = input;
    });
    document.getElementById('input_cvc').addEventListener('input', function(event) {
        let input = event.target.value.replace(/\D/g, '').substring(0,3); 
            event.target.value = input;
    });
// Funtii pentru a pune text
    // function setCardNumber(e){
    //     var text = input_number.value 
    //         card_number.textContent = text
    // }
    // function setCardName(e){
    //     var text = input_name.value
    //         card_name.textContent = text
    // }
    // function setCardMonth(e){
    //     var text = input_month.value
    //         card_month.textContent = text
    // }
    // function setCardYear(e){
    //     var text = input_year.value
    //         card_year.textContent = text
    // }
    // function setCardCvc(e){
    //     var text = input_cvc.value
    //         card_cvc.textContent = text
    // }

//     function setCardNumber(e){
//         var text = input_number.value 
//         card_number.textContent = text
// var text = input_name.value
//         card_name.textContent = text
// var text = input_month.value
//         card_month.textContent = text
// var text = input_year.value
//         card_year.textContent = text
// var text = input_cvc.value
//         card_cvc.textContent = text

//     }


// Validari 
    function handleSubmit(e){
        let valid = true;
      if(input_name.value.trim() == "") {
            error_name.textContent = "Can't be blank"
            valid = false;} 
        else{error_name.textContent = "good"}
      if (input_number.value.trim() == "") {
            error_number.textContent = "Can't be blank";
            valid = false;} 
        else if (input_number.value.trim().length < 19 ) {
            error_number.textContent = " Is too short at least 16";
            valid = false;} 
        else { error_number.textContent = " good"; }
      if (input_month.value.trim() == "") {
            error_mounth.textContent = "Can't be blank";
            valid = false;} 
        else if (input_month.value.length < 2) {
            error_mounth.textContent = " Is too short at least 2";
            valid = false;} 
        else { error_mounth.textContent = " good"; }
      if (input_year.value.trim() == "") {
            error_year.textContent = "Can't be blank";
            valid = false;} 
        else if (input_year.value.length < 2) {
            error_year.textContent = " Is too short at least 2";
            valid = false;} 
        else { error_year.textContent = " good"; }
      if (input_cvc.value.trim() == "") {
            error_cvc.textContent = "Can't be blank";
            valid = false;} 
        else if (input_cvc.value.length < 3) {
            error_cvc.textContent = " Is too short at least 3";
            valid = false;} 
        else { error_cvc.textContent = " good"; }
    
      if (valid) {
        form.classList.add("hidden");
        done.style.display = "block";
            // alert("good");
            // submitBtn.disabled = true;
        var text = input_number.value 
            card_number.textContent = text
        var text = input_name.value
            card_name.textContent = text
        var text = input_month.value
            card_month.textContent = text
        var text = input_year.value
            card_year.textContent = text
        var text = input_cvc.value
            card_cvc.textContent = text
        }}



