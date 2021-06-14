// Variable générale ( toute la page )

let fourniture;
let main;

// Variable - Fonction - > APi Déclaration

const fetchFourniture = async() => {
    fourniture = await fetch("http://localhost:3000/api/furniture").then((res) =>
        res.json()
    );
    console.log(fourniture);
};
// Variable -> APi Appel

fetchFourniture();
console.log(fetchFourniture);

// Variable -> Balise Main Déclaration

let b = document.body;
let newMain = document.createElement("Main");
let newTexte = document.createTextNode("Tableau Fourniture");

// Fonction  ->  Balise Main

newMain.textContent = "Tableau Fourniture crée et insérer en JavaScript";
newMain.id = "Fourniture";
console.log(newMain);