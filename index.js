// Variable générale ( toute la page )

let fourniture;
let main;

// Variable -> Balise Main Déclaration

let b = document.body;
console.log(b);
let newMain = document.createElement("Main");
let newTexte = document.createTextNode("Tableau Fourniture");

newMain.textContent = "Tableau Fourniture crée et insérer en JavaScript";
newMain.id = "Fourniture";
b.appendChild(newMain);

console.log(newMain);

// Variable - Fonction - > APi Déclaration
(async function() {
    const articles = await getArticles();
    //console.log(articles);
    for (let i in articles) {
        console.log(articles[i]);
        afficherArticle(articles[i]);
    }
})();

async function getArticles() {
    try {
        let res = await fetch("http://localhost:3000/api/furniture");
        return await res.json();
    } catch (error) {
        alert(error);
    }
}

function afficherArticle(article) {
    let articleTag = document.createElement("article");
    let titleTag = document.createElement("h2");
    titleTag.textContent = article.name;
    articleTag.appendChild(titleTag);
    newMain.appendChild(articleTag);
}