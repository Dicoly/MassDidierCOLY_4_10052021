function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.getElementById("closeform");
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  if (document.querySelectorAll(".bground.hide").length >0) {
    modalBg.classList.remove('hide');
  }
};

//fermer modal form via croix
function closeModal() {
  if (document.querySelectorAll(".bground:not(.hide)").length >0) {
    modalBg.classList.add('hide');
  }
};

// lancement message de remerciement
function modalSuccessOpen() {
  if (document.querySelectorAll(".bground-thank.hide").length >0) {
    thankBg.classList.remove('hide');
  }
};

//fermer message thank via fermer
function modalSuccessClose() {
  if (document.querySelectorAll(".bground-thank:not(.hide)").length >0) {
    thankBg.classList.add('hide');
  }
};

//fermer message thank via croix
function closeSuccessModal() {
  if (document.querySelectorAll(".bground-thank:not(.hide)").length >0) {
    thankBg.classList.add('hide');
  }
};

// fermer message thank via "fermer"
document.querySelector(".button-thank").addEventListener("click", modalSuccessClose);

//fermer message thanks via croix
document.getElementById("closethanks").addEventListener("click", closeSuccessModal);

//Fontion pour le prénom
const firstName = document.getElementById("first");
const errorFirst = document.getElementById("errorfirst");

function validateFirst(input, error_first) {
  let regexText = /^[a-zA-Z-\s]+$/;
  
  if (input.value >= 2 && input.value.trim() != "" || regexText.test(input.value) == true) {
    error_first.innerHTML = "";
    first.classList.remove("class--error");
    return true;
  }
  error_first.innerHTML = "Le prénom doit comporter au moins 2 caractères et sans chiffres.";
  first.classList.add("class--error");
  return false;
};

//Fontion pour le nom
const lastName = document.getElementById("last");
const errorLast = document.getElementById("errorlast");

function validateLast(input, error_last) {
  let regexText = /^[a-zA-Z-\s]+$/;
  
  if (input.value >= 2 && input.value.trim() !== "" || regexText.test(input.value) == true) {
    error_last.innerHTML = "";
    last.classList.remove("class--error");
    return true;
  }
  last.classList.add("class--error");
  error_last.innerHTML = "Le nom doit comporter au moins 2 caractères et sans chiffres. ";
  return false;
};

//Fontion pour le mail
const email = document.getElementById("email");
const errorEmail = document.getElementById("erroremail");
let regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

function validateEmail(inputMail, error_email) {
  
  if (inputMail.value == true || regexMail.test(inputMail.value) == true) {
    error_email.innerHTML = "";
    email.classList.remove("class--error");
    return true;
  }
  email.classList.add("class--error");
  error_email.innerHTML = "Veuillez entrer une adresse mail valide.";
  return false;
};

//Fontion pour la date de naissance
const birthDate = document.getElementById("birthdate");
const errorBirthdate = document.getElementById("errorbirthdate");
let regexDate = /[0-9]\-/;

function validateBirthdate(inputBirthdate, error_birthdate) {
  
  if (inputBirthdate.value == true || regexDate.test(inputBirthdate.value) == true) {
    error_birthdate.innerHTML = "";
    birthdate.classList.remove("class--error");
    return true;
  }
  birthdate.classList.add("class--error");
  error_birthdate.innerHTML = "Veuillez entrer une date valide.";
  return false;
};

//Fontion pour le nombres de tournois
const quanTity = document.getElementById("quantity");
const errorQuantity = document.getElementById("errorquantity");
let regexNumbers = /^[0-9]+$/;

function validateQuantity(input, error_quantity) {
  
  if (regexNumbers.test(input.value) == true) {
    error_quantity.innerHTML = "";
    quantity.classList.remove("class--error");
    return true;
  }
  quantity.classList.add("class--error");
  error_quantity.innerHTML = "Veuillez entrer un chiffre valide.";
  return false;
};

//Fontion pour la localité
const locaTion = document.getElementById("locationText");
const errorLocation = document.getElementById("errorlocation");

function validateLocation(locationText, error_location) {
  let isChecked = document.querySelectorAll('input[name="location"]:checked').length > 0;
  
  if (isChecked) {
    error_location.innerHTML = "";
    locaTion.classList.remove("class--error");
    return true;
  }
  locaTion.classList.add("class--error");
  error_location.innerHTML = "Veuillez selectionner une ville.";
  return false;
};

//Fontion pour checkbox
const checkBox1 = document.getElementById("checkbox1");
const errorCheckbox1 = document.getElementById("errorcheckbox1");

function validateCheckbox1(input, error_checkbox1) {
  
  if (input.checked) {
    error_checkbox1.innerHTML = "";
    checkbox1_label.classList.remove("class--error");
    return true;
  }
  checkbox1_label.classList.add("class--error");
  error_checkbox1.innerHTML = "Merci d'accepter les termes et conditions.";
  return false;
};

/*Validation formulaire*/
const myForm = document.getElementById("myform");

myForm.addEventListener('submit', valideForm);

function valideForm(event) {
  event.preventDefault();
  let isValid = validateFirst(firstName, errorFirst)
  && validateLast(lastName, errorLast)
  && validateEmail(email, errorEmail)
  && validateBirthdate(birthDate, errorBirthdate)
  && validateQuantity(quanTity, errorQuantity)
  && validateLocation(locaTion, errorLocation)
  && validateCheckbox1(checkBox1, errorCheckbox1);
  
  if (isValid) {
    closeModal();
    modalSuccessOpen();
    cleanForm();
  }
  return false;
};

/*Nettoyage du formulaire */
const locaTion1 = document.getElementById('location1');
const locaTion2 = document.getElementById('location2');
const locaTion3 = document.getElementById('location3');
const locaTion4 = document.getElementById('location4');
const locaTion5 = document.getElementById('location5');
const locaTion6 = document.getElementById('location6');
const checkBox2 = document.getElementById("checkbox2");

function cleanForm () {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  quanTity.value = "";
  locaTion1.checked = false;
  locaTion2.checked = false;
  locaTion3.checked = false;
  locaTion4.checked = false;
  locaTion5.checked = false;
  locaTion6.checked = false;
  checkBox1.checked = false;
  checkBox2.checked = false;
};