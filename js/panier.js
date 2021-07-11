// Variable -> Déclaration  -> Balise body-Main-Logo-Nav-Liens-Titre-Article-... - Html de la page.
(async function() {
    let b = document.body;
    let newMain = document.createElement("Main");
    let DivLogo = document.createElement("div");
    let ImageLogo = document.createElement("img");
    let h1Tag = document.createElement("h1");

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

    newMain.className = "container";
    b.appendChild(newMain);
    DivLogo.className = "Logo";
    newMain.appendChild(DivLogo);
    ImageLogo.src = "images/Orinoco.png";
    DivLogo.appendChild(ImageLogo);
    h1Tag.textContent = "Panier : Détails";
    newMain.appendChild(h1Tag);

    DivFirstNameTag.className = "row";
    formFirstNameTag.className = "col-12 col-lg-4";
    formFirstNameTag.textContent = "Prénom";
    newMain.appendChild(DivFirstNameTag);
    DivFirstNameTag.appendChild(formFirstNameTag);
    formFirstNameTag.appendChild(inputFirstNameTag);

    DivLastNameTag.className = "row";
    formLastNameTag.className = "col-12 col-lg-4";
    formLastNameTag.textContent = "Nom";
    newMain.appendChild(DivLastNameTag);
    DivLastNameTag.appendChild(formLastNameTag);
    formLastNameTag.appendChild(inputLastNameTag);

    DivAddressTag.className = "row";
    formAddressTag.className = "col-12 col-lg-4";
    formAddressTag.textContent = "Adresse";
    newMain.appendChild(DivAddressTag);
    DivAddressTag.appendChild(formAddressTag);
    formAddressTag.appendChild(inputAdresseTag);

    DivCityTag.className = "row";
    formCityTag.className = "col-12 col-lg-4";
    formCityTag.textContent = "Ville";
    newMain.appendChild(DivCityTag);
    DivCityTag.appendChild(formCityTag);
    formCityTag.appendChild(inputCityTag);

    DivEmailTag.className = "row";
    formEmailTag.className = "col-12 col-lg-4";
    formEmailTag.textContent = "Adresse Email";
    newMain.appendChild(DivEmailTag);
    DivEmailTag.appendChild(formEmailTag);
    formEmailTag.appendChild(inputEmailTag);

    DivValidationCommandeTag.className = "row";
    formValidationCommandeTag.className = "col-12 col-lg-4";
    ButtonValidationCommandeTag.type = "submit";
    ButtonValidationCommandeTag.value = "Validation Commande";
    newMain.appendChild(DivValidationCommandeTag);
    DivValidationCommandeTag.appendChild(formValidationCommandeTag);
    formValidationCommandeTag.appendChild(ButtonValidationCommandeTag);
})();