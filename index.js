const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("tacheAdd");
const tacheElement = document.getElementById("tacheElement");
input.value = "";
let todos = [];
function addtodo() {
  if (input.value === "") {
    alert("Veuillez rentrer une tache");
  } else {
    const tache = document.createElement("li");
    // recupérer la tache de l'input
    tache.textContent = input.value;

    //Verifier qu'elle n'est pas vide

    list.appendChild(tache);
    // ajouter un element poubelle
    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    tache.appendChild(check);
    const rubish = document.createElement("i");
    rubish.classList.add("fa-solid", "fa-trash-can");
    console.log(rubish);
    tache.appendChild(rubish);
    //l'ajouter à la liste des taches

    rubish.addEventListener("click", () => {
      tache.remove();
    });

    check.addEventListener("click", () => {
      check.classList.toggle("activ");
      if (check.classList.contains("activ")) {
        tache.style = "text-decoration: line-through;";
      } else if (!check.classList.contains("activ")) {
        tache.style = "text-decoration: none;";
      }
    });
    input.value = "";
  }
}

// ajouter un element et barrer l'element
button.addEventListener("click", addtodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addtodo();
  }
});
// 4 méthode essentielles LOCAL STORAGE

//A. Sauvegarder les données
//localStorage.setItem("clé", "valeur")
//B. Récupérer une donnée
// localStorage.getItem("clé")
//C.Supprimer une donnée
//localStorage.removeItem("clé")
//Tout Supprimer
//localStorage.clear()
