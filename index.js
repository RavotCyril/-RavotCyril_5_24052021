// Variable générale ( toute la page )

let fourniture;
let main;

// Variable -> Balise Main Déclaration

let b = document.body;
console.log(b);
let newMain = document.createElement("Main");
let newTexte = document.createTextNode("Tableau Fourniture");

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
// Déclaration - Variable et Fonction - > Articles + H2 : Object, Id , Name, Prix, Description, ...

function afficherArticle(article) {
    let articleTag = document.createElement("article");
    let titleTag = document.createElement("h2");
    let figureTag = document.createElement("figure");
    let SectionTag = document.createElement("section");
    let DivTag = document.createElement("div");
    let Div2Tag = document.createElement("div");
    let ImageTag = document.createElement("img");
    let figcaptionTag = document.createElement("figcaption");
    let paragrapheTag = document.createElement("p");
    let paragraphe2Tag = document.createElement("p");
    // Appel - Variable et Fonction - > Id

    articleTag.id = article._id;

    // Appel - Variable et Fonction - > Name + Description Figcaption

    titleTag.textContent = article.name;
    figcaptionTag.textContent = article.description;

    // Appel - Variable et Fonction - > Titre h2 + Figure
    newMain.appendChild(SectionTag);
    newMain.appendChild(Div2Tag);
    Div2Tag.appendChild(articleTag);
    articleTag.appendChild(titleTag);
    articleTag.appendChild(figureTag);

    // Appel - Variable et Fonction - >  Image + Figcaption

    ImageTag.src = article.imageUrl;
    figureTag.appendChild(DivTag);
    DivTag.appendChild(ImageTag);
    figureTag.appendChild(figcaptionTag);

    // Appel - Variable et Fonction - > Price

    paragrapheTag.textContent = article.price;
    articleTag.appendChild(paragrapheTag);

    // Appel - Variable et Fonction - > varnish

    paragraphe2Tag.textContent = article.varnish;
    articleTag.appendChild(paragraphe2Tag);
}