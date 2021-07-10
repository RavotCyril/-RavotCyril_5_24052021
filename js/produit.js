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

    let idproduit = getId();
    const article = await getArticles(idproduit);
    //console.log(articles);

    afficherArticle(sectionTag, article);
    sectionTag.id = "Fourniture";
    sectionTag.className = "Content";
    newMain.appendChild(sectionTag);
    b.appendChild(newMain);
})();

// Permet de récupérer l'?id= des paramètres de l'URL, l'identifiant

function getId() {
    const param = window.location.search;
    const id = param.replace("?id=", "");
    return id;
}

async function getArticles(id) {
    try {
        let res = await fetch("http://localhost:3000/api/furniture/" + id);
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
    let prixTag = document.createElement("p");
    let DescriptionTag = document.createElement("p");

    // Appel - Variable et Fonction - > Id

    articleTag.id = article._id;
    articleTag.className = "Article";

    // Créer un élément style

    // Appel - Variable et Fonction - > Name + Description Figcaption

    titleTag.textContent = article.name;

    // Appel - Variable et Fonction - > Titre h2 + Figure

    sectionTag.appendChild(articleTag);
    articleTag.appendChild(titleTag);
    articleTag.appendChild(figureTag);

    // Appel - Variable et Fonction - >  Image + Figcaption

    ImageTag.src = article.imageUrl;
    DivTag.className = "Div-Article";
    figureTag.appendChild(DivTag);
    DivTag.appendChild(ImageTag);
    figureTag.appendChild(figcaptionTag);

    // Appel - Variable et Fonction - > description

    figcaptionTag.appendChild(DescriptionTag);
    DescriptionTag.className = "Produit-Figcaption-Description";
    DescriptionTag.textContent = article.description;

    // Déclaration - Variable et constante - > Price

    let Price = article.price;

    // on affiche une devise avec le style "currency"  et  on se limite ici à deux chiffres  l'euro et les centimes.

    let Price2 = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: "0",
    }).format(Math.round(Price / 100));

    // Appel- constante - > Price

    prixTag.textContent = Price2;
    prixTag.className = "Prix";
    figcaptionTag.appendChild(prixTag);

    // Appel- personnalisation - Select > Varnish

    let labelTag = document.createElement("label");
    let selectTag = document.createElement("select");
    figcaptionTag.appendChild(labelTag);
    figcaptionTag.appendChild(selectTag);
    labelTag.forName = "Meuble-select";
    labelTag.textContent = "Choisir la couleur";
    labelTag.className = "Personnalisation";
    selectTag.name = "Meuble";
    selectTag.id = "Meuble-Select";

    for (let i in article.varnish) {
        // console.log(article.varnish[i]);
        let optionTag = document.createElement("option");
        selectTag.appendChild(optionTag);
        optionTag.value = article.varnish[i];
        optionTag.text = article.varnish[i];
    }
    // Permet de créer les variables et la fonction du  bouton panier

    let BouttonTag = document.createElement("form");
    let InputTag = document.createElement("input");

    articleTag.appendChild(BouttonTag);
    BouttonTag.appendChild(InputTag);

    BouttonTag.className = "form";
    InputTag.className = "Boutton-Produit";
    InputTag.type = "submit";
    InputTag.value = "Ajouter au Panier";
    InputTag.addEventListener("click", updateInputTag);

    function updateInputTag() {
        if (remplissageStockage === "panier.html") {} else {
            remplissageStockage = "produit.html";
        }
    }
    // Ajoute le Produit dans le Panier avec la couleur sélectionné par l'utilisateur.

    function remplissageStockage(CouleurSelected) {
        let produitSelectionnePanier = Json.parse(
            localStorage.getItem("produitSelectionnePanier")
        );
        if (produitSelectionnePanier === undefined) {
            produitSelectionnePanier = [];
        }

        //  Produit sélectionné et ajouté au local Storage.

        let produit = new Product(id, CouleurSelected);

        produitSelectionnePanier.push(produit);
        localStorage.setItem(
            "produitSelectionnePanier",
            JSON.stringify(produitSelectionnePanier)
        );
    }