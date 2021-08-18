// Squellette de la page  Html. 

let b = document.body;
document.querySelector("header");
let newMain = document.createElement("Main");
let sectionTag = document.createElement("section");
let articleTag = document.createElement("article");
let h1Tag = document.createElement("h1");
let pTag = document.createElement("p");
newMain.className = "container-fluid";
sectionTag.className = "row";
h1Tag.className = "col-12 my-4 text-center";
pTag.className = "font-weight-bolder my-4 text-center";
h1Tag.textContent = "Panier : Détails";
articleTag.className = "Article-Panier-Détails container-fluid px-0";
articleTag.id = "DonneesPanier";
pTag.textContent = "Veuillez remplir ce formulaire pour valider votre commande";
b.appendChild(newMain);
newMain.appendChild(sectionTag);
sectionTag.appendChild(h1Tag);
sectionTag.appendChild(articleTag);
sectionTag.appendChild(pTag);

// Fonction du formulaire.

function formulaire() {


    let formContactTag = document.createElement("form");
    let inputFirstNameTag = document.createElement("input");
    let firstNameValid = document.createElement("span");
    let labelFirstName = document.createElement("label");

    let inputLastNameTag = document.createElement("input");
    let lastNameValid = document.createElement("span");
    let labelLastName = document.createElement("label");

    let inputAdresseTag = document.createElement("input");
    let adresseValid = document.createElement("span");
    let labelAdress = document.createElement("label");

    let inputCityTag = document.createElement("input");
    let cityValid = document.createElement("span");
    let labelCity = document.createElement("label");

    let inputEmailTag = document.createElement("input");
    let emailValid = document.createElement("span");
    let labelEmail = document.createElement("label");

    let inputButtonValidationCommandeTag = document.createElement("input");


    // Appel des classes- Boostrap- TextContent- Id des balises html qui construise le squelette de la page du formulaire.

    firstNameValid.className = 'ClassErrorInputFirstNameTag';
    lastNameValid.className = 'ClassErrorInputLastNameTag';
    adresseValid.className = 'ClassErrorInputAdresseTag';
    cityValid.className = 'ClassErrorInputCityTag';
    emailValid.className = 'ClassErrorInputMailTag d-flex justify-content-center';
    formContactTag.id = "Contact";
    formContactTag.setAttribute("method", "post");
    formContactTag.setAttribute("action", "confirmation-de-commande.html");
    formContactTag.className = "col-sm-4 col-md-6 mx-auto text-center";


    // Formulaire Prénom

    inputFirstNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputFirstNameTag.id = "firstName";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    inputFirstNameTag.name = "firstName";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "firstName";
    labelFirstName.name = "firstName";
    sectionTag.appendChild(formContactTag);
    formContactTag.appendChild(labelFirstName);
    formContactTag.appendChild(inputFirstNameTag);
    formContactTag.appendChild(firstNameValid);

    // Formulaire Nom

    inputLastNameTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputLastNameTag.id = "lastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "lastName";
    inputLastNameTag.type = "text";
    labelLastName.htmlFor = "lastName";
    formContactTag.appendChild(labelLastName);
    formContactTag.appendChild(inputLastNameTag);
    formContactTag.appendChild(lastNameValid);

    // Formulaire Adresse

    inputAdresseTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputAdresseTag.id = "adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "adresse";
    formContactTag.appendChild(labelAdress);
    formContactTag.appendChild(inputAdresseTag);
    formContactTag.appendChild(adresseValid);

    // Formulaire Ville

    inputCityTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputCityTag.id = "ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "ville";
    formContactTag.appendChild(labelCity);
    formContactTag.appendChild(inputCityTag);
    formContactTag.appendChild(cityValid);

    // Formulaire  Email

    inputEmailTag.className = "Input-Page-Panier Largeur-Input col-12 my-4 mx-auto";
    inputEmailTag.id = "email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "email";
    inputEmailTag.type = "email";
    labelEmail.htmlFor = "email";
    formContactTag.appendChild(labelEmail);
    formContactTag.appendChild(inputEmailTag);
    formContactTag.appendChild(emailValid);

    // Page Panier -> Boutton Validation Commande

    inputButtonValidationCommandeTag.id = "Validation Commande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.type = "submit";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    formContactTag.appendChild(inputButtonValidationCommandeTag);

    // Constante inputs : Récupération - Sélection de tous les inputs de la page.

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    console.log(inputs);

    // Variable errorTag -> Fonction du code d'erreur avec message en cas de mauvais caractères dans les inputs.

    let errorTag = (tag, message, valid, invalid) => {
        const container = document.querySelector("." + tag);

        if (invalid) {
            container.classList.add("invalid");
            container.textContent = message;
        } else if (valid) {
            container.classList.remove("invalid");
            container.textContent = message;
        }
    };
    // Variable validTag -> Fonction du code de validation avec message en cas de données exactes.

    let validTag = (tag, message, valid, invalid) => {
        const container = document.querySelector("." + tag);

        if (valid) {
            container.classList.add("valid");
            container.textContent = message;

        } else if (invalid) {
            container.classList.remove("valid");
            container.textContent = message;
        }
    };

    // Variable inputFirstName (Prénom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputFirstNameTagChecker = (value) => {
        if (value.length > 0 && (value.length < 3 || value.length > 20)) {
            errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
            inputFirstNameTag.style.outline = "1px solid red";
            inputFirstNameTag.style.border = "1px solid red";
            firstNameValid.style.color = "red";
        } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
            errorTag("ClassErrorInputFirstNameTag", "Le prénom ne doit pas contenir de caractères spéciaux", false, true);
            inputFirstNameTag.style.outline = "1px solid red";
            inputFirstNameTag.style.border = "1px solid red";
            firstNameValid.style.color = "red";
        } else if ((value.length === 0)) {
            errorTag("ClassErrorInputFirstNameTag", "Prénom non validé le prénom doit faire entre 3 et 20 caractères", false, true);
            inputFirstNameTag.style.outline = "1px solid red";
            inputFirstNameTag.style.border = "1px solid red";
            firstNameValid.style.color = "red";
        } else {
            validTag("ClassErrorInputFirstNameTag", "Prénom validé", true, false);
            inputFirstNameTag.style.outline = "1px solid green";
            inputFirstNameTag.style.border = "1px solid green";
            firstNameValid.style.color = "green";
        }
    };
    // Variable inputLastName (Nom) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputLastNameTagChecker = (value) => {
            if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
                inputLastNameTag.style.outline = "1px solid red";
                inputLastNameTag.style.border = "1px solid red";
                lastNameValid.style.color = "red";
            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorTag("ClassErrorInputLastNameTag", "Le nom ne doit pas contenir de caractères spéciaux", false, true);
                inputLastNameTag.style.outline = "1px solid red";
                inputLastNameTag.style.border = "1px solid red";
                lastNameValid.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputLastNameTag", "Nom non validé le nom doit faire entre 3 et 20 caractères", false, true);
                inputLastNameTag.style.outline = "1px solid red";
                inputLastNameTag.style.border = "1px solid red";
                lastNameValid.style.color = "red";
            } else {
                validTag("ClassErrorInputLastNameTag", "Nom validé", true, false);
                inputLastNameTag.style.outline = "1px solid green";
                inputLastNameTag.style.border = "1px solid green";
                lastNameValid.style.color = "green";
            }
        }
        // Variable adresse: Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputAdresseTagChecker = (value) => {
            if (value.length > 0 && (value.length < 5 || value.length > 30)) {
                errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                inputAdresseTag.style.outline = "1px solid red";
                inputAdresseTag.style.border = "1px solid red";
                adresseValid.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputAdresseTag", "Adresse non validé l'adresse doit faire entre 5 et 30 caractères", false, true);
                inputAdresseTag.style.outline = "1px solid red";
                inputAdresseTag.style.border = "1px solid red";
                adresseValid.style.color = "red";
            } else {
                validTag("ClassErrorInputAdresseTag", "Adresse validé", true, false);
                inputAdresseTag.style.outline = "1px solid green";
                inputAdresseTag.style.border = "1px solid green";
                adresseValid.style.color = "green";

            }
        }
        // Variable inputCityTagChecker (ville) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputCityTagChecker = (value) => {
            if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                inputCityTag.style.outline = "1px solid red";
                inputCityTag.style.border = "1px solid red";
                cityValid.style.color = "red";
            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorTag("ClassErrorInputCityTag", "La ville ne doit pas contenir de caractères spéciaux", false, true);
                inputCityTag.style.outline = "1px solid red";
                inputCityTag.style.border = "1px solid red";
                cityValid.style.color = "red";
            } else if (value.length === 0) {
                errorTag("ClassErrorInputCityTag", "Ville non validé la ville doit faire entre 3 et 20 caractères", false, true);
                inputCityTag.style.outline = "1px solid red";
                inputCityTag.style.border = "1px solid red";
                cityValid.style.color = "red";
            } else {
                validTag("ClassErrorInputCityTag", "Ville validé", true, false);
                inputCityTag.style.outline = "1px solid green";
                inputCityTag.style.border = "1px solid green";
                cityValid.style.color = "green";
            }
        }
        // Variable inputEmailTagChecker(Email) : Fonction du code de validation ou d'erreur selon la valeur tapper dans l'input.

    let inputEmailTagChecker = (value) => {
        if (!value.match(/[a-z]+@[\w-]+\.[a-z]{2,4}$/i)) {
            errorTag("ClassErrorInputMailTag", "Le mail n'est pas validé il manque l'un des caractères indispensable suivant: @ ou .fr ou le .com", false, true);
            inputEmailTag.style.outline = "1px solid red";
            inputEmailTag.style.border = "1px solid red";
            emailValid.style.color = "red";
        } else {
            validTag("ClassErrorInputMailTag", "Email validé", true, false);
            inputEmailTag.style.outline = "1px solid green";
            inputEmailTag.style.border = "1px solid green";
            emailValid.style.color = "green";
        }
    };

    /* Avec la method ForEach sur linput du bouton validation Commande.
    Fonction qui contrôle si tout les inputs (champs) du formulaire ont bien été validés partout  avec la selection des ID des Inputs.
    Pour ensuite pouvoir cliquer sur le bouton validation Commande et envoyer le formulaire.*/

    inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            console.log(e.target.id);
            switch (e.target.id) {

                case "firstName":
                    inputFirstNameTagChecker(e.target.value);
                    break;
                case "lastName":
                    inputLastNameTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "adresse":
                    inputAdresseTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "ville":
                    inputCityTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                case "email":
                    inputEmailTagChecker(e.target.value);
                    console.log(e.target.value);
                    break;
                default:
                    nul;

            }
        });
    });

    // Avec AddEventListener. On regarde une fois que l'on envoie la demande du formulaire.
    //  Si toutes les données sont validés dans les ID de chaque inputs
    // On a ensuite un message de validation si les données sont bonnes.
    //  Ou un message d'erreur si ce n'est pas le cas.

    formContactTag.addEventListener("submit", (e) => {
        e.preventDefault();
        let datas = document.querySelectorAll('input[type="text"], input[type="email"]');
        let firstName, lastName, adresse, ville, email;
        datas.forEach((input) => {
            switch (input.name) {

                case "firstName":
                    firstName = input.value;
                    break;
                case "lastName":
                    lastName = input.value;
                    break;
                case "adresse":
                    adresse = input.value
                    break;
                case "ville":
                    ville = input.value;
                    break;
                case "email":
                    email = input.value;
                    break;
                default:
                    nul;
            }

        })
        console.log("firstName :" + firstName, "lastName : " + lastName, "adresse : " + adresse, "ville :" + ville, "email : " + email);
        if (firstName && lastName && adresse && ville && email) {
            const data = {
                firstName,
                lastName,
                adresse,
                ville,
                email,
            };
            console.log(data);

            inputs.forEach((input) => (input.value = ""));
            firstName = null;
            lastName = null;
            adresse = null;
            ville = null;
            email = null;
            alert("Inscription validée !");
        } else {
            alert("veuillez remplir correctement les champs");
        }
    });

    //  Récupération des données du panier de la page Produit. 
    //  + Création du tableau  pour l'afficher sur la page Panier.


    let data = JSON.parse(localStorage.getItem("cart"));
    console.log(data);
    let tbody = document.createElement("tbody");
    let tablePrincipal = document.createElement("table");
    let trPrincipal = document.createElement("tr");
    let trSecondaire = document.createElement("tr");
    let trTroisieme = document.createElement("tr");
    let trQuatrieme = document.createElement("tr");
    let trCinquieme = document.createElement("tr");
    let trSixieme = document.createElement("tr");
    let tdProduitSelectionne = document.createElement("td");
    let tdQuantiteSelectionne = document.createElement("td");
    let tdPrixDuProduitSelectionne = document.createElement("td");
    let tdPrixTotalDuPanier = document.createElement("td");
    tbody.className = "container-fluid border border-dark px-2 py-2";
    tablePrincipal.className = "container-fluid";
    trPrincipal.className = "border border-dark";
    tdProduitSelectionne.className = "text-center";
    tdQuantiteSelectionne.className = "text-center";
    tdPrixDuProduitSelectionne.className = "text-center";
    tdPrixTotalDuPanier.className = "text-center";
    tdProduitSelectionne.textContent = "Produit Selectionné";
    tdQuantiteSelectionne.textContent = "Quantité Selectionné";
    tdPrixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
    tdPrixTotalDuPanier.textContent = "Prix Total Du Panier";

    articleTag.appendChild(tbody);
    tbody.appendChild(tablePrincipal);
    tablePrincipal.appendChild(trPrincipal);
    tablePrincipal.appendChild(trSecondaire);
    tablePrincipal.appendChild(trTroisieme);
    tablePrincipal.appendChild(trQuatrieme);
    tablePrincipal.appendChild(trCinquieme);
    tablePrincipal.appendChild(trSixieme);
    trPrincipal.appendChild(tdProduitSelectionne);
    trPrincipal.appendChild(tdQuantiteSelectionne);
    trPrincipal.appendChild(tdPrixDuProduitSelectionne);
    trPrincipal.appendChild(tdPrixTotalDuPanier);


    /* Function d'affichage du panier pour afficher
       les données selectionnés sur la page produit sur la page Panier. */


    function panier() {
        for (let cart in data) {
            console.log(cart + ":", data[cart]);
            trSecondaire.innerHTML = (cart + ":" + data[cart]);
            console.log(typeof [cart]);
            trTroisieme.innerHTML = (cart + ":" + data[cart]);
            console.log(trTroisieme.innerHTML);
            trQuatrieme.innerHTML = (cart + ":" + data[cart]);
            trCinquieme.innerHTML = (cart + ":" + data[cart]);
            trSixieme.innerHTML = (cart + ":" + data[cart]);

        }
    }
    panier();


    // panier.forEach((articleId, article, qty) => {
    //         cart[articleId] = [article.name, qty, article.price];
    //         produitSelectionne.innerHTML = cart;
    //     })
    // JSON.stringify(cart);

    formContactTag.addEventListener("submit", () => {

        fetch("http://localhost:3000/api/furniture/order").then(() =>
            console.log("data envoyée")
        );
    });
}
formulaire();


// Permet de créer la méthode Post. Pour envoyer les données du formulaire à la page Confirmation de commande.

// Permet de créer la récupération et l'affichage des produits ajoutés au panier via la page produit.  Clef / Valeur. set Item.
// Inversement de la syntaxe par rapport à la page produit pour la lecture, 
// la syntaxe JSON.parse() reforme l’objet à partir de la chaîne linéarise et l'affiche sur la page.
//  Transforme le Json en objet java Script pour le renvoyer à L'API dans
//  le formulaire pour l'envoyer ensuite sur la page de confirmation commande.
//  CRUD >  Create (POST), read (GET),  update (PUT), Delete (DELETE); 

// const donnees = {
//     method: "POST",
//     headers: {
//         Allow: "POST",
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({

//     }),
//     mode: "cors",
//     credentials: "same-origin",
// };

// const myHeaders = new Headers();
// const init = {
//     method: "GET",
//     headers: myHeaders,
//     mode: "cors",
//     cache: "default",
// };
// fetch("data.json", init).then((res) => console.log(res));

// const Display = () => {
//     cart = JSON.parse(localStorage.getItem("cart"));
//     articleTag.textContent = cart
//     console.log(cart);

//     alert(JSON.stringify(cart));
// };
// Display();
// console.log(Display);


// //Conversion en chaine JSON
// let json = JSON.stringify(cart);

// .document.appendChild("articleTag").innerHTML =
//     "cart" + typeof(json) + "<br>Contenu de la variable : " + json;