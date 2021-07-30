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
    let prenomManquant = document.createElement("span");
    let labelFirstName = document.createElement("label");

    let inputLastNameTag = document.createElement("input");
    let labelLastName = document.createElement("label");

    let inputAdresseTag = document.createElement("input");
    let labelAdress = document.createElement("label");

    let inputCityTag = document.createElement("input");
    let labelCity = document.createElement("label");

    let inputEmailTag = document.createElement("input");
    let labelEmail = document.createElement("label");

    let inputButtonValidationCommandeTag = document.createElement("input");


    // Appel de toutes les variables pour créer les balises HTML

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

    // Formulaire Prénom 

    formContactTag.id = "Contact";
    formContactTag.setAttribute("method", "post");
    formContactTag.setAttribute("action", "confirmation-de-commande.html");
    formContactTag.className = "col-4 mx-auto text-center";
    inputFirstNameTag.className = "Largeur-Input my-4 mx-2";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    // inputFirstNameTag.setAttribute("onkeyup", "return limitlength(this, 20)");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "First-Name";
    labelFirstName.name = "First-Name";
    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
    articleTag.appendChild(produitSelectionne);
    articleTag.appendChild(quantiteSelectionne);
    articleTag.appendChild(prixDuProduitSelectionne);
    articleTag.appendChild(prixTotalDuPanier);
    sectionTag.appendChild(pTag);
    sectionTag.appendChild(formContactTag);
    formContactTag.appendChild(inputFirstNameTag);
    inputFirstNameTag.appendChild(labelFirstName);

    // Formulaire Nom

    inputLastNameTag.className = "Largeur-Input my-4 mx-2";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    inputLastNameTag.attributes = "required";
    labelLastName.htmlFor = "LastName";
    formContactTag.appendChild(inputLastNameTag);
    inputLastNameTag.appendChild(labelLastName);

    // Formulaire Adresse

    inputAdresseTag.className = "Largeur-Input my-4 mx-2";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "Adresse";
    formContactTag.appendChild(inputAdresseTag);
    inputAdresseTag.appendChild(labelAdress);

    // Formulaire Ville

    inputCityTag.className = "Largeur-Input my-4 mx-2";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "Ville";
    formContactTag.appendChild(inputCityTag);
    inputCityTag.appendChild(labelCity);

    // Formulaire  Email

    inputEmailTag.className = "Largeur-Input my-4 mx-2";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    labelEmail.htmlFor = "Email";
    formContactTag.appendChild(inputEmailTag);
    inputEmailTag.appendChild(labelEmail);

    // Page Panier -> Boutton Validation Commande

    inputButtonValidationCommandeTag.id = "Validation Commande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.setAttribute("maxlength", "20");
    inputButtonValidationCommandeTag.type = "button";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    formContactTag.appendChild(inputButtonValidationCommandeTag);


    /* Fonction qui permet de valider les données saisies dans le formulaire selon le type de données demandés. 
   Prénom, Nom, Code postal, Mail ... 
   */

    inputFirstNameTag.id = "First-Name";
    prenomManquant.id = "PrenomManquant";
    let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    formContactTag.addEventListener('click', validation);

    function validation(event) {
        //Si le champ est vide
        if (inputFirstNameTag.validity.valueMissing) {
            event.preventDefault();
            prenomManquant.textContent = 'Prénom manquant';
            prenomManquant.style.color = 'red';
            //Si le format de données est incorrect ( Valeur exigés écrite dans un format différent ( autre lettres  )
        } else if (prenomValid.test(inputFirstNameTag.value) == false) {
            event.preventDefault();
            prenomManquant.textContent = 'Format incorrect';
            prenomManquant.style.color = 'orange';
        } else {}
    }
    // inputFirstNameTag.onkeyup(function limitlength(obj, length) {
    //     let maxlength = length
    //     if (obj.value.length > maxlength)
    //         obj.value = obj.value.substring(0, maxlength)
    // })
})();


// Methode Post Permet d'envoyer les données saisies dans le formulaire.