// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    let b = document.body;
    let newMain = document.createElement("Main");
    let DivLogo = document.createElement("div");
    let ImageLogo = document.createElement("img");
    let h1Tag = document.createElement("h1");
    let Nav = document.createElement("nav");
    let Ul = document.createElement("ul");
    let liPanier = document.createElement("li");
    let liCommande = document.createElement("li");
    let aPanier = document.createElement("a");
    let aCommande = document.createElement("a");

    b.appendChild(newMain);
    DivLogo.className = "Logo";
    newMain.appendChild(h1Tag);
    h1Tag.textContent = "Catalogue : Meubles en chêne";
    ImageLogo.src = "images/Orinoco.png";
    newMain.appendChild(DivLogo);
    DivLogo.appendChild(ImageLogo);
    DivLogo.appendChild(Nav);
    Nav.className = "Navigation-Panier-Commande";
    Nav.appendChild(Ul);
    Ul.className = "Nav-Liste";
    Ul.appendChild(liPanier);
    Ul.appendChild(liCommande);
    liPanier.appendChild(aPanier);
    liCommande.appendChild(aCommande);
    aPanier.textContent = "Panier";
    liPanier.className = "Panier-Commande";
    aPanier.setAttribute("href", "panier.html");
    aCommande.textContent = "Commande";
    liCommande.className = "Panier-Commande";
    aCommande.setAttribute("href", "confirmation-de-commande.html");

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
    let ImageTag = document.createElement("img");
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
    articleTag.appendChild(titleTag);
    articleTag.appendChild(figureTag);

    // Appel - Variable et Fonction - >  Image + Figcaption

    ImageTag.src = article.imageUrl;
    DivTag.className = "Div-Article";
    figureTag.appendChild(DivTag);
    DivTag.appendChild(ImageTag);
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