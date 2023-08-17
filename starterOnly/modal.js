// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalbg = document.querySelectorAll(".close");
const noScroll = document.querySelector(".noScroll");

// DOM Element Formulaire

const submitButton = document.querySelector(".btn-submit");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkboxInput = document.querySelectorAll("input[name='location']");
const formDataVille = document.getElementById("formDataVille");
const generalCondition = document.getElementById("checkbox1");
const labelConditionGeneral = document.getElementById("labelCheckboxConditionGeneral");




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
  window.scrollTo({ top: 0, behavior: 'smooth' });
  noScroll.classList.add("active");
}

//close modal form
function closeLauchModal(){
  modalbg.style.display ="none";
  noScroll.classList.remove("active");
}

function clearErrors() {
  document.querySelectorAll(".erreur-champs").forEach(error => {
    error.remove();
  });
}

function createErrorMessage(message) {
  const errorElement = document.createElement("p");
  errorElement.className = "erreur-champs";
  errorElement.textContent = message;
  return errorElement;
}

function testChampVide(champ) {
  if (champ.value.trim() === "") {
    const errorChamp = createErrorMessage("Le champ est vide");
    champ.insertAdjacentElement("afterend", errorChamp);
    return false;
  }
  return true;
}

function testNombreCaractere(champ) {
  const minLength = 2;
  if (champ.value.trim().length < minLength) {
    const errorChamp = createErrorMessage("Le champ doit avoir au moins 2 caractères");
    champ.insertAdjacentElement("afterend", errorChamp);
    return false;
  }
  return true;
}

function testAdresse(emailInput) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/i;
  if (!emailPattern.test(emailInput.value)) {
    const errorChamp = createErrorMessage("Adresse e-mail invalide");
    emailInput.insertAdjacentElement("afterend", errorChamp);
    return false;
  }
  return true;
}

function testnumber(champ) {
  const value = champ.value; // Supprimer les espaces autour de la valeur

  // Vérifier si la valeur est un chiffre unique ou un nombre entier
  if(value!=="")
  {
    console.log(value)
      if (/^\d+$/.test(value) || !isNaN(value)) {
         return true;
         }
  }

  const errorChamp = createErrorMessage("Nombre invalide");
  champ.insertAdjacentElement("afterend", errorChamp);
  return false;
}


function testCheckBoutonRadio(champ){

  let isChecked = false;

  champ.forEach((radio) => {  
    if (radio.checked){
      console.log(radio.value)
      isChecked = true; 
    }
  });

  if (isChecked) {
    return true; // Renvoyer true si une case est cochée
  }

  const errorChamp = createErrorMessage("Veuillez selectionez une ville");
  formDataVille.insertAdjacentElement("afterend", errorChamp);
  return false

}

function testCheckGeneralCondition(radio){
  if (radio.checked)
  {
    return true;
  }

  const errorChamp = createErrorMessage("Veuillez accepter les condtion general");
  labelConditionGeneral.insertAdjacentElement("afterend", errorChamp);
  return false
}

function testDateBirthday(champ){
  const value = new Date(champ.value);

  // Vérifier si la conversion en objet Date est valide
  if (!isNaN(value)) {
    return true;
  }

  const errorChamp = createErrorMessage("Ajouter votre date de naissance");
  birthdate.insertAdjacentElement("afterend", errorChamp);
  return false 
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //renomer modalBtn 

// close modal form
closeModalbg.forEach((close) => close.addEventListener("click", closeLauchModal));


submitButton.addEventListener("click", (event) => {

  event.preventDefault();
  let isValid = true;
  let boolTestChampVide = true;
  let boolTest2Cractere = true;
  let boolTestMail = true;
  let boolTestValueNumber = true;
  let boolTestSelecBoutonRadio = true;
  let boolTestGeneralCondition = true;
  let boolTestBirthday = true;



  clearErrors();

  boolTest2Caractere = testNombreCaractere(firstName) && boolTest2Caractere;
  boolTest2Caractere = testNombreCaractere(lastName) && boolTest2Caractere;

  boolTestMail = testAdresse(email);
  boolTestValueNumber = testnumber(quantity);
  boolTestSelecBoutonRadio = testCheckBoutonRadio(checkboxInput)
  boolTestGeneralCondition = testCheckGeneralCondition(generalCondition);
  boolTestBirthday = testDateBirthday(birthdate);
  
  
  isValid = testChampVide && boolTest2Cractere && boolTestMail && boolTestValueNumber && boolTestSelecBoutonRadio && boolTestGeneralCondition && boolTestBirthday;
  // Si toutes les validations sont passées, soumettre le formulaire
  if (isValid) {
    // Ajoutez ici le code pour soumettre le formulaire si nécessaire
  }


});

