// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    // Déclaration de toutes les variables de la page HTML

    let b = document.body;
    let header = document.createElement("header");
    let DivLogo = document.createElement("div");
    let ImageLogo = document.createElement("img");
    let newMain = document.createElement("Main");
    let sectionTag = document.createElement("section");
    let h1Tag = document.createElement("h1");
    let pTag = document.createElement("p");

    let DivFirstNameTag = document.createElement("div");
    let formFirstNameTag = document.createElement("form");
    let inputFirstNameTag = document.createElement("input");
    let LabelFirstName = document.createElement("label");

    let DivLastNameTag = document.createElement("div");
    let formLastNameTag = document.createElement("form");
    let inputLastNameTag = document.createElement("input");
    let LabelLastName = document.createElement("label");

    let DivAddressTag = document.createElement("div");
    let formAddressTag = document.createElement("form");
    let inputAdresseTag = document.createElement("input");
    let LabelAdress = document.createElement("label");

    let DivCityTag = document.createElement("div");
    let formCityTag = document.createElement("form");
    let inputCityTag = document.createElement("input");
    let LabelCity = document.createElement("label");

    let DivEmailTag = document.createElement("div");
    let formEmailTag = document.createElement("form");
    let inputEmailTag = document.createElement("input");
    let LabelEmail = document.createElement("label");

    let DivValidationCommandeTag = document.createElement("div");
    let formValidationCommandeTag = document.createElement("form");
    let inputButtonValidationCommandeTag = document.createElement("input");

    // Appel de toutes les variables pour créer les balises HTML

    header.className = "container-fluid";
    newMain.className = "container-fluid";
    b.appendChild(header);
    b.appendChild(newMain);
    DivLogo.className = "row";
    header.appendChild(DivLogo);
    ImageLogo.className = "col-3";
    ImageLogo.src = "images/Orinoco.png";
    DivLogo.appendChild(ImageLogo);

    sectionTag.className = "row";
    h1Tag.className = "col-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Panier : Détails";
    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(pTag);
    pTag.textContent =
        "Veuillez remplir ce formulaire pour valider votre commande";

    //     // ------------------------------------------------------------------------------ Required-----------------------
    // for (const validation of document
    //         .getElementById("First-Name")
    //         .querySelectorAll("[required]")) {
    //     if (!validation.reportValidity()) {
    //         return;
    //     }
    // }
    // Formulaire Prénom

    DivFirstNameTag.className = "row";
    formFirstNameTag.className = " col-1 mx-auto text-center";
    inputFirstNameTag.className = "my-4 mx-2";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.setAttribute("required", "");
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "text";
    LabelFirstName.htmlFor = "First-Name";
    LabelFirstName.name = "First-Name";
    sectionTag.appendChild(DivFirstNameTag);
    DivFirstNameTag.appendChild(formFirstNameTag);
    formFirstNameTag.appendChild(inputFirstNameTag);
    inputFirstNameTag.appendChild(LabelFirstName);

    // Formulaire Nom

    DivLastNameTag.className = "row";
    formLastNameTag.className = " col-1 mx-auto text-center";
    inputLastNameTag.className = "my-4 mx-2";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.setAttribute("required", "");
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "text";
    inputLastNameTag.attributes = "required";
    LabelLastName.htmlFor = "LastName";
    sectionTag.appendChild(DivLastNameTag);
    DivLastNameTag.appendChild(formLastNameTag);
    formLastNameTag.appendChild(inputLastNameTag);
    inputLastNameTag.appendChild(LabelLastName);

    // Formulaire Adresse

    DivAddressTag.className = "row";
    formAddressTag.className = " col-1 mx-auto text-center";
    inputAdresseTag.className = "my-4 mx-2";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.setAttribute("required", "");
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "text";
    LabelAdress.htmlFor = "Adresse";
    sectionTag.appendChild(DivAddressTag);
    DivAddressTag.appendChild(formAddressTag);
    formAddressTag.appendChild(inputAdresseTag);
    inputAdresseTag.appendChild(LabelAdress);

    // Formulaire Ville

    DivCityTag.className = "row";
    formCityTag.className = " col-1 mx-auto text-center";
    inputCityTag.className = "my-4 mx-2";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.setAttribute("required", "");
    inputCityTag.name = "Ville";
    inputCityTag.type = "text";
    LabelCity.htmlFor = "Ville";
    sectionTag.appendChild(DivCityTag);
    DivCityTag.appendChild(formCityTag);
    formCityTag.appendChild(inputCityTag);
    inputCityTag.appendChild(LabelCity);

    // Formulaire  Email

    DivEmailTag.className = "row";
    formEmailTag.className = " col-1 mx-auto text-center";
    inputEmailTag.className = "my-4 mx-2";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.setAttribute("required", "");
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    LabelEmail.htmlFor = "Email";
    formEmailTag.appendChild(LabelEmail);
    sectionTag.appendChild(DivEmailTag);
    DivEmailTag.appendChild(formEmailTag);
    formEmailTag.appendChild(inputEmailTag);
    inputEmailTag.appendChild(LabelEmail);

    // Page Panier -> Boutton Validation Commande

    DivValidationCommandeTag.className = "form-group mx-auto  text-center";
    formValidationCommandeTag.className = " col-2mx-auto text-center";
    formValidationCommandeTag.id = "IdCommande";
    inputButtonValidationCommandeTag.className = "my-5 mx-3";
    inputButtonValidationCommandeTag.setAttribute("required", "");
    inputButtonValidationCommandeTag.setAttribute("formaction", "confirmation-de-commande.html");
    inputButtonValidationCommandeTag.type = "submit";
    inputButtonValidationCommandeTag.value = "Validation Commande";
    sectionTag.appendChild(DivValidationCommandeTag);
    DivValidationCommandeTag.appendChild(formValidationCommandeTag);
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