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
    let vernisSelectionne = document.createElement("p");
    let prixDuProduitSelectionne = document.createElement("p");
    let prixTotalDuPanier = document.createElement("p");
    let pTag = document.createElement("p");

    let divFirstNameTag = document.createElement("div");
    let formFirstNameTag = document.createElement("form");
    let inputFirstNameTag = document.createElement("input");
    let labelFirstName = document.createElement("label");

    let divLastNameTag = document.createElement("div");
    let formLastNameTag = document.createElement("form");
    let inputLastNameTag = document.createElement("input");
    let labelLastName = document.createElement("label");

    let divAddressTag = document.createElement("div");
    let formAddressTag = document.createElement("form");
    let inputAdresseTag = document.createElement("input");
    let labelAdress = document.createElement("label");

    let divCityTag = document.createElement("div");
    let formCityTag = document.createElement("form");
    let inputCityTag = document.createElement("input");
    let labelCity = document.createElement("label");

    let divEmailTag = document.createElement("div");
    let formEmailTag = document.createElement("form");
    let inputEmailTag = document.createElement("input");
    let labelEmail = document.createElement("label");

    let divValidationCommandeTag = document.createElement("div");
    let formValidationCommandeTag = document.createElement("form");
    let inputButtonValidationCommandeTag = document.createElement("input");

    // Appel de toutes les variables pour créer les balises HTML

    newMain.className = "container-fluid";
    b.appendChild(newMain);


    sectionTag.className = "row";
    h1Tag.className = "col-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Panier : Détails";
    produitSelectionne.textContent = "Produit Selectionné";
    vernisSelectionne.textContent = "Vernis Selectionné";
    prixDuProduitSelectionne.textContent = "Prix Du Produit Selectionné";
    prixTotalDuPanier.textContent = "Prix Total Du Panier";
    articleTag.className = "col-12 Article-Panier-Détails";
    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
    articleTag.appendChild(produitSelectionne);
    articleTag.appendChild(vernisSelectionne);
    articleTag.appendChild(prixDuProduitSelectionne);
    articleTag.appendChild(prixTotalDuPanier);
    sectionTag.appendChild(pTag);
    pTag.textContent = "Veuillez remplir ce formulaire pour valider votre commande";

    //     // ------------------------------------------------------------------------------ Required-----------------------
    // for (const validation of document
    //         .getElementById("First-Name")
    //         .querySelectorAll("[required]")) {
    //     if (!validation.reportValidity()) {
    //         return;
    //     }
    // }
    // Formulaire Prénom

    divFirstNameTag.className = "row";
    formFirstNameTag.className = "col-12 mx-auto text-center";
    inputFirstNameTag.className = "Largeur-Input my-4 mx-2";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    labelFirstName.htmlFor = "First-Name";
    labelFirstName.name = "First-Name";
    sectionTag.appendChild(divFirstNameTag);
    divFirstNameTag.appendChild(formFirstNameTag);
    formFirstNameTag.appendChild(inputFirstNameTag);
    inputFirstNameTag.appendChild(labelFirstName);

    // Formulaire Nom

    divLastNameTag.className = "row";
    formLastNameTag.className = "col-12 mx-auto text-center";
    inputLastNameTag.className = "Largeur-Input my-4 mx-2";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    inputLastNameTag.attributes = "required";
    labelLastName.htmlFor = "LastName";
    sectionTag.appendChild(divLastNameTag);
    divLastNameTag.appendChild(formLastNameTag);
    formLastNameTag.appendChild(inputLastNameTag);
    inputLastNameTag.appendChild(labelLastName);

    // Formulaire Adresse

    divAddressTag.className = "row";
    formAddressTag.className = "col-12 mx-auto text-center";
    inputAdresseTag.className = "Largeur-Input my-4 mx-2";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    labelAdress.htmlFor = "Adresse";
    sectionTag.appendChild(divAddressTag);
    divAddressTag.appendChild(formAddressTag);
    formAddressTag.appendChild(inputAdresseTag);
    inputAdresseTag.appendChild(labelAdress);

    // Formulaire Ville

    divCityTag.className = "row";
    formCityTag.className = "col-12 mx-auto text-center";
    inputCityTag.className = "Largeur-Input my-4 mx-2";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    labelCity.htmlFor = "Ville";
    sectionTag.appendChild(divCityTag);
    divCityTag.appendChild(formCityTag);
    formCityTag.appendChild(inputCityTag);
    inputCityTag.appendChild(labelCity);

    // Formulaire  Email

    divEmailTag.className = "row";
    formEmailTag.className = "col-12 mx-auto text-center";
    inputEmailTag.className = "Largeur-Input my-4 mx-2";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    labelEmail.htmlFor = "Email";
    formEmailTag.appendChild(labelEmail);
    sectionTag.appendChild(divEmailTag);
    divEmailTag.appendChild(formEmailTag);
    formEmailTag.appendChild(inputEmailTag);
    inputEmailTag.appendChild(labelEmail);

    // Page Panier -> Boutton Validation Commande

    divValidationCommandeTag.className = "form-group mx-auto  text-center";
    formValidationCommandeTag.className = "col-2 mx-auto text-center";
    formValidationCommandeTag.id = "IdCommande";
    inputButtonValidationCommandeTag.className = "Boutton-Largeur-Input my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.setAttribute("formaction", "confirmation-de-commande.html");
    inputButtonValidationCommandeTag.type = "submit";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    sectionTag.appendChild(divValidationCommandeTag);
    divValidationCommandeTag.appendChild(formValidationCommandeTag);
    formValidationCommandeTag.appendChild(inputButtonValidationCommandeTag);
})();

// Methode Post Permet d'envoyer les données saisies dans le formulaire.

function postForm() {
    const param = window.location.search;
    const form = param.replace("?form=", "");
    return form;
}

async function postInput(form) {
    try {
        let res = await fetch("http://localhost:3000/api/furniture/" + form);
        return await res.json();
    } catch (error) {
        alert(error);
    }
}