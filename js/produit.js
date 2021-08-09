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
    let divImageTag = document.createElement("div");
    let imageTag = document.createElement("img");
    let figcaptionTag = document.createElement("figcaption");
    let prixTag = document.createElement("p");
    let descriptionTag = document.createElement("p");

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

    imageTag.src = article.imageUrl;
    divImageTag.className = "Div-Image";
    figureTag.appendChild(divImageTag);
    divImageTag.appendChild(imageTag);
    figureTag.appendChild(figcaptionTag);

    // Appel - Variable et Fonction - > description

    figcaptionTag.appendChild(descriptionTag);
    descriptionTag.className = "Produit-Figcaption-Description";
    descriptionTag.textContent = article.description;


    // Déclaration - Variable et constante - > Price

    let price = article.price;

    // on affiche une devise avec le style "currency"  et  on se limite ici à deux chiffres  l'euro et les centimes.

    let price2 = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: "0",
    }).format(Math.round(price / 100));

    // Appel - > Price

    prixTag.textContent = price2;
    prixTag.className = "Prix";
    figcaptionTag.appendChild(prixTag);

    // Appel- personnalisation - Select > Varnish

    let spanLabelSelect = document.createElement("span");
    let labelTag = document.createElement("label");
    let selectTag = document.createElement("select");
    figcaptionTag.appendChild(spanLabelSelect);
    spanLabelSelect.appendChild(labelTag);
    spanLabelSelect.appendChild(selectTag);
    labelTag.forName = "Meuble-select";
    labelTag.textContent = "Choisir la couleur";
    labelTag.className = "Personnalisation";
    selectTag.name = "Meuble";
    selectTag.id = "Meuble-Select";
    selectTag.className = "Taille-Select";
    spanLabelSelect.className = "Taille-Span"



    for (let i in article.varnish) {
        // console.log(article.varnish[i]);
        let optionTag = document.createElement("option");
        selectTag.appendChild(optionTag);
        optionTag.value = article.varnish[i];
        optionTag.text = article.varnish[i];
    }
    // Permet de créer les variables et la fonction du  bouton panier

    let bouttonTag = document.createElement("form");
    let inputTag = document.createElement("input");
    bouttonTag.className = "Form-Produit";
    inputTag.className = "Boutton-Produit";
    inputTag.type = "button";
    inputTag.value = "Ajouter au Panier";
    articleTag.appendChild(bouttonTag);
    bouttonTag.appendChild(inputTag);

    // Permet de créer la récupération de L'iD selectionné sur la page catalogue et la quantité dans le panier.  Clef / Valeur. Get Item.
    // Pour mémoriser des valeurs complexes et l'afficher, on utilisera le format JSON (JavaScript Objet Notation)  JSON.Parse.
    // on sérialise (ou linéarise)
    //  l’objet avec la syntaxe JSON.stringify().Cette opération transforme l’objet en JSON (une chaîne de caractères dans le panier.)
    inputTag.addEventListener("click", function() {
        console.log(article._id, "1");
        console.log(price2);
        let cart = JSON.parse(localStorage.getItem("cart"))
        console.log(cart);
        let oldArticle = 0;
        if (cart !== null) {
            for (let key in cart) {
                if (key == article._id) {
                    let value = parseInt(cart[article._id]);
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
            let cart = {};
            cart[article._id] = "1";
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    })
}