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
    let ButtonValidationCommandeTag = document.createElement("input");

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

    // Formulaire Prénom

    DivFirstNameTag.className = "row";
    formFirstNameTag.className = " col-1 mx-auto text-center";
    inputFirstNameTag.className = "my-4 mx-2";
    inputFirstNameTag.id = "First-Name";
    inputFirstNameTag.placeholder = "Entrer un Prénom";
    inputFirstNameTag.name = "First-Name";
    inputFirstNameTag.type = "First-Name";
    inputFirstNameTag.value = "Prénom Validé !";
    formFirstNameTag.textContent = "Prénom";
    LabelFirstName.htmlFor = "First-Name";
    sectionTag.appendChild(DivFirstNameTag);
    DivFirstNameTag.appendChild(formFirstNameTag);
    formFirstNameTag.appendChild(inputFirstNameTag);

    // Formulaire Nom

    DivLastNameTag.className = "row";
    formLastNameTag.className = " col-1 mx-auto text-center";
    inputLastNameTag.className = "my-4 mx-2";
    inputLastNameTag.id = "LastName";
    inputLastNameTag.placeholder = "Entrer un Nom";
    inputLastNameTag.name = "LastName";
    inputLastNameTag.type = "LastName";
    inputLastNameTag.value = "Nom Validé !";
    formLastNameTag.textContent = "Nom";
    LabelLastName.htmlFor = "Last-Name";
    sectionTag.appendChild(DivLastNameTag);
    DivLastNameTag.appendChild(formLastNameTag);
    formLastNameTag.appendChild(inputLastNameTag);

    // Formulaire Adresse

    DivAddressTag.className = "row";
    formAddressTag.className = " col-1 mx-auto text-center";
    inputAdresseTag.className = "my-4 mx-2";
    inputAdresseTag.id = "Adresse";
    inputAdresseTag.placeholder = "Entrer une Adresse";
    inputAdresseTag.name = "Adresse";
    inputAdresseTag.type = "Adresse";
    inputAdresseTag.value = "Adresse Validé !";
    formAddressTag.textContent = "Adresse";
    LabelAdress.htmlFor = "Adresse";
    sectionTag.appendChild(DivAddressTag);
    DivAddressTag.appendChild(formAddressTag);
    formAddressTag.appendChild(inputAdresseTag);

    // Formulaire Ville

    DivCityTag.className = "row";
    formCityTag.className = " col-1 mx-auto text-center";
    inputCityTag.className = "my-4 mx-2";
    inputCityTag.id = "Ville";
    inputCityTag.placeholder = "Entrer Une Ville";
    inputCityTag.name = "Ville";
    inputCityTag.type = "Ville";
    inputCityTag.value = "Ville Validé !";
    formCityTag.textContent = "Ville";
    LabelCity.htmlFor = "Ville";
    sectionTag.appendChild(DivCityTag);
    DivCityTag.appendChild(formCityTag);
    formCityTag.appendChild(inputCityTag);

    // Formulaire  Email

    DivEmailTag.className = "row";
    formEmailTag.className = " col-1 mx-auto text-center";
    inputEmailTag.className = "my-4 mx-2";
    inputEmailTag.id = "Email";
    inputEmailTag.placeholder = "Entrer un email";
    inputEmailTag.name = "Email";
    inputEmailTag.type = "Email";
    inputEmailTag.value = "Adresse Mail Validé !";
    formEmailTag.textContent = "Adresse Email";
    LabelEmail.htmlFor = "Email";
    formEmailTag.appendChild(LabelEmail);
    sectionTag.appendChild(DivEmailTag);
    DivEmailTag.appendChild(formEmailTag);
    formEmailTag.appendChild(inputEmailTag);

    // Page Panier -> Boutton Validation Commande

    DivValidationCommandeTag.className = "form-group mx-auto  text-center";
    formValidationCommandeTag.className = " col-2mx-auto text-center";
    formValidationCommandeTag.id = "IdCommande";
    ButtonValidationCommandeTag.className = "my-5 mx-3";
    ButtonValidationCommandeTag.type = "submit";
    ButtonValidationCommandeTag.value = "Validation Commande";
    sectionTag.appendChild(DivValidationCommandeTag);
    DivValidationCommandeTag.appendChild(formValidationCommandeTag);
    formValidationCommandeTag.appendChild(ButtonValidationCommandeTag);
})();

window.addEventListener("load", function() {
    function sendData() {
        let XHR = new XMLHttpRequest();

        // Liez l'objet FormData et l'élément form
        let FD = new FormData(form);

        // Définissez ce qui se passe si la soumission s'est opérée avec succès
        XHR.addEventListener("load", function(event) {
            alert(event.target.responseText);
        });

        // Definissez ce qui se passe en cas d'erreur
        XHR.addEventListener("error", function(event) {
            alert("Oups! Quelque chose s'est mal passé.");
        });

        // Configurez la requête
        XHR.open("POST", "https://example.com/cors.php");

        // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
        XHR.send(FD);
    }

    // Accédez à l'élément form …
    let form = document.getElementById("IdCommande");

    // … et prenez en charge l'événement submit.
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        sendData();
    });
});