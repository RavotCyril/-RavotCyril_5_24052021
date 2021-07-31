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
    let firstNameMiss = document.createElement("span");
    let labelFirstName = document.createElement("label");

    let inputLastNameTag = document.createElement("input");
    let lastNameMiss = document.createElement("span");
    let labelLastName = document.createElement("label");

    let inputAdresseTag = document.createElement("input");
    let adresseMiss = document.createElement("span");
    let labelAdress = document.createElement("label");

    let inputCityTag = document.createElement("input");
    let cityMiss = document.createElement("span");
    let labelCity = document.createElement("label");

    let inputEmailTag = document.createElement("input");
    let emailMiss = document.createElement("span");
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

    inputFirstNameTag.className = "Largeur-Input col-12 my-4 mx-auto";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    // inputFirstNameTag.setAttribute("onkeyup", "return limitlength(this, 20)");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "First-Name";
    labelFirstName.name = "First-Name";
    formContactTag.appendChild(inputFirstNameTag);
    formContactTag.appendChild(firstNameMiss);
    inputFirstNameTag.appendChild(labelFirstName);

    // Formulaire Nom

    inputLastNameTag.className = "Largeur-Input col-12 my-4 mx-auto";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    inputLastNameTag.attributes = "required";
    labelLastName.htmlFor = "LastName";
    formContactTag.appendChild(inputLastNameTag);
    formContactTag.appendChild(lastNameMiss);
    inputLastNameTag.appendChild(labelLastName);

    // Formulaire Adresse

    inputAdresseTag.className = "Largeur-Input col-12 my-4 mx-auto";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "Adresse";
    formContactTag.appendChild(inputAdresseTag);
    formContactTag.appendChild(adresseMiss);
    inputAdresseTag.appendChild(labelAdress);

    // Formulaire Ville

    inputCityTag.className = "Largeur-Input col-12 my-4 mx-auto";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "Ville";
    formContactTag.appendChild(inputCityTag);
    formContactTag.appendChild(cityMiss);
    inputCityTag.appendChild(labelCity);

    // Formulaire  Email

    inputEmailTag.className = "Largeur-Input col-12 my-4 mx-auto";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    labelEmail.htmlFor = "Email";
    formContactTag.appendChild(inputEmailTag);
    formContactTag.appendChild(emailMiss);
    inputEmailTag.appendChild(labelEmail);

    // Page Panier -> Boutton Validation Commande

    inputButtonValidationCommandeTag.id = "Validation Commande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.setAttribute("maxlength", "20");
    inputButtonValidationCommandeTag.type = "button";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    formContactTag.appendChild(inputButtonValidationCommandeTag);


    /* Création des Variable qui permettent de vérifier les inputs
    Fonction qui permet de valider les données saisies dans le formulaire selon le type de données demandés. 
   Prénom, Nom, Code postal, Mail ... 
   */

    let firstNameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    let lastNameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    let adresseValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    let emailValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    inputButtonValidationCommandeTag.addEventListener('click', validation);

    function validation(event) {
        //Si le champ est vide
        if (inputFirstNameTag.validity.valid) {
            event.preventDefault();
            firstNameMiss.textContent = 'Prénom Ok';
            firstNameMiss.style.color = 'green';
        } else if (inputFirstNameTag.validity.valueMissing) {
            event.preventDefault();
            firstNameMiss.textContent = 'Prénom Manquant';
            firstNameMiss.style.color = 'red';


            //Si le format de données est incorrect ( Valeur exigés écrite dans un format différent
            // Exemple : Des Chiffre par exemple alors que du texte est demandé
        } else if (firstNameValid.test(inputFirstNameTag.value) == false) {
            event.preventDefault();
            firstNameMiss.textContent = 'Format Incorrect';
            firstNameMiss.style.color = 'orange';

        }
        if (inputLastNameTag.validity.valueMissing) {
            event.preventDefault();
            lastNameMiss.textContent = 'Nom Manquant';
            lastNameMiss.style.color = 'red';
        } else if (lastNameValid.test(inputLastNameTag.value) == false) {
            event.preventDefault();
            lastNameMiss.textContent = 'Format Incorrect';
            lastNameMiss.style.color = 'orange';

        }
        if (inputAdresseTag.validity.valueMissing) {
            event.preventDefault();
            adresseMiss.textContent = 'Adresse Manquante';
            adresseMiss.style.color = 'red';

        } else if (adresseValid.test(inputAdresseTag.value) == false) {
            event.preventDefault();
            adresseMiss.textContent = 'Format Incorrect';
            adresseMiss.style.color = 'orange';

        }
        if (inputCityTag.validity.valueMissing) {
            event.preventDefault();
            cityMiss.textContent = 'Ville Manquante';
            cityMiss.style.color = 'red';
        } else if (cityValid.test(inputCityTag.value) == false) {
            event.preventDefault();
            cityMiss.textContent = 'Format Incorrect';
            cityMiss.style.color = 'orange';

        }
        if (inputEmailTag.validity.valueMissing) {
            event.preventDefault();
            emailMiss.textContent = 'Email Manquant';
            emailMiss.style.color = 'red';
            emailMiss.style.display = 'flex';
            emailMiss.style.justifyContent = 'center';

        } else if (emailValid.test(inputEmailTag.value) == false) {
            event.preventDefault();
            emailMiss.textContent = 'Format Incorrect';
            emailMiss.style.color = 'orange';
            emailMiss.style.display = 'flex';
            emailMiss.style.justifyContent = 'center';
        }
    }
})();
// inputFirstNameTag.onkeyup(function limitlength(obj, length) {
//     let maxlength = length
//     if (obj.value.length > maxlength)
//         obj.value = obj.value.substring(0, maxlength)
// })


// Methode Post Permet d'envoyer les données saisies dans le formulaire.