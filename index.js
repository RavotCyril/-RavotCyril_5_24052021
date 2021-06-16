// Variable générale ( toute la page )

let fourniture;
let main;

// Variable -> Balise Main Déclaration

let b = document.body;
let newMain = document.createElement("Main");
let newTexte = document.createTextNode("Tableau Fourniture");

newMain.textContent = "Tableau Fourniture crée et insérer en JavaScript";
newMain.id = "Fourniture";

console.log(newMain);

// Variable - Fonction - > APi Déclaration

const fetchFourniture = async() => {
    await fetch("http://localhost:3000/api/furniture")
        .then((res) => res.json())
        .then((fourniture) => console.table(fourniture));

    console.log(fourniture);
};
// Variable -> APi Appel

fetchFourniture();

console.log(fetchFourniture);

window.onload = function() {};