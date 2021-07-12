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

    let DivLastNameTag = document.createElement("div");
    let formLastNameTag = document.createElement("form");
    let inputLastNameTag = document.createElement("input");

    let DivAddressTag = document.createElement("div");
    let formAddressTag = document.createElement("form");
    let inputAdresseTag = document.createElement("input");

    let DivCityTag = document.createElement("div");
    let formCityTag = document.createElement("form");
    let inputCityTag = document.createElement("input");

    let DivEmailTag = document.createElement("div");
    let formEmailTag = document.createElement("form");
    let inputEmailTag = document.createElement("input");

    let DivValidationCommandeTag = document.createElement("div");
    let formValidationCommandeTag = document.createElement("form");
    let ButtonValidationCommandeTag = document.createElement("input");

    // Appel de toutes les variables pour créer les balises HTML

    header.className = "container-fluid";
    newMain.className = "container-fluid";
    b.appendChild(header);
    b.appendChild(newMain);
    DivLogo.className = "row";
    header.appendChild(DivLogo);
    ImageLogo.className = "col-6";
    ImageLogo.src = "images/Orinoco.png";
    DivLogo.appendChild(ImageLogo);

    sectionTag.className = "row";
    h1Tag.className = "col-12 col-lg-12 my-4 text-center";
    pTag.className = "font-weight-bolder my-4 text-center";
    h1Tag.textContent = "Panier : Détails";
    newMain.appendChild(sectionTag);
    sectionTag.appendChild(h1Tag);
    sectionTag.appendChild(pTag);
    pTag.textContent =
        "Veuillez remplir ce formulaire pour valider votre commande";

    // Formulaire Prénom

    DivFirstNameTag.className = "form-group";
    formFirstNameTag.className = "col-12 col-lg-12 text-center";
    inputFirstNameTag.className = "my-1 mx-2";
    formFirstNameTag.textContent = "Prénom";
    sectionTag.appendChild(DivFirstNameTag);
    DivFirstNameTag.appendChild(formFirstNameTag);
    formFirstNameTag.appendChild(inputFirstNameTag);

    // Formulaire Nom

    DivLastNameTag.className = "form-group";
    formLastNameTag.className = "col-12 col-lg-12 text-center";
    inputLastNameTag.className = "my-1 mx-2";
    formLastNameTag.textContent = "Nom";
    sectionTag.appendChild(DivLastNameTag);
    DivLastNameTag.appendChild(formLastNameTag);
    formLastNameTag.appendChild(inputLastNameTag);

    // Formulaire Adresse

    DivAddressTag.className = "form-group";
    formAddressTag.className = "col-12 col-lg-12 text-center";
    inputAdresseTag.className = "my-3 mx-2";
    formAddressTag.textContent = "Adresse";
    sectionTag.appendChild(DivAddressTag);
    DivAddressTag.appendChild(formAddressTag);
    formAddressTag.appendChild(inputAdresseTag);

    // Formulaire Ville

    DivCityTag.className = "form-group";
    formCityTag.className = "col-12 col-lg-12 text-center";
    inputCityTag.className = "my-1 mx-2";
    formCityTag.textContent = "Ville";
    sectionTag.appendChild(DivCityTag);
    DivCityTag.appendChild(formCityTag);
    formCityTag.appendChild(inputCityTag);

    // Formulaire  Email

    DivEmailTag.className = "form-group";
    formEmailTag.className = "col-12 col-lg-12 text-center";
    inputEmailTag.className = "my-1 mx-2";
    formEmailTag.textContent = "Adresse Email";
    sectionTag.appendChild(DivEmailTag);
    DivEmailTag.appendChild(formEmailTag);
    formEmailTag.appendChild(inputEmailTag);

    // Page Panier -> Boutton Validation Commande

    DivValidationCommandeTag.className = "form-group";
    formValidationCommandeTag.className =
        "btn btn-secondary my-5 mx-2 col-12 col-lg-12 text-center";
    ButtonValidationCommandeTag.className = "my-1 mx-1";
    ButtonValidationCommandeTag.type = "submit";
    ButtonValidationCommandeTag.value = "Validation Commande";
    sectionTag.appendChild(DivValidationCommandeTag);
    DivValidationCommandeTag.appendChild(formValidationCommandeTag);
    formValidationCommandeTag.appendChild(ButtonValidationCommandeTag);
})();