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
  // Convertir todos en string

  const todoString = JSON.stringify(todos);

  // Sauvegarder dans localStorage
  localStorage.setItem("Todos", todoString);
}

// ========================================
// 4. FONCTION CHARGER (localStorage)
// ========================================
function chargeTodos() {
  // Récupérer depuis localStorage
  const todoString = localStorage.getItem("Todos");
  // Si null, return
  if (todoString === null) {
    return;
  } // Convertir en array
  todos = JSON.parse(todoString);

  // forEach pour afficher chaque tâche
  todos.forEach(function (TacheElement, index) {
    const newTache = document.createElement("li");
    newTache.textContent = TacheElement;
    list.appendChild(newTache);

    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    newTache.appendChild(check);
    const rubish = document.createElement("i");
    rubish.classList.add("fa-solid", "fa-trash-can");
    newTache.appendChild(rubish);

    check.addEventListener("click", () => {
      check.classList.toggle("activ");

      if (check.classList.contains("activ")) {
        newTache.style = "text-decoration-line: line-through;";
      } else if (check.classList.contains("activ")) {
        newTache.style = "text-decoration-line: none;";
      }
    });
    rubish.addEventListener("click", () => {
      newTache.remove();
      tacheElement.splice(index, 0);
      saveTodos();
    });
  });
}

// ========================================
// 5. FONCTION AJOUTER TÂCHE
// ========================================
function addtodo() {
  // TON CODE V1.1 ICI
  // (vérification, créer li, icons, event listeners)

  if (input.value === "") {
    alert("Veuillez rentrez une tâche");
  } else {
    // Je cree un element li
    const newTache = document.createElement("li");
    // Je lui dit ce que li contient

    newTache.textContent = input.value;
    console.log("Todos:", newTache);

    list.appendChild(newTache);
    todos.push(input.value);
    console.log("Todos après ajout:", todos);
    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    newTache.appendChild(check);
    const rubish = document.createElement("i");
    rubish.classList.add("fa-solid", "fa-trash-can");
    newTache.appendChild(rubish);
    const taskText = input.value;
    const index = todos.indexOf(taskText);
    saveTodos();
    check.addEventListener("click", () => {
      check.classList.toggle("activ");
      if (check.classList.contains("activ")) {
        newTache.style = "text-decoration-line: line-through;";
      } else if (!check.classList.contains("activ")) {
        newTache.style = "text-decoration-line: none;";
      }
    });

    rubish.addEventListener("click", () => {
      newTache.remove();
      taches.splice(index, 1);
      saveTodos();
    });
  }

  input.value = "";
}

// ========================================
// 6. EVENT LISTENERS
// ========================================
// Bouton Ajouter
button.addEventListener("click", addtodo);

// Touche Entrée
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addtodo();
  }
});

// ========================================
// 7. CHARGER AU DÉMARRAGE
// ========================================
chargeTodos();

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
