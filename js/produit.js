(async function() {
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

    let idproduit = getId();
    const article = await getArticles(idproduit);
    //console.log(articles);

    afficherArticle(sectionTag, article);
    sectionTag.id = "Fourniture";
    sectionTag.className = "Content";
    newMain.appendChild(sectionTag);
    b.appendChild(newMain);
})();

// Methode Get Permet de récupérer l'?id= des paramètres de l'URL, l'identifiant

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

    BouttonTag.className = "Form-Produit";
    InputTag.className = "Boutton-Produit";
    InputTag.type = "button";
    InputTag.value = "Ajouter au Panier";
    InputTag.addEventListener("click", updateInputTag);
}
// Permet de créer la récupération de L'iD selectionné sur la page catalogue et la quantité dans le panier.  Clef / Valeur. Get Item.

function updateInputTag() {
    console.log(article._id, "1");
    let cart = JSON.parse(localStorage.getItem("cart"));
    var oldArticle = 0;
    //cart => {"article1" : qty, "article2" :  qty, "article3" : qty....}
    if (cart != undefined) {
        for (var key in cart) {
            if (key == article._id) {
                var value = parseInt(cart[key]);
                value += 1;
                cart[key] = value;
                oldArticle = 1;
            }
        }
        if (oldArticle == 0) {
            cart[article._id] = "1";
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        localStorage.setItem("cart", JSON.stringify({ article._id: "1" }));
    }
    // Response  Html Request Fetch

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
// // Personnalisation -> Ajoute le Produit dans le Panier avec la couleur sélectionné par l'utilisateur.

// RecupererIdQuantite(vernisSelected) {
//     let vernisSelectionnePanier = Json.parse(
//         localStorage.getItem("vernisSelectionnePanier")
//     );
//     if (vernisSelectionnePanier === undefined) {
//         vernisSelectionnePanier = [];
//     }

//     //  Vernis sélectionné et ajouté au local Storage.

//     let vernis = new Product(id, vernisSelected);

//     vernisSelectionnePanier.push(vernis);
//     localStorage.setItem(
//         "vernisSelectionnePanier",
//         JSON.stringify(vernisSelectionnePanier)
//     );