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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement formulaire
function launchModal() {
  modalBg.style.display = "block";
}

// fermeture formulaire via le bouton (X)
document.getElementById("closeform").addEventListener("click", function() {
  modalBg.style.display = "none";
});