function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalbg = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalbg.forEach((close) => close.addEventListener("click", closeLauchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function closeLauchModal(){
  modalbg.style.display ="none";
}


