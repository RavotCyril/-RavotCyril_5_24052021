// Variable générale ( toute la page )

let b = document.body;
let newMain = document.createElement("Main");
let DivLogo = document.createElement("div");
let ImageLogo = document.createElement("img");
let h1Tag = document.createElement("h1");

b.appendChild(newMain);
DivLogo.className = "Logo";
newMain.appendChild(h1Tag);
h1Tag.textContent = "Catalogue : Meubles en chêne";
ImageLogo.src = "Orinoco.png";
newMain.appendChild(DivLogo);
DivLogo.appendChild(ImageLogo);



let SectionTag = document.createElement("section");

SectionTag.id = "Fourniture";
SectionTag.className = "Content";
newMain.appendChild(SectionTag);
b.appendChild(newMain);
// Variable -> Balise Main Déclaration

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
    let DivTag = document.createElement("div");
    let ImageTag = document.createElement("img");
    let figcaptionTag = document.createElement("figcaption");
    let paragrapheTag = document.createElement("p");

    // Appel - Variable et Fonction - > Id

    articleTag.id = article._id;
    articleTag.className = "Article";

    // Créer un élément style

    // Appel - Variable et Fonction - > Name + Description Figcaption

    titleTag.textContent = article.name;

    // Appel - Variable et Fonction - > Titre h2 + Figure
    SectionTag.appendChild(articleTag);
    articleTag.appendChild(titleTag);
    articleTag.appendChild(figureTag);

    // Appel - Variable et Fonction - >  Image + Figcaption

    ImageTag.src = article.imageUrl;
    DivTag.className = "Div-Article";
    figureTag.appendChild(DivTag);
    DivTag.appendChild(ImageTag);
    figureTag.appendChild(figcaptionTag);

    // Appel - Variable et Fonction - > Price

    let Price = article.price;

    // on affiche une devise avec le style "currency"

    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(Price);
    paragrapheTag.textContent = Price;
    figcaptionTag.appendChild(paragrapheTag);
}