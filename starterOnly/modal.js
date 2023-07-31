function editNav() {
  var x = document.getElementById("myTopnav");
  const faBarsIcon = document.getElementById("fa-bars");
  if (x.className === "topnav") {
    x.className += " responsive";
    faBarsIcon.classList.add("active");
  } else {
    x.className = "topnav";
    faBarsIcon.classList.remove("active");  
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeLauchModal(){
  modalbg.style.display ="none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalbg = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
closeModalbg.forEach((close) => close.addEventListener("click", closeLauchModal));


