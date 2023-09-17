// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
const noScroll = document.querySelector(".noScroll");

const modalCongratulation= document.querySelector(".modal-Congratulation-bground");

// DOM Element Formulaire

const submitButton = document.querySelector(".btn-submit");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkboxLocation = document.querySelectorAll("input[name='location']");
const formDataVille = document.getElementById("formDataVille");
const checkboxGeneralCondition = document.getElementById("checkboxConditionGeneral");
const checkboxNextEvenement = document.getElementById("checkboxNextEvenement");
const labelConditionGeneral = document.getElementById("labelCheckboxConditionGeneral");

// DOM Element CongratulationInscription

const closeModalCongratulation = document.getElementById("buttonCloseInscription");



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
function launchModal(formulaire) {
  formulaire.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
  noScroll.classList.add("active");
}

//close modal form
function closeLauchModal(formulaire){
  formulaire.style.display ="none";
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
    const errorChamp = createErrorMessage("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
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


function testCheckBoutonLocation(champ){

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

  const errorChamp = createErrorMessage("Vous devez vérifier que vous acceptez les termes et conditions.");
  labelConditionGeneral.insertAdjacentElement("afterend", errorChamp);
  return false
}

function testDateBirthday(champ){
  const value = new Date(champ.value);

  const dateDuJour = new Date();
  var age = dateDuJour.getFullYear() - value.getFullYear();
  if (dateDuJour.getMonth() < value.getMonth() || (dateDuJour.getMonth() === value.getMonth() && dateDuJour.getDate() < value.getDate())) {
    age--;
  }


  // Vérifier si la conversion en objet Date est valide
  if (!isNaN(value) && age >= 18) {
    return true;
  }

  const errorChamp = createErrorMessage("Vous devez entrer votre date de naissance et avoir minimum 18 ans.");
  birthdate.insertAdjacentElement("afterend", errorChamp);
  return false 
}


function resetFormulaire(){
  firstName.value = "";
  lastName.value = "";
  email.value= "";
  birthdate.value = "";
  quantity.value = "";

  checkboxLocation.forEach(checkbox => {
    checkbox.checked = false;
  }); 

  checkboxGeneralCondition.value = "";
  checkboxGeneralCondition.checked = false;
  checkboxNextEvenement.value = "";
  checkboxNextEvenement.checked = false;
}



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal(modalbg))); //renomer modalBtn 

// close modal form
closeModal[0].addEventListener("click", () => {closeLauchModal(modalbg);}); // closeModal[0] correspond au formulaire


closeModalCongratulation.addEventListener("click", () => {closeLauchModal(modalCongratulation);});
closeModal[1].addEventListener("click", () => {closeLauchModal(modalCongratulation);});  // closeModal[1] correspond a la fenetre de confirmation inscription

submitButton.addEventListener("click", (event) => {

  event.preventDefault();
  let isValid = true;
  let boolTestChampVide = true;
  let boolTest2Caractere = true;
  let boolTestMail = true;
  let boolTestValueNumber = true;
  let boolTestSelecBoutonLocation = true;
  let boolTestGeneralCondition = true;
  let boolTestBirthday = true;



  clearErrors();

  boolTest2Caractere = testNombreCaractere(firstName) && boolTest2Caractere;
  boolTest2Caractere = testNombreCaractere(lastName) && boolTest2Caractere;

  boolTestMail = testAdresse(email);
  boolTestValueNumber = testnumber(quantity);
  boolTestSelecBoutonLocation = testCheckBoutonLocation(checkboxLocation)
  boolTestGeneralCondition = testCheckGeneralCondition(checkboxGeneralCondition);
  boolTestBirthday = testDateBirthday(birthdate);
  
  
  isValid = testChampVide && boolTest2Caractere && boolTestMail && boolTestValueNumber && boolTestSelecBoutonLocation && boolTestGeneralCondition && boolTestBirthday;
  // Si toutes les validations sont passées, soumettre le formulaire
  if (isValid) {
    closeLauchModal(modalbg);
    resetFormulaire();
    modalCongratulation.style.display = "flex";
    noScroll.classList.add("active");
  

  }

});

