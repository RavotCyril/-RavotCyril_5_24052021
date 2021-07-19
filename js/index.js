// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function getAllParaElems() {
    // Déclaration de toutes les variables de la page HTML

    let b = document.body;
    let newMain = document.createElement("Main");
    let h1Tag = document.createElement("h1");
    document.querySelector("header");

    //--------------------- Appel de toutes les variables pour créer les balises HTML----------------------------------------------

    //  Header - h1 - Div-Logo - Nav - Logo - Main

    b.appendChild(newMain);
    h1Tag.textContent = "Catalogue : Meubles en chêne";
    b.appendChild(h1Tag);

    //---------------------- Fin Appel de toutes les variables pour créer les balises HTML---------------------------------------------

    // Variable - Fonction - > APi Déclaration

    let sectionTag = document.createElement("section");

    const articles = await getArticles();
    //console.log(articles);
    for (let i in articles) {
        console.log(articles[i]);
        afficherArticle(sectionTag, articles[i]);
    }
    sectionTag.id = "Fourniture";
    sectionTag.className = "Content";
    newMain.appendChild(sectionTag);
    b.appendChild(newMain);
})();
// Fonction pour appeller les articles de L'API.

async function getArticles() {
    try {
        let res = await fetch("http://localhost:3000/api/furniture");
        return await res.json();
    } catch (error) {
        alert(error);
    }
}
// Déclaration - Variable et Fonction - > Articles + H2 : Object, Id , Name, Prix, Description, ...

function afficherArticle(sectionTag, article) {
    let articleTag = document.createElement("article");
    let titleTag = document.createElement("h2");
    let figureTag = document.createElement("figure");
    let DivTag = document.createElement("div");
    let imageTag = document.createElement("img");
    let figcaptionTag = document.createElement("figcaption");
    let paragrapheTag = document.createElement("p");
    let LiensTag = document.createElement("a");

    // Appel - Variable et Fonction - > Id

    articleTag.id = article._id;
    articleTag.className = "Article";

    // Créer un élément style

    // Appel - Variable et Fonction - > Name + Description Figcaption

    titleTag.textContent = article.name;

    // Appel - Liens -> Id produit - > Id

    LiensTag.setAttribute("href", "produit.html?id=" + article._id);

    // Appel - Liens <a> -> Page Index + Classe <a>.
    // Appel - Variable et Fonction - > Titre h2 + Figure

    LiensTag.className = "Liens";
    sectionTag.appendChild(LiensTag);
    LiensTag.appendChild(articleTag);
    titleTag.className = "my-5";
    articleTag.appendChild(titleTag);
    articleTag.appendChild(figureTag);

    // Appel - Variable et Fonction - >  Image + Figcaption

    imageTag.src = article.imageUrl;
    DivTag.className = "Div-Article";
    figureTag.appendChild(DivTag);
    DivTag.appendChild(imageTag);
    figureTag.appendChild(figcaptionTag);

    // Déclaration - Variable et constante - > Price

    let Price = article.price;

    // on affiche une devise avec le style "currency"  et  on se limite ici à deux chiffres  l'euro et les centimes.

    let Price2 = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: "0",
    }).format(Math.round(Price / 100));

    // Appel- constante - > Price

    paragrapheTag.textContent = Price2;
    figcaptionTag.appendChild(paragrapheTag);
}
// Event Bouton Menu - Disparaitre - Apparaitre.

function t() {
    "A" === t.currentTarget.tagName && t.preventDefault();
    let n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function() {
        let t = g(this),
            e = t.data(dt) ? "toggle" : n.data();
        wt._jQueryInterface.call(t, e);
    });
}