    // Function Principal du squelette html de la page

    (async function() {
        // Déclaration de toutes les variables de la page HTML
        let b = document.body;
        document.querySelector("header");
        let newMain = document.createElement("Main");
        let sectionTag = document.createElement("section");
        let idproduit = getId();
        let h1Tag = document.createElement("h1");

        //--------------------- Appel de toutes les variables pour créer les balises HTML----------------------------------------------
        //  NewMain - SectionTag - h1Tag

        sectionTag.id = "Fourniture";
        sectionTag.className = "Content";
        h1Tag.textContent = "Catalogue : Meubles en chêne";

        b.appendChild(h1Tag);
        b.appendChild(newMain);
        newMain.appendChild(sectionTag);

        //---------------------- Fin Appel de toutes les variables pour créer les balises HTML---------------------------------------------

        /*Constante article. Qui permet de récupérer avec la function getARticle 
        le résultat de la méthode Fetch pour récupérer les donnéees de l'API  */

        const article = await getArticles(idproduit);
        // console.log(article);

        // Fonction - > APi Déclaration

        afficherArticle(sectionTag, article);

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

    // Déclaration - Variable et Fonction - > Articles - H2 -figure - div - img -figcaption -p : Object, Id , imageUrl Name, Prix, Description, ...

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
        let spanMessageAjouterAuPanierTag = document.createElement("span");
        bouttonTag.className = "Form-Produit";
        inputTag.className = "Boutton-Produit";
        spanMessageAjouterAuPanierTag.className = "Message-Ajout-Panier-Validation-Erreur";
        inputTag.type = "button";
        inputTag.value = "Ajouter au Panier";
        articleTag.appendChild(bouttonTag);
        bouttonTag.appendChild(inputTag);
        bouttonTag.appendChild(spanMessageAjouterAuPanierTag);

        /* Créaction de la variable validTag avec des paramètres classe, message et valid suivis d'une fonction.
         Qui permet d'afficher une alerte " Article ajouté au panier "" à chaque clic */

        let validTag = (tag, message, valid) => {
            const container = document.querySelector("." + tag);

            if (valid) {
                container.classList.add("valid");
                container.textContent = message;
            }

        }

        /* Permet de créer la récupération de L'iD selectionné sur la page catalogue et la quantité dans le panier.  Clef / Valeur. Get Item.
            Pour mémoriser des valeurs complexes et l'afficher, on utilisera le format JSON (JavaScript Objet Notation)  JSON.Parse.
            on sérialise (ou linéarise)
         
        inputTag.addEventListener("click", function() {
            console.log(article._id, "1");

            /* Déclaration de la variable " cart "dans laquelle on met les valeurs du localStorage stocké.
            A Savoir  la key "cart" avec les "values" -> Id + quantités  */
        // TODO : recupérer la liste d'article du panier
        let oldArticle = 0
        inputTag.addEventListener("click", function() {
            let cart = JSON.parse(localStorage.getItem("cart"))
            if (cart !== null) {
                if (cart.find(x => x.id_produit == article._id)) {
                    let cart = [];
                    cart.push({ "id_produit": article._id, "varnish": article.varnish, "name": article.name, "prix": article.price, "quantite": 1 });
                    oldArticle = 1;
                    validTag("Message-Ajout-Panier-Validation-Erreur", alert("Article ajouté au panier"), true);
                }
                if (oldArticle == 0) {
                    cart = [];
                    cart.push({ "id_produit": article._id, "varnish": article.varnish, "name": article.name, "prix": article.price, "quantite": 1 });
                    localStorage.setItem("cart", JSON.stringify(cart));
                } else {
                    cart = [];
                    cart.push({ "id_produit": article._id, "prix": article.price, "quantite": 1 });

                    /* l’objet avec la syntaxe JSON.stringify().La méthode JSON.stringify() convertit les objets JavaScript en chaîne JSON
                      et stock les données dans local storage  ( l'inverse de JSON.Parse )*/
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
        })
    }