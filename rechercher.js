const btn = document.querySelector ("#btnRecherche");
const modal = window.document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Ouvrir la modale
btn.addEventListener("click", ()=> {
  modal.style.display = "flex";
});

// Fermer la modale
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Fermer si on clique en dehors
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}