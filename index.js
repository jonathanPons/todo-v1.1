const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("tacheAdd");
const tacheElement = document.getElementById("tacheElement");
input.value = "";
let todos = [];

//fonction qui sauvegarde la todo
function saveTodos() {
  const todoString = JSON.stringify(todos);
  localStorage.setItem("todos", todoString);
}

// fonctionqui cahrge la todo

function chargeTodos() {
  const todoString = localStorage.getItem("todos");
  if (todoString === null) {
    return;
  }
  todos = JSON.parse(todoString);
  todos.forEach(function (tacheTexte) {
    const tacheArray = document.createElement("li");
    tacheArray.textContent = tacheTexte;
    list.appendChild(tacheArray);
    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    tacheArray.appendChild(check);
    const rubish = document.createElement("i");
    rubish.classList.add("fa-solid", "fa-trash-can");
    console.log(rubish);
    tacheArray.appendChild(rubish);
    rubish.addEventListener("click", () => {
      tacheArray.remove();
    });

    check.addEventListener("click", () => {
      check.classList.toggle("activ");
      if (check.classList.contains("activ")) {
        tacheArray.style = "text-decoration: line-through;";
      } else if (!check.classList.contains("activ")) {
        tacheArray.style = "text-decoration: none;";
      }
    });
    input.value = "";
  });
}

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

//localStorage.setItem("prenom", "Jonathan");
//const prenom = localStorage.getItem("prenom");
//console.log(prenom);
//const sports = ["Running", "JJB", "Natation"];
//localStorage.setItem("sports", sports);
//const sportsSaved = localStorage.getItem("sports");
//console.log(sportsSaved); // Regarde ce que ça donne
//console.log(typeof sportsSaved); // C'est quel type ?

//Exemple bonne methode

const sports = ["Running", "JJB", "Natation"];
//Convertir en string
const SportsStrings = JSON.stringify(sports);
//Sauvegarder
localStorage.setItem("sports", SportsStrings);

// Récuperer puis convertir string en array

const sportsSaved = localStorage.getItem("sports");
const sportsArray = JSON.parse(sportsSaved);

console.log(sportsArray);
console.log(typeof sportsArray);
console.log(Array.isArray(sportsArray));
