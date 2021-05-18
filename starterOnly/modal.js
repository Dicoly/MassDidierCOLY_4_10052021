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

//DOM form
const myForm = document.getElementById("myform");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quanTity = document.getElementById("quantity");
const locaTion = document.getElementById("location");
const location1 = document.getElementById("location1") ;
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkBox1 = document.getElementById("checkbox1");

//Variable pour ajouter ou supprimer les erreurs
const errorFirst = document.getElementById ("errorfirst");
const errorLast = document.getElementById ("errorlast");
const errorEmail = document.getElementById ("erroremail");
const errorBirthdate = document.getElementById ("errorbirthdate");
const errorQuantity = document.getElementById ("errorquantity");
const errorLocation = document.getElementById ("errorlocation");
const errorCheckbox1 = document.getElementById ("errorcheckbox1");

//Regex pour acceptation texte, email, date et nombres
let regexText = /^[a-zA-Z-\s]+$/;
let regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
let regexDate = /[0-9]\-/;
let regexNumbers = /^[0-9]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
 modalBg.id = 'bground--block';
}
//fermer modal form via croix
function closeModal() {
  modalBg.id = 'bground--none';
 }

// fermer  via "fermer"
document.querySelector(".button-thank").addEventListener("click", function(closeThank) {
	thankBg.id = 'bground-thank--none';
	modalBg.id = 'bground--none';
});

//fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function(closeThank) {
	thankBg.id = 'bground-thank--none';
	modalBg.id = 'bground--none';
});

//Fontion pour le prénom
function validateFirst(input, error_first) {
  
  if (input.value >= 2 && input.value.trim() != "") {
    error_first.innerHTML = "";
    return true;
  } else if (regexText.test(input.value) == false || input.value.trim() == "") {
    error_first.innerHTML = "Le prénom doit comporter au moins 2 caractères et sans chiffres.";
    first.classList.add("class--error");
    return false;
  } else {
    error_first.innerHTML = "";
    first.classList.remove("class--error");
    return true;
  }
}

//Fontion pour le nom
function validateLast(input, error_last) {
  
  if (input.value >= 2 && input.value.trim() !== "") {
    error_last.innerHTML = "";
    return true;
  } else if (regexText.test(input.value) == false) {
    last.classList.add("class--error");
    error_last.innerHTML = "Le nom doit comporter au moins 2 caractères et sans chiffres. ";
    return false;
  } else {
    error_last.innerHTML = "";
    last.classList.remove("class--error");
    return true;
  }
}

//Fontion pour le mail
function validateEmail(inputMail, error_email) {
  
  if (inputMail.value == true || regexMail.test(inputMail.value) == true) {
    error_email.innerHTML = "";
    email.classList.remove("class--error");
    return true;
  } else {
    email.classList.add("class--error");
    error_email.innerHTML = "Veuillez entrer une adresse mail valide.";
    return false;
  }
}

//Fontion pour la date de naissance
function validateBirthdate(inputBirthdate, error_birthdate) {
  
  if (inputBirthdate.value == true || regexDate.test(inputBirthdate.value) == true) {
    error_birthdate.innerHTML = "";
    birthdate.classList.remove("class--error");
    return true;
  } else {
    birthdate.classList.add("class--error");
    error_birthdate.innerHTML = "Veuillez entrer une date valide.";
    return false;
  }
}

//Fontion pour la date de naissance
function validateQuantity(input, error_quantity) {
  
  if (regexNumbers.test(input.value) == true) {
    error_quantity.innerHTML = "";
    quantity.classList.remove("class--error");
    return true;
  } else {
    quantity.classList.add("class--error");
    error_quantity.innerHTML = "Veuillez entrer un chiffre valide.";
    return false;
  } 
}

//Fontion pour la localité
function validateLocation(location, error_location) {
  let isChecked= document.querySelectorAll('input[name="location"]:checked').length > 0;
  
  if (location = isChecked) {
    error_location.innerHTML = "";
    locaTion.classList.remove("class--error");
    return true;
  } else {
    locaTion.classList.add("class--error");
    error_location.innerHTML = "Veuillez selectionner une ville.";
    return false;
  }
}

//Fontion pour checkbox
function validateCheckbox1(input, error_checkbox1) {
  
  if (input.checked) {
    error_checkbox1.innerHTML = "";
    checkbox1_label.classList.remove("class--error");
    return true;
  } else {
    checkbox1_label.classList.add("class--error");
    error_checkbox1.innerHTML = "Merci d'accepter les termes et conditions.";
    return false;
  }
}

/*Validation formulaire*/
myForm.addEventListener('submit', valideForm);
function valideForm(event) {
  event.preventDefault();
  if (validateFirst(firstName, errorFirst) == false) { event.preventDefault();}
  if (validateLast(lastName, errorLast) == false) { event.preventDefault();}
  if (validateEmail(email, errorEmail) == false) { event.preventDefault();}
  if (validateBirthdate(birthDate, errorBirthdate) == false) { event.preventDefault();}
  if (validateQuantity(quanTity, errorQuantity) == false) { event.preventDefault();}
  if (validateLocation(locaTion, errorLocation) == false) { event.preventDefault();}
  if (validateCheckbox1(checkBox1, errorCheckbox1) == false) { event.preventDefault();}
  else if (valideForm == false) {
    return false;
  } else {
    thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
      function launchThank() {
        thankBg.id = 'bground-thank--block';
      }
    }
};