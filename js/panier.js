// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    // Déclaration de toutes les variables de la page HTML

    let b = document.body;
    document.querySelector("header");
    let newMain = document.createElement("Main");
    let sectionTag = document.createElement("section");
    let articleTag = document.createElement("article");
    let h1Tag = document.createElement("h1");
    let produitSelectionne = document.createElement("p");
    let quantiteSelectionne = document.createElement("p");
    let prixDuProduitSelectionne = document.createElement("p");
    let prixTotalDuPanier = document.createElement("p");
    let pTag = document.createElement("p");

    let formContactTag = document.createElement("form");
    let inputFirstNameTag = document.createElement("input");
    let firstNameValid = document.createElement("span");
    firstNameValid.className = 'inputFirstNameTag-container';
    let labelFirstName = document.createElement("label");

    let inputLastNameTag = document.createElement("input");
    let lastNameValid = document.createElement("span");
    lastNameValid.className = 'inputLastNameTag-container';
    let labelLastName = document.createElement("label");

    let inputAdresseTag = document.createElement("input");
    let adresseValid = document.createElement("span");
    let errorAdresseMiss = document.createElement("span");
    let labelAdress = document.createElement("label");

    let inputCityTag = document.createElement("input");
    let cityValid = document.createElement("span");
    let errorCityMiss = document.createElement("span");
    let labelCity = document.createElement("label");

    let inputEmailTag = document.createElement("input");
    let emailValid = document.createElement("span");
    let errorEmailMiss = document.createElement("span");
    let labelEmail = document.createElement("label");

    let inputButtonValidationCommandeTag = document.createElement("input");


    // Appel des classes- Boostrap- TextContent- Id des balises html qui construise le squelette de la page.

    newMain.className = "container-fluid";
    b.appendChild(newMain);
    sectionTag.className = "row";
    h1Tag.className = "col-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Panier : Détails";
    produitSelectionne.textContent = "Produit Selectionné";
    quantiteSelectionne.textContent = "Quantité Selectionné";
    prixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
    prixTotalDuPanier.textContent = "Prix Total Du Panier";
    articleTag.className = "col-12 Article-Panier-Détails";
    pTag.textContent = "Veuillez remplir ce formulaire pour valider votre commande";
    formContactTag.id = "Contact";
    formContactTag.setAttribute("method", "post");
    formContactTag.setAttribute("action", "confirmation-de-commande.html");
    formContactTag.className = "col-sm-4 col-md-6 mx-auto text-center";

    // Appel des balises en Html pour construire le squelette de la page.

    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
    articleTag.appendChild(produitSelectionne);
    articleTag.appendChild(quantiteSelectionne);
    articleTag.appendChild(prixDuProduitSelectionne);
    articleTag.appendChild(prixTotalDuPanier);
    sectionTag.appendChild(pTag);
    sectionTag.appendChild(formContactTag);

    // Formulaire Prénom

    inputFirstNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    // inputFirstNameTag.setAttribute("onkeyup", "return limitlength(this, 20)");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "First-Name";
    labelFirstName.name = "First-Name";
    formContactTag.appendChild(labelFirstName);
    formContactTag.appendChild(inputFirstNameTag);
    formContactTag.appendChild(firstNameValid);
    //formContactTag.appendChild(errorFirstNameMiss);

    // Formulaire Nom

    inputLastNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    labelLastName.htmlFor = "LastName";
    formContactTag.appendChild(labelLastName);
    formContactTag.appendChild(inputLastNameTag);
    formContactTag.appendChild(lastNameValid);

    // Formulaire Adresse

    inputAdresseTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "Adresse";
    formContactTag.appendChild(labelAdress);
    formContactTag.appendChild(inputAdresseTag);
    formContactTag.appendChild(adresseValid);
    formContactTag.appendChild(errorAdresseMiss);

    // Formulaire Ville

    inputCityTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "Ville";
    formContactTag.appendChild(labelCity);
    formContactTag.appendChild(inputCityTag);
    formContactTag.appendChild(cityValid);
    formContactTag.appendChild(errorCityMiss);

    // Formulaire  Email

    inputEmailTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    labelEmail.htmlFor = "Email";
    formContactTag.appendChild(labelEmail);
    formContactTag.appendChild(inputEmailTag);
    formContactTag.appendChild(emailValid);
    formContactTag.appendChild(errorEmailMiss);

    // Page Panier -> Boutton Validation Commande

    inputButtonValidationCommandeTag.id = "Validation Commande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.type = "submit";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    formContactTag.appendChild(inputButtonValidationCommandeTag);

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    console.log(inputs);

    const errorDisplay = (tag, message, valid) => {
        const container = document.querySelector("." + tag + "-container");
        //const span = document.querySelector("." + tag + "-container > span");

        if (!valid) {
            container.classList.add("error");
            container.textContent = message;
        } else {
            container.classList.remove("error");
            container.textContent = message;
        }
    };
    const inputFirstNameTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay("inputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères");
            inputFirstNameTag = null;
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorDisplay("inputFirstNameTag", "Le prénom ne doit pas contenir de caractères spéciaux");
            inputFirstNameTag = null;
        } else {
            errorDisplay("inputFirstNameTag", "", true);
            inputFirstNameTag = value;
        }
    }
    const inputLastNameTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay("inputLastNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères");
            inputLastNameTag = null;
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorDisplay("inputFirstNameTag", "Le prénom ne doit pas contenir de caractères spéciaux");
            inputLastNameTag = null;
        } else {
            errorDisplay("inputLastNameTag", "", true);
            inputLastNameTag = value;
        }
    }
    const inputAdresseTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay("inputAdresseTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères");
            inputAdresseTag = null;
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorDisplay(
                "inputAdresseTag", "Le prénom ne doit pas contenir de caractères spéciaux");
            inputAdresseTag = null;
        } else {
            errorDisplay("inputAdresseTag", "", true);
            inputAdresseTag = value;
        }
    }

    const inputCityTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorDisplay("inputCityTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères");
            inputCityTag = null;
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorDisplay("inputCityTag", "Le prénom ne doit pas contenir de caractères spéciaux");
            inputCityTag = null;
        } else {
            errorDisplay("inputCityTag", "", true);
            inputCityTag = value;
        }
    }

    const inputEmailTagChecker = (value) => {
        if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
            errorDisplay("inputEmailTag", "Le mail n'est pas valide");
            inputEmailTag = null;
        } else {
            errorDisplay("inputEmailTag", "", true);
            inputEmailTag = value;
        }
    };
    /* Avec l'input du bouton Validation Commande faire une fonction 
               Qui contrôle si tout les inputs (champs) du formulaire ont bien été validés partout 
               Pour ensuite pouvoir cliquer sur le bouton validation Commande et envoyer le formulaire.*/

    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            console.log(e.target.id);
            switch (e.target.id) {

                case "First-Name":
                    inputFirstNameTagChecker(e.target.value);
                    break;
                case "LastName":
                    inputLastNameTagChecker(e.target.value);
                    break;
                case "Adresse":
                    inputAdresseTagChecker(e.target.value);
                    break;
                case "Ville":
                    inputCityTagChecker(e.target.value);
                    break;
                case "Email":
                    inputEmailTagChecker(e.target.value);
                    break;
            }
        });
    });
    formContactTag.addEventListener("submit", (e) => {
        e.preventDefault();

        if (inputFirstNameTag && inputLastNameTag && inputAdresseTag && inputCityTag && inputEmailTag) {
            const data = {
                inputFirstNameTag,
                inputLastNameTag,
                inputAdresseTag,
                inputCityTag,
                inputEmailTag,
            };
            console.log(data);

            inputs.forEach((input) => (input.value = ""));


            alert("Inscription validée !");
        } else {
            alert("veuillez remplir correctement les champs");
        }
    });
    // Permet de créer la récupération et l'affichage des produits ajoutés au panier via la page produit.  Clef / Valeur. set Item.
    // Inversement de la syntaxe par rapport à la page produit pour la lecture, 
    // la syntaxe JSON.parse() reforme l’objet à partir de la chaîne linéarise et l'affiche sur la page.
    //  Transforme le Json en objet java Script.
})();

// articleTag.textContent = localStorage.cart

// let cart = localStorage.getItem('cart');
//         Storage.prototype.getObject = function(cart) {
//             let value = this.getItem(cart);
//             return value && JSON.parse(value);
//         }
//         console.log('cart: ', JSON.parse(cart));

// Permet de créer la méthode Post. Pour envoyer les données du formulaire à la page Confirmation de commande.

// let json = {
//     json: JSON.stringify({
//         a: 1,
//         b: 2
//     }),
//     delay: 3
// };
// fetch('/echo/json/', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(result) {
//         alert(result);
//     })
//     .catch(function(error) {
//         console.log('Request failed', error);
//     });

//             errorEmailMiss.style.display = 'flex';
//             errorEmailMiss.style.justifyContent = 'center';