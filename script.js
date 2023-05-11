
let Name = document.querySelector(".Choose-button");
let Age = document.querySelector(".Age-button");
let correctquestion = document.querySelector("Power");
let restart = document.querySelector(" .restart-button");
let questions = document.querySelector(".questions");
let button = document.querySelector("button");
let Power = document.querySelector("questions");
let result = 
    document.querySelector(".result");

button.onclick= function(){
  let NameInput = document.querySelector(".name-input").value;
    let oclass = document.querySelector(".oclass").value;
    let SClass = document.querySelector(".SClass").value;
    
 if( (NameInput === correctquestion)&&
      (oclass <= 15 && SClass === "athletic" )){
      alert("Your Black Widow");}
 };

    // else if ( ( username === correctUsername) &&
     //    (password !== correctPassword)) {
   // alert("Wrong Password");
   // }
   // else if ( ( username !== correctUsername) &&
      //   (password === correctPassword)) {
    //alert("Wrong Username");
    //}
    //else if ( ( username !== correctUsername) ||
      //   (password !== correctPassword)) {
    //alert("Incorrect username and password");
   // }
  // else if ( ( username === " ") ||
    //     (password === " ")) {
    //alert("Incorrect username and password");
    //}


{  
        result.style.display = "block";
    }



























