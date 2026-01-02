const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("tacheAdd");
const tacheElement = document.getElementById("tacheElement");
input.value = "";
let todos = [];

// ========================================
// 2. ARRAY GLOBAL
// ========================================

// ========================================
// 3. FONCTION SAUVEGARDER (localStorage)
// ========================================

function saveTodos() {
  const stringTodo = JSON.stringify(todos);
  localStorage.setItem("todos", stringTodo);
}

// ========================================
// 4. FONCTION CHARGER (localStorage)
// ========================================
function chargeTodo() {
  //Entree : pas d'entree, sert à charger les paramettre sauvegargardé
  const stringTodo = localStorage.getItem("todos");

  //Sortie : renvoi null si rien de chargé

  if (stringTodo === null) {
    return;
  }
  //Cas invalides: pas de cas invalide
  //differement chemin
  //return si null
  // sinon charger le saveTodos
}

// ========================================
// 5. FONCTION AJOUTER TÂCHE
// ========================================
function addTodo() {
  //Entree : pas de parametre
  //Creer le input
  if (input.value === "") {
    return alert("Veuillez rentrez une tâche");
  } else {
    const createInput = document.createElement("li");
    createInput.textContent = input.value;
    list.appendChild(createInput);

    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    createInput.appendChild(check);

    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash-can");
    createInput.appendChild(trash);

    todos.push(input.value);
    saveTodos();
    check.addEventListener("click", () => {
      check.classList.toggle("activ");
      if (check.classList.contains === "activ") {
        createInput.style = "text-decoration-line: line-through;";
      } else {
        createInput.style = "text-decoration-line: none";
      }
    });

    trash.addEventListener("click", () => {
      createInput.remove();
      saveTodos();
    });
    input.value = "";
  }
}

//vider l'input

//Sortie: SI le input est vide > return une alert
// Ajoute la tache = La creer, la placer, lui associer check et trash

// Cas invalides :

//Input vide

// Chemins differents :
// return alert si input vide
// la tache ajoutée

// input vide
// ========================================
// 6. EVENT LISTENERS
// ========================================
// Bouton Ajouter

// ========================================
// 7. CHARGER AU DÉMARRAGE
// ========================================

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

//const sports = ["Running", "JJB", "Natation"];
//Convertir en string
//const SportsStrings = JSON.stringify(sports);
//Sauvegarder
//localStorage.setItem("sports", SportsStrings);

// Récuperer puis convertir string en array

//const sportsSaved = localStorage.getItem("sports");
//const sportsArray = JSON.parse(sportsSaved);

//console.log(sportsArray);
//console.log(typeof sportsArray);
//console.log(Array.isArray(sportsArray));
