// Récupération des boutons et des paragraphes juste en dessous
const contact1Button = document.getElementById("contact1");
const contact2Button = document.getElementById("contact2");
const contact3Button = document.getElementById("contact3");

const emailParagraph = document.querySelector(".adressemail");
const phoneParagraph = document.querySelector(".numéro");
const discordParagraph = document.querySelector(".discord");

// Masquer les paragraphes au chargement de la page poiur pas que ça reste bloquer avec le texte afficher
emailParagraph.style.display = "none";
phoneParagraph.style.display = "none";
discordParagraph.style.display = "none";

// Fonction pour afficher ou masquer un paragraphe
function toggleVisibility(paragraph) {
  if (paragraph.style.display === "none" || paragraph.style.display === "") {
    paragraph.style.display = "block"; // Affiche le paragraphe
  } else {
    paragraph.style.display = "none"; // Cache le paragraphe
  }
}

// Quand je clique sur le bouton il en comprend (addeveventiste,er) et  va faire apparaitre le paragraphe donc mon texte que je veux
contact1Button.addEventListener("click", () => {
  toggleVisibility(emailParagraph);
});

contact2Button.addEventListener("click", () => {
  toggleVisibility(phoneParagraph);
});

contact3Button.addEventListener("click", () => {
  toggleVisibility(discordParagraph);
});


// Récupere le bouton du doc html
const button = document.getElementById('liengit');

// écoute evenement et ajout d'un événement au clic sur le bouton
button.addEventListener('click', () => {
  // Redirection vers une URL spécifique
  window.location.href = 'https://github.com/Sesselv';
});
