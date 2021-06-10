let fourniture;
let main;

//APi Demande

const fetchFourniture = async() => {
    fourniture = await fetch("http://localhost:3000/api/furniture").then(res => res.json());

};
fetchFourniture();
let b = document.body;
let newMain = document.createElement("Main");
let newTexte = document.createTextNode("Tableau Fourniture");

newMain.textContent = "Tableau Fourniture crée et insérer en JavaScript";
newMain.id = "Fourniture";