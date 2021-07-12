// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    // Déclaration de toutes les variables de la page HTML

    let b = document.body;
    let header = document.createElement("header");
    let newMain = document.createElement("Main");
    let DivLogo = document.createElement("div");
    let imageLogo = document.createElement("img");
    let h1Tag = document.createElement("h1");
    let Nav = document.createElement("nav");
    let div = document.createElement("div");
    let Ul = document.createElement("ul");
    let liPanier = document.createElement("li");
    let liCommande = document.createElement("li");
    let pPanierTag = document.createElement("p");
    let aPanier = document.createElement("a");
    let pCommandeTag = document.createElement("p");
    let aCommande = document.createElement("a");
    let buttonNav = document.createElement("button");
    let spanNav = document.createElement("span");

    //--------------------- Appel de toutes les variables pour créer les balises HTML----------------------------------------------

    //  Header - h1 - Div-Logo - Nav - Logo - Main

    header.className = "container-fluid";
    newMain.className = "container-fluid";
    b.appendChild(header);
    b.appendChild(newMain);
    h1Tag.textContent = "Catalogue : Meubles en chêne";
    DivLogo.className = "row";
    imageLogo.className = "col-3";
    imageLogo.src = "images/Orinoco.png";
    header.appendChild(h1Tag);
    header.appendChild(DivLogo);
    Nav.className = "navbar navbar-expand-md bg-dark navbar-dark";
    DivLogo.appendChild(Nav);
    Nav.appendChild(imageLogo);

    // Navigation - div - ul - Li - Liens a.
    // Navigation- Bouton-Menu  Liens Panier - commande + Bouton responsive avec taille de petite taille.

    buttonNav.className = "navbar-toggler";
    buttonNav.type = "button";
    buttonNav.setAttribute("data-toggle", "collapse");
    buttonNav.setAttribute("data-target", "#Visibilite");
    spanNav.className = "navbar-toggler-icon";
    Nav.appendChild(buttonNav);
    buttonNav.appendChild(spanNav);

    div.id = "Visibilite";
    div.className = "collapse navbar-collapse d-flex justify-content-end";
    Nav.appendChild(div);
    div.appendChild(Ul);
    Ul.className = "navbar-nav";
    Ul.appendChild(liPanier);
    Ul.appendChild(liCommande);
    liPanier.appendChild(pPanierTag);
    pPanierTag.className = "text-light";
    pPanierTag.appendChild(aPanier);
    liCommande.appendChild(pCommandeTag);
    pCommandeTag.className = "text-light";
    pCommandeTag.appendChild(aCommande);

    // Navigation Liens a : Panier - commande + Bouton responsive avec taille de petite taille.

    aPanier.textContent = "Panier";
    aPanier.className = "text-primary text-decoration-none m-3";
    liPanier.className = "Navigation-Panier-Commande nav-item ";
    aPanier.setAttribute("href", "panier.html");
    aCommande.textContent = "Commande";
    aCommande.className = "text-primary text-decoration-none m-3";
    liCommande.className = "Navigation-Panier-Commande nav-item";
    aCommande.setAttribute("href", "confirmation-de-commande.html");

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